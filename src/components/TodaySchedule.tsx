import { scheduleItemInterface } from "../api/cacheFile";
import { ThemeInterface } from "../api/globals";
import { TodayComponentProps } from "../Today";
import Divider from "./Divider";

// returns a color depending on if the class is done, in session, or upcoming
const getRowStyle = (scheduleItem: scheduleItemInterface, theme: ThemeInterface) => {
    const now = new Date()
    if (now.getTime() - scheduleItem.timeEnd.getTime() > 0) {
        return theme.donetext
    }
    else if (now.getTime() - scheduleItem.timeStart.getTime() < 0) {
        return theme.upcomingtext
    }
    else {
        return theme.currenttext
    }
}

// component for the schedule on the Today page
export default function TodaySchedule(props: TodayComponentProps) {

    const timeData = props.timeData!

    let listPeriods: JSX.Element[] = []
    // if the status is 4, there is no school
    if (timeData.status === 4) {
        return (
            <div>
                <p>No schedule data</p>
            </div>
        )
    }
    // otherwise generate and show the schedule
    else {
        if (timeData.fullSchedule){   
            timeData.fullSchedule.forEach((x, i) => {
                listPeriods.push(
                    <div key={2*i} className="flex flex-row justify-between">
                        <p className="text-base" style={getRowStyle(x, props.theme)}>{x.periodName}</p>
                        <p className="text-base" style={getRowStyle(x, props.theme)}>{x.timeStart.toTimeString().slice(0,5)} - {x.timeEnd.toTimeString().slice(0,5)}</p>
                    </div>
                )
                listPeriods.push(<Divider theme={props.theme} margin="2px 0" key={2*i+1}/>)
            })
        }
        else {
            listPeriods.push(
                <div><p>No data</p></div>
            )
        }
        return(
            <div className="h-full flex flex-col justify-between">
                <div />
                {listPeriods.slice(0,-1)}
                <div />
            </div>
        )
    }
}