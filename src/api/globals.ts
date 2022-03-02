import { MouseEventHandler } from "react";
import { calendarItemInterface, SettingsInterface } from "./cacheFile";
import { TimeDataInterface } from "./CalculateTime";

// types for defining how themes are written
export type ThemeStrInterface = "blue" | "light" | "dark"
export type ThemeInterface = {
    text: any,
    secondarytext: any,
    container: any,
    body: any,
    button: any,
    donetext: any,
    upcomingtext: any,
    currenttext: any,
}

// global function for getting the color of a component depending on the theme
export const getTheme = (theme: ThemeStrInterface) => {
    // const in case a theme wants to use shadows
    const shadows = {
        boxShadow: "2px 2px 8px 0px rgba(0,0,0,0.3)"
    }

    const blueTheme: ThemeInterface = {
        text: { color: "#ffffff" },
        secondarytext: { color: "#5a5a5a" },
        container: { backgroundColor: "rgba(255,255,255,0.05)" },
        body: { backgroundColor: "#10101c", color: "#ffffff" },
        button: { backgroundColor: "#327ebe" },
        donetext: { color: "#a6a6a6" },
        upcomingtext: { color: "#ffffff" },
        currenttext: { color: "rgba(61,197,66,1)" },
    }

    const darkTheme: ThemeInterface = {
        text: { color: "#ffffff" },
        secondarytext: { color: "#5a5a5a" },
        container: { backgroundColor: "rgba(255,255,255,0.07)" },
        body: { backgroundColor: "#000000", color: "#ffffff" },
        button: { backgroundColor: "#972b2b" },
        donetext: { color: "#a6a6a6" },
        upcomingtext: { color: "#ffffff" },
        currenttext: { color: "rgba(61,197,66,1)" },
    }

    const lightTheme: ThemeInterface = {
        text: { color: "#000000" },
        secondarytext: { color: "#5a5a5a" },
        container: {
            backgroundColor: "#ffffff",
            ...shadows
        },
        body: { backgroundColor: "#f7f7f7", color: "#000000" },
        button: {
            backgroundColor: "#77c0ff",
            ...shadows
        },
        donetext: { color: "#a6a6a6" },
        upcomingtext: { color: "#000000" },
        currenttext: { color: "rgba(61,197,66,1)" },
    }

    if (theme === "blue") { return blueTheme }
    else if (theme === "dark") { return darkTheme }
    else if (theme === "light") { return lightTheme }
    // If for some reason a different string is passed in (should never happen), then return dark theme as a fallback
    else { return darkTheme }
}

export interface ComponentProps {
    theme: ThemeInterface;
    children?: JSX.Element | JSX.Element[];
    text?: string;
    link?: string;
    margin?: string;
    onClick?: MouseEventHandler;
}

export interface ScreenProps {
    theme: ThemeInterface;
    todayCalendar?: calendarItemInterface;
    timeData?: TimeDataInterface;
    settings?: SettingsInterface;
    refreshApp?: Function;
    calendarData?: calendarItemInterface[];
    setTheme?: React.Dispatch<React.SetStateAction<ThemeInterface>>;
}