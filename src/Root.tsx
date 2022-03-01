// Loads the data. Shows a lodaing screen until the data is loaded.

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./routes/calendar";
import Detail from "./routes/detail";
import Settings from "./routes/settings";
import { useEffect, useState } from "react";
import { calendarItemInterface, getFileData, SettingsInterface } from "./api/parseData";
import Loading from "./components/Loading";

export default function Root() {
    const emptyCalendar: calendarItemInterface[] = []
    const emptySettings: SettingsInterface = {theme: "dark"}

    const [calendar, setCalendar] = useState(emptyCalendar)
    const [settings, setSettings] = useState(emptySettings)

    const refreshApp = () => {
        setCalendar([])
        getFileData().then(x => {
            console.log("loading data...")
            setSettings(x.settings)
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
            <Route path="/" element={<App />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="date">
                <Route path=":date" element={<Detail />} />
            </Route>
            <Route path="settings" element={<Settings refreshApp={refreshApp} />} />
            <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </BrowserRouter>
    );
  }