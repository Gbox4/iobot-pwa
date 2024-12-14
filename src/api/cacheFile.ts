import { ThemeStrInterface } from "./globals";

const calendarUrl = "https://cors.gabebanks.net/https://calendar.google.com/calendar/ical/iolani.org_ds7482aj4fh4uortauf8vuquso%40group.calendar.google.com/public/basic.ics"

export interface scheduleItemInterface {
  timeStart: Date;
  timeEnd: Date;
  periodName: string;
}

export interface calendarItemInterface {
  dateStr: string;
  dateObj: Date;
  letter?: string;
  dayEvents: string[],
  schedule: scheduleItemInterface[];
}

// Turn a Date object into the format "Sunday, January 1, 2022"
export const getFormattedDate = (now: Date) => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const day = days[ now.getDay() ];
  const date = now.getDate()
  const month = months[ now.getMonth() ];
  const year = now.getFullYear()

  return `${day}, ${month} ${date}, ${year}`
} 

// Turn a string of the format "YYYYMMDDThhmmssZ" into a Date object
export const dateStrToObj = (dateString: string) => {
  // Is it a day long event? If not, it will have the format "YYYYMMDDThhmmssZ"
  if (dateString.includes("T")){
    const year        = parseInt(dateString.substring(0,4))
    const month       = parseInt(dateString.substring(4,6))-1
    const day         = parseInt(dateString.substring(6,8))
    const hour        = parseInt(dateString.substring(9,11))
    const minute      = parseInt(dateString.substring(11,13))

    let date          = new Date(year, month)
    date.setUTCDate(day)
    date.setUTCHours(hour)
    date.setUTCMinutes(minute)
    return date
  }
  // else, it is a day long event, and it will have the format "YYYYMMDDT"
  else {
    const year        = parseInt(dateString.substring(0,4))
    const month       = parseInt(dateString.substring(4,6))-1
    const day         = parseInt(dateString.substring(6,8))

    let date          = new Date(year, month, day)
    return date
  }
}


// Deletes the downloaded calendar ICS file and generated JSON file
export async function deleteCalendarData() {
    console.log("deleting calendar data...")
    localStorage.removeItem('calendar')
}

// downloads calendar ICS and parses the data into a Javascript object
async function getCalendarICS() {
  // See if the file exists or not
  console.log("Downloading calendar ics...");
  let res = await fetch(calendarUrl);
  let rawData = await res.text()
  
  // Get raw data and take out all the backslashes
  rawData = rawData.replace(/\\/g, "")

  // get ready to parse the raw data
  let calendar: calendarItemInterface[] = []
  let rawEvents = rawData.split("BEGIN:VEVENT").slice(1)

  // Parse the data and fill the Calendar object
  for (let i = 0; i < rawEvents.length; i++) {
    const element = rawEvents[i];
    // If the event has VALUE=DATE in it, then it's a day-long event.
    if (element.includes("DTSTART;VALUE=DATE:")) {
      let dateObj = dateStrToObj(element.split("DTSTART;VALUE=DATE:")[1].split("\n")[0].trim())
      let summary = element.split("SUMMARY:")[1].split("\n")[0].trim()
      // Try to find an existing entry for the day
      let existingCalendarItem = calendar.find((x) => {return x.dateObj.getTime() === dateObj.getTime()})
      // If there's already an entry for the day, just add the event to the day
      if (existingCalendarItem) {
        existingCalendarItem.dayEvents.push(summary)
      }
      // Else, create the new day entry
      else {
        let newCalendarItem: calendarItemInterface = {
          dateStr: getFormattedDate(dateObj),
          dateObj: dateObj,
          dayEvents: [summary],
          schedule: [],
        }
        calendar.push(newCalendarItem)
      }
    }
    // Else, it is an intra-day event. Aka a class period.
    else {
      // Some of the events are broken and don't have DTSTART or DTEND. I think they're really old events and we don't need to worry
      // about them, so we can just skip them.
      if (!element.includes("DTEND:") || !element.includes("DTSTART:")) {
        continue
      }

      // Extract the information from the event
      let startObj = dateStrToObj(element.split("DTSTART:")[1].split("\n")[0].trim())
      let endObj = dateStrToObj(element.split("DTEND:")[1].split("\n")[0].trim())
      let summary = element.split("SUMMARY:")[1].split("\n")[0].trim()
      // Create a schedule item using the information
      let newScheduleItem: scheduleItemInterface = {
        timeStart: startObj,
        timeEnd: endObj,
        periodName: summary,
      }
      // The number of milliseconds in one day
      const ONE_DAY = 1000 * 60 * 60 * 24
      // Again, try to find a calendar item that matches the day.
      let existingCalendarItem = calendar.find((x) => {return startObj.getTime() - x.dateObj.getTime() > 0 && startObj.getTime() - x.dateObj.getTime() < ONE_DAY})
      // If there's already an entry for the day, just add the scheduleitem to the day's schedule
      if (existingCalendarItem) {
        existingCalendarItem.schedule.push(newScheduleItem)
      }
      // Else, create a new day entry
      else {
        let dateObj = new Date(startObj)
        dateObj.setHours(0)
        dateObj.setMinutes(0)
        let newCalendarItem: calendarItemInterface = {
          dateStr: getFormattedDate(dateObj),
          dateObj: dateObj,
          dayEvents: [],
          schedule: [newScheduleItem],
        }
        calendar.push(newCalendarItem)
      }
    }
  }

  // Sort the calendar by date
  calendar.sort((a,b) => {
    //@ts-ignore
    return a.dateObj - b.dateObj
  })

  // Sort each day's periods by time
  calendar.forEach(element => {
    element.schedule.sort((a,b) => {
      //@ts-ignore
      return a.timeStart - b.timeStart
    })
  })

  return calendar;
}

