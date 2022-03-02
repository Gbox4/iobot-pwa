import { Link } from "react-router-dom";
import { calendarItemInterface } from "../api/cacheFile";
import { ScreenProps, ThemeInterface } from "../api/globals";
import Button from "../components/Button";
import Divider from "../components/Divider";

const ONE_DAY = 1000 * 60 * 60 * 24

// Get text color depending on whether the day has passed or not
const getRowStyle = (calendarItem: calendarItemInterface, theme: ThemeInterface) => {
    const now = new Date()
    if (now.getTime() - calendarItem.dateObj.getTime() > 0 && now.getTime() - calendarItem.dateObj.getTime() < ONE_DAY) {
        return theme.currenttext
    }
    else if (now.getTime() - calendarItem.dateObj.getTime() > 0) {
        return theme.donetext
    }
    else {
        return theme.upcomingtext
    }
}

export default function Calendar(props: ScreenProps) {
    // Initalize empty array to hold the calendar days
    const listDays: JSX.Element[] = []
    // Iterate through the calendar list, convert each one into an element and push it to the listDays
    props.calendarData!.forEach((x, i) => {
        listDays.push(
            <Link key={i*2} to={`/date/${x.dateStr}`}>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-between" style={getRowStyle(x, props.theme)}>
                        <p>{x.dateStr}</p>
                        <p>{x.dayEvents.find(x => x.includes('Schedule')) ?? "No data"}</p>
                    </div>
                    <div>
                        <svg height={20} width={20} viewBox="0 0 256 512"><path fill={props.theme.text.color} d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                    </div>
                </div>
            </Link>
        )
        // Also push a Divider to the array
        listDays.push(<div key={2*i+1}><Divider theme={props.theme} margin="6px 0"/></div>)
    });

    return (
      <div className="h-screen text-left" style={props.theme.body}>
        <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
          <div className="flex flex-col w-full rounded-3xl p-8 h-4/5 mb-6 overflow-y-scroll" style={props.theme.container}>
            {listDays.slice(0,-1)}
          </div>
    
          <div className="flex flex-row w-full justify-between text-center">
            <Button theme={props.theme}><Link to="/"><p>Back</p></Link></Button>
          </div>
        </div>
      </div>
    );
}