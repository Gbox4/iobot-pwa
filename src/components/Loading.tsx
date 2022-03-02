import ProgressBar from "./ProgressBar";

export default function Loading() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center" style={{backgroundColor: "black"}}>
            <p style={{color: "white"}}>Loading...</p>
            <ProgressBar />
        </div>
    )
}