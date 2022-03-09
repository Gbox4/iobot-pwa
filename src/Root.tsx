// Loads the data. Shows a lodaing screen until the data is loaded.

import Today from "./Today";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./routes/calendar";
import Detail from "./routes/detail";
import Settings from "./routes/settings";
import { useEffect, useState } from "react";
import { calendarItemInterface, getFileData, SettingsInterface } from "./api/cacheFile";
import Loading from "./components/Loading";
import { getTheme } from "./api/globals";
import getCurrentTimeData, { TimeDataInterface } from "./api/CalculateTime";

const ONE_DAY = 1000 * 60 * 60 * 24

export default function Root() {
    // set the state to empty versions of the variable
    const emptyCalendar: calendarItemInterface[] = []
    const emptySettings: SettingsInterface = {theme: "dark"}
    const emptyTimeData: TimeDataInterface = {
        status: 5,
        dateStr: "",
    }

    const [calendar, setCalendar] = useState(emptyCalendar)
    const [settings, setSettings] = useState(emptySettings)
    const [theme, setTheme] = useState(getTheme("dark"))
    const [timeData, setTimeData] = useState(emptyTimeData)
    
    const refreshApp = () => {
        setCalendar([])
        getFileData().then(x => {
            console.log("loading data...")
            setSettings(x.settings)
            setTheme(getTheme(x.settings.theme))
            // load this last
            setCalendar(x.calendarData)
            console.log("data loaded!")
        })
    }

    useEffect(() => {
        refreshApp()
    }, [])

    setTimeout(() => {
        if (calendar.length > 0) {
            const todayCalendar = calendar.find(x => {
                const now = new Date()
                return now.getTime() - x.dateObj.getTime() > 0 && now.getTime() - x.dateObj.getTime() < ONE_DAY
            })
            setTimeData(getCurrentTimeData(todayCalendar))

            if (settings.theme === "awful") {
                setTheme(getTheme("awful"))
            }
        }
    }, 1000)

    return (
        (calendar.length === 0) ?
        <Loading/>
        :
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Today theme={theme} timeData={timeData} />} />
            <Route path="calendar" element={<Calendar theme={theme} calendarData={calendar} />} />
            <Route path="date">
                <Route path=":date" element={<Detail theme={theme} calendarData={calendar} />} />
            </Route>
            <Route path="settings" element={<Settings theme={theme} settings={settings} setTheme={setTheme} refreshApp={refreshApp} />} />
            <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </BrowserRouter>
    );
  }