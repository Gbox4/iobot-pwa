import { Link } from "react-router-dom";
import { TimeDataInterface } from "./api/CalculateTime";
import { ScreenProps, ThemeInterface } from "./api/globals";
import Button from "./components/Button";
import TodayStatus from "./components/TodayStatus";

export interface TodayComponentProps {timeData: TimeDataInterface,  theme: ThemeInterface}

export default function Today(props: ScreenProps) {
  return (
    <div className={`h-screen text-center`} style={props.theme.body}>
      <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
        <div className={`flex flex-col w-full rounded-3xl p-8 mb-6`} style={props.theme.container}>
          <TodayStatus theme={props.theme} timeData={props.timeData!}/>
        </div>
        
        <div className={`flex flex-col justify-between w-full rounded-3xl p-8 h-1/2 mb-6`} style={props.theme.container}>
          
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