import { calendarItemInterface, getFormattedDate, scheduleItemInterface } from "./cacheFile"

// ensure that time numbers always have a leading "0"
const formatNumber = (x: number) => {
    return x > 9 ? "" + x : "0" + x
}

// return the formatted time until the specified Date object
function getTimeLeft(until: Date){
    const now = new Date()

    const msLeft = until.getTime() - now.getTime()
    // convert milliseconds to hh:mm:ss format
    const secondsLeft = ~~(msLeft / 1000) // Boom!
    const minutesLeft = ~~(secondsLeft / 60)
    if (secondsLeft > 60) {
        return `${formatNumber(minutesLeft)}:${formatNumber(secondsLeft - 60 * minutesLeft)}`
    }
    else if (secondsLeft >= 0) {
        return `${formatNumber(secondsLeft)}s`
    }
}

// gets the current period as a  given the schedule
function getCurrentPeriod(schedule: scheduleItemInterface[]) {
    const now = new Date()
    for (let i = 0; i < schedule.length; i++) {
        const element = schedule[i];
        if (now.getTime() - element.timeStart.getTime() > 0 && now.getTime() - element.timeEnd.getTime() < 0) {
            return element
        }
    }
}

// Gets the next period given a schedule
function getNextPeriod(schedule: scheduleItemInterface[]) {
    const now = new Date()
    for (let i = 0; i < schedule.length; i++) {
        const element = schedule[i];
        if (now.getTime() - element.timeStart.getTime() < 0) {
            return element
        }
    }
}

// Returns a status code based on the current time and given a schedule
function getStatus(schedule: scheduleItemInterface[]) { // 0=before school, 1=in class, 2=in between classes, 3=after class, 4=no schedule, 5=loading
    const now = new Date()
    if (now.getTime() - schedule[0].timeStart.getTime() < 0) {
        // return 0
        // act as if it's in between to give time until start of school
        return 2
    }
    else if (now.getTime() - schedule[schedule.length-1].timeEnd.getTime() > 0) {
        return 3
    }
    else if (getCurrentPeriod(schedule)) {
        return 1
    }
    else {
        return 2
    }
}

// Interface for how timedata is passed to components, mainly used in TodayScreen
export interface TimeDataInterface {
    status: number,
    dateStr: string,
    fullSchedule?: scheduleItemInterface[],
    scheduleItem?: scheduleItemInterface,
    periodName?: string,
    letter?: string,
    timeLeft?: string,
}

// Returns a complete timedata object given today's calendar
export default function getCurrentTimeData(todayCalendar: calendarItemInterface | undefined) {
    let letter = undefined
    if (todayCalendar) {
        letter = todayCalendar.dayEvents.find(x => {return x.includes('Schedule')})
    }
    // check if the day exists
    if (todayCalendar && letter){
        const status = getStatus(todayCalendar.schedule)
        //@ts-ignore    I'm gonna keep this if statement in case I ever want to switch back. I probably won't, but hey, the code is already written :)
        if (status === 0) {
            const output: TimeDataInterface = {status: 0, fullSchedule: todayCalendar.schedule, dateStr: todayCalendar.dateStr}
            return output
        }
        else if (status === 3) {
            const output: TimeDataInterface = {status: 3, fullSchedule: todayCalendar.schedule, dateStr: todayCalendar.dateStr}
            return output
        }
        else if (status == 1) {
            const thisPeriod = getCurrentPeriod(todayCalendar.schedule)!
            const output: TimeDataInterface = {
                status: 1,
                fullSchedule: todayCalendar.schedule,
                scheduleItem: thisPeriod,
                dateStr: todayCalendar.dateStr,
                periodName: thisPeriod.periodName,
                letter: letter,
                timeLeft: getTimeLeft(thisPeriod.timeEnd)!,
            }
            return output
        }
        else { // Therefore status = 2
            const thisPeriod = getNextPeriod(todayCalendar.schedule)!
            const output: TimeDataInterface = {
                status: 2,
                fullSchedule: todayCalendar.schedule,
                scheduleItem: thisPeriod,
                dateStr: todayCalendar.dateStr,
                periodName: thisPeriod.periodName,
                letter: letter,
                timeLeft: getTimeLeft(thisPeriod.timeStart)!,
            }
            return output
        }
        
    }
    // otherwise, there is no schedule for the day
    else {
        const output: TimeDataInterface = {status: 4, dateStr: getFormattedDate(new Date())}
        return output
    }
}
