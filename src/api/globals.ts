import { MouseEventHandler } from "react";
import { calendarItemInterface, SettingsInterface } from "./cacheFile";
import { TimeDataInterface } from "./CalculateTime";

// types for defining how themes are written
export type ThemeStrInterface = string
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
        container: { backgroundColor: "#ffffff", ...shadows },
        body: { backgroundColor: "#f7f7f7", color: "#000000" },
        button: { backgroundColor: "rgba(184,222,255,1)", ...shadows },
        donetext: { color: "#a6a6a6" },
        upcomingtext: { color: "#000000" },
        currenttext: { color: "rgba(61,197,66,1)" },
    }

    const plumeriaTheme: ThemeInterface = {
        text: { color: "#ffffff" },
        secondarytext: { color: "#5a5a5a" },
        container: { backgroundColor: "rgba(0,0,0,0.3)", ...shadows },
        body: { background: "linear-gradient(150deg, rgba(238,192,146,1) 0%, rgba(140,76,197,1) 100%)", color: "#ffffff" },
        button: { background: "linear-gradient(150deg, rgba(235,146,107,1) 0%, rgba(179,49,95,1) 100%)", ...shadows },
        donetext: { color: "#a6a6a6" },
        upcomingtext: { color: "#ffffff" },
        currenttext: { color: "rgba(61,197,66,1)" },
    }

    const aquaTheme: ThemeInterface = {
        text: { color: "#ffffff" },
        secondarytext: { color: "#5a5a5a" },
        container: { backgroundColor: "rgba(0,0,0,0.3)", ...shadows },
        body: { background: "linear-gradient(150deg, rgba(135,201,192,1) 0%, rgba(39,64,100,1) 100%)", color: "#ffffff" },
        button: { background: "linear-gradient(150deg, rgba(67,141,164,1) 0%, rgba(36,88,164,1) 100%)", ...shadows },
        donetext: { color: "#a6a6a6" },
        upcomingtext: { color: "#ffffff" },
        currenttext: { color: "rgba(61,197,66,1)" },
    }

    const lavenderTheme: ThemeInterface = {
        text: { color: "#ffffff" },
        secondarytext: { color: "#cccccc" },
        container: { backgroundColor: "#B392AC" },
        body: { background:  "#735D78", color: "#ffffff" },
        button: { background:  "#D1B3C4" },
        donetext: { color: "#dddddd" },
        upcomingtext: { color: "#ffffff" },
        currenttext: { color: "rgba(76,232,81,1)" },
    }

    if (theme === "blue") { return blueTheme }
    else if (theme === "dark") { return darkTheme }
    else if (theme === "light") { return lightTheme }
    else if (theme === "plumeria") { return plumeriaTheme }
    else if (theme === "aqua") { return aquaTheme }
    else if (theme === "lavender") { return lavenderTheme }
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