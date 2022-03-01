import { TodayComponentProps } from "../Today";

// component for the status section of the today page
export default function TodayStatus(props: TodayComponentProps) {
    // see api/CalculateTime.ts for what the status codes mean
    if (props.timeData.status === 0) {
        return (
            <p className="text-xl">School has not started</p>
        )
    }
    else if (props.timeData.status === 1) {
        return(
          <div>
              <p className="text-xl">Today is {props.timeData.dateStr}</p>
              <p className="text-xl">{props.timeData.letter}</p>
              <p className="text-4xl">{props.timeData.timeLeft}</p>
              <p className="text-xl">Left in {props.timeData.periodName}</p>
          </div>
        )
    }
    else if (props.timeData.status === 2) {
        return(
          <div>
            <p className="text-xl">Today is {props.timeData.dateStr}</p>
            <p className="text-xl">{props.timeData.letter}</p>
            <p className="text-4xl">{props.timeData.timeLeft}</p>
            <p className="text-xl">Until {props.timeData.periodName}</p>
          </div>
        )
    }
    else if (props.timeData.status === 3) {
        return (
          <div>
            <p className="text-xl">Today is {props.timeData.dateStr}</p>
            <p className="text-xl">Classes are over</p>
          </div>
        )
    }
    else { // therefore timestatus=4
        return (
          <div>
            <p className="text-xl">Today is {props.timeData.dateStr}</p>
            <p className="text-xl">No data for today</p>
          </div>
        )
    }
}

