// Loads the data. Shows a lodaing screen until the data is loaded.

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./routes/calendar";
import Detail from "./routes/detail";
import Settings from "./routes/settings";

export default function Root() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="date">
                <Route path=":date" element={<Detail />} />
            </Route>
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
        </BrowserRouter>
    );
  }