// Loads the data. Shows a lodaing screen until the data is loaded.

import Today from "./Today";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./routes/calendar";
import Detail from "./routes/detail";
import Settings from "./routes/settings";
import { useEffect, useState } from "react";
import { calendarItemInterface, getFileData, SettingsInterface } from "./api/cacheFile";
import Loading from "./components/Loading";

export default function Root() {
    const emptyCalendar: calendarItemInterface[] = []
    const emptySettings: SettingsInterface = {theme: "dark"}

    const [calendar, setCalendar] = useState(emptyCalendar)
    const [settings, setSettings] = useState(emptySettings)
    const [theme, setTheme] = useState(settings.theme)

    const refreshApp = () => {
        setCalendar([])
        getFileData().then(x => {
            console.log("loading data...")
            setSettings(x.settings)
            setTheme(x.settings.theme)
            // load this last
            setCalendar(x.calendarData)
            console.log("data loaded!")
        })
    }

    useEffect(() => {
        refreshApp()
    }, [])

    return (
        (calendar.length === 0) ?
        <Loading/>
        :
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Today theme={theme} calendarData={calendar}/>} />
            <Route path="calendar" element={<Calendar theme={theme} calendarData={calendar}/>} />
            <Route path="date">
                <Route path=":date" element={<Detail />} />
            </Route>
            <Route path="settings" element={<Settings theme={theme} settings={settings} setTheme={setTheme} refreshApp={refreshApp} />} />
            <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </BrowserRouter>
    );
  }