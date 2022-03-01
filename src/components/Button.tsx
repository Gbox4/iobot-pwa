import { ComponentProps } from "../api/globals";

export default function Button(props: ComponentProps) {
    return (
        <div onClick={props.onClick} className={`w-full bg-${props.theme}-button py-2 rounded-full`}>
            {props.children}
        </div>
    )
}