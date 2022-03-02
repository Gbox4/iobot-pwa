import { ComponentProps } from "../api/globals";

export default function Button(props: ComponentProps) {
    return (
        <div onClick={props.onClick} className={`w-full py-2 rounded-full`} style={props.theme.button}>
            {props.children}
        </div>
    )
}