import { useState } from "react";
import { Link } from "react-router-dom";
import { calendarItemInterface } from "./api/cacheFile";
import { TimeDataInterface } from "./api/CalculateTime";
import { ScreenProps, ThemeInterface } from "./api/globals";
import Button from "./components/Button";
import TodaySchedule from "./components/TodaySchedule";
import TodayStatus from "./components/TodayStatus";
import TodayTimer from "./components/TodayTimer";

export interface TodayComponentProps {
  theme: ThemeInterface,
  timeData?: TimeDataInterface,
  todayCalendar?: calendarItemInterface,
}

export default function Today(props: ScreenProps) {

  const [fstimer, setfstimer] = useState(false)

  if (fstimer) {
    return (
      <div className={`h-screen text-center`} style={props.theme.body}>
        <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">          
          <div className={`overflow-y-auto w-full rounded-3xl p-8 h-4/5 mb-6 flex flex-col justify-center items-center`} style={props.theme.container} onClick={() => {setfstimer(!fstimer)}}>
            <TodayTimer theme={props.theme} timeData={props.timeData} />
          </div>
        </div>
      </div>
    );
  }

  else {
    return (
      <div className={`h-screen text-center`} style={props.theme.body}>
        <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
          <div className={`flex flex-col w-full rounded-3xl p-8 mb-6`} style={props.theme.container} onClick={() => {setfstimer(!fstimer)}}>
            <TodayStatus theme={props.theme} timeData={props.timeData!}/>
          </div>
          
          <div className={`overflow-y-auto w-full rounded-3xl p-8 h-1/2 mb-6`} style={props.theme.container}>
            <TodaySchedule theme={props.theme} timeData={props.timeData!}/>
          </div>

          <div className="flex flex-row w-full justify-between">
            <Button theme={props.theme}><Link to="/calendar"><p>Calendar</p></Link></Button>
            <div className="w-10" />
            <Button theme={props.theme}><Link to="/settings"><p>Settings</p></Link></Button>
          </div>
        </div>
      </div>
    );
  }
}