import { MouseEventHandler } from "react";
import { calendarItemInterface, SettingsInterface, ThemeStrInterface } from "./cacheFile";

export interface ComponentProps {
    theme: ThemeStrInterface;
    children?: JSX.Element | JSX.Element[];
    text?: string;
    link?: string;
    margin?: string;
    onClick?: MouseEventHandler;
}

export interface ScreenProps {
    theme: ThemeStrInterface;
    settings?: SettingsInterface;
    refreshApp?: Function;
    calendarData?: calendarItemInterface[];
    setTheme?: React.Dispatch<React.SetStateAction<"blue" | "light" | "dark">>
}