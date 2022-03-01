import { MouseEventHandler } from "react";

export interface ComponentProps {
    children?: JSX.Element | JSX.Element[];
    text?: string;
    link?: string;
    margin?: string;
    onClick?: MouseEventHandler;
}

export interface ScreenProps {
    refreshApp?: Function;
}