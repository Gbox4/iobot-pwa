import { useState } from "react";
import { Link } from "react-router-dom";
import getCurrentTimeData, { TimeDataInterface } from "./api/CalculateTime";
import { ScreenProps } from "./api/globals";
import Button from "./components/Button";
import Divider from "./components/Divider";
import TodayStatus from "./components/TodayStatus";

const ONE_DAY = 1000 * 60 * 60 * 24
export interface TodayComponentProps {timeData: TimeDataInterface}

export default function Today(props: ScreenProps) {
  // set the state to empty versions of the variable
  const emptyTimeData: TimeDataInterface = {
    status: 5,
    dateStr: "",
  }
  const [timeData, setTimeData] = useState(emptyTimeData)

  const todayCalendar = props.calendarData!.find(x => {
    const now = new Date()
    return now.getTime() - x.dateObj.getTime() > 0 && now.getTime() - x.dateObj.getTime() < ONE_DAY
  })

  setTimeout(() => {
    setTimeData(getCurrentTimeData(todayCalendar))
  }, 1000)

  return (
    <div className={`bg-${props.theme}-bg text-${props.theme}-text h-screen text-center`}>
      <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
        <div className={`flex flex-col bg-${props.theme}-container w-full rounded-3xl p-8 mb-6`}>
          <TodayStatus timeData={timeData}/>
        </div>
        
        <div className={`flex flex-col justify-between bg-${props.theme}-container w-full rounded-3xl p-8 h-1/2 mb-6`}>

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