export async function checkCalendarUpdate() {
  let lastUpdate = localStorage.getItem('lastUpdate')
  if (!lastUpdate) {
    lastUpdate = "0"
  }
  if (new Date().getTime() - parseInt(lastUpdate) > 1000 * 60 * 60 * 24 * 7) {
    // if (new Date().getTime() - parseInt(lastUpdate) > 2592000000) {
    deleteCalendarData()
    localStorage.setItem("lastUpdate", new Date().getTime().toString())
    window.location.href = window.location.href;
  }
}

// returns JSON data for calendar by reading it from the file, or creates the file from a raw, freshly downloaded ICS
async function getCalendarData() {
  let rawData = localStorage.getItem('calendar')
  // if the JSON file doesn't exist, create it from the ICS file.
  if (!rawData) {
    console.log("JSON file doesn't exist, creating file");
    let icsData = await getCalendarICS()
    localStorage.setItem("calendar", JSON.stringify(icsData))
    rawData = JSON.stringify(icsData)
  }
  
  // parse the JSON data
  let calendar: calendarItemInterface[] = JSON.parse(rawData)
  // you gotta manually turn each date into a Date object because JSON.parse will interpret the ISO time string as a plain old string
  calendar = calendar.map(x => {
    x.dateObj = new Date(x.dateObj)
    x.schedule.forEach(y => {
      y.timeEnd = new Date(y.timeEnd)
      y.timeStart = new Date(y.timeStart)
    })
    return x
  })
  // Filter out all entries that aren't within the next three months
  // Or in the previous 5 days
  const timeAfter = 1000 * 60 * 60 * 24 * 90
  const timeBefore = -(1000 * 60 * 60 * 24 * 5)
  calendar = calendar.filter((x) => {
    const timeDelta = x.dateObj.getTime() - new Date().getTime()
    return timeDelta > timeBefore && timeDelta < timeAfter
  })
  return calendar
}

// delete the settings.json file
export async function deleteSettingsData() {
  console.log("deleting settings data...")
  localStorage.removeItem('settings')
}

// write a new settings.json file
export async function saveSettingsData(settings: SettingsInterface) {
  console.log("saving settings data...")
  localStorage.removeItem('settings')
  localStorage.setItem('settings', JSON.stringify(settings))
}

// type for defining how settings should be passed to components
export interface SettingsInterface {
  theme: ThemeStrInterface,
}

// return the contents of settings.json in a javascript object
async function getSettingsData() {
  // make sure the file exists, if not, create a default one
  let rawData = localStorage.getItem('settings')
  if (!rawData) {
    console.log("setttings.json doesn't exist, creating file");
    let defaultSettings: SettingsInterface = {
      theme: "dark"
    }
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
    rawData = JSON.stringify(defaultSettings)
  }
  
  // read raw data contents and parse into javscript object
  let settings: SettingsInterface = JSON.parse(rawData)
  return settings
}

// function for fetching both calendar and settings data stored in JSON files.
export async function getFileData() {
  const output = {
    calendarData: await getCalendarData(),
    settings: await getSettingsData(),
  }
  return output
}
