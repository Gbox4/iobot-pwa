import { ComponentProps } from "../api/globals";

export default function Divider(props: ComponentProps) {
    return (
        <div className="w-full bg-dark-divider my-1" style={{height: "1px", margin: props.margin}} />
    )
}