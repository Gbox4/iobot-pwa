import { TodayComponentProps } from "../Today";

// component for the status section of the today page
export default function TodayTimer(props: TodayComponentProps) {

    const timeData = props.timeData!
    // see api/CalculateTime.ts for what the status codes mean
    if (timeData.status === 0) {
        return (
          <div>
            <p className="text-lg">School has not started</p>
          </div>
        )
    }
    else if (timeData.status === 1) {
        return(
          <div>
            <p className="text-8xl">{timeData.timeLeft}</p>
            <p className="text-4lg">Left in {timeData.periodName}</p>
          </div>
        )
    }
    else if (timeData.status === 2) {
        return(
          <div>
            <p className="text-8xl">{timeData.timeLeft}</p>
            <p className="text-4lg">Until {timeData.periodName}</p>
          </div>
        )
    }
    else if (timeData.status === 3) {
        return (
          <div>
            <p className="text-lg">Classes are over</p>
          </div>
        )
    }
    else { // therefore timestatus=4
        return (
          <div>
            <p className="text-lg">No data for today</p>
          </div>
        )
    }
}

