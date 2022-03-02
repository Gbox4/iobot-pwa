import { TodayComponentProps } from "../Today";

// component for the status section of the today page
export default function TodayStatus(props: TodayComponentProps) {

    const timeData = props.timeData!
    // see api/CalculateTime.ts for what the status codes mean
    if (timeData.status === 0) {
        return (
          <div>
            <p className="text-xl">School has not started</p>
          </div>
        )
    }
    else if (timeData.status === 1) {
        return(
          <div>
              <p className="text-xl">Today is {timeData.dateStr}</p>
              <p className="text-xl">{timeData.letter}</p>
              <p className="text-4xl">{timeData.timeLeft}</p>
              <p className="text-xl">Left in {timeData.periodName}</p>
          </div>
        )
    }
    else if (timeData.status === 2) {
        return(
          <div>
            <p className="text-xl">Today is {timeData.dateStr}</p>
            <p className="text-xl">{timeData.letter}</p>
            <p className="text-4xl">{timeData.timeLeft}</p>
            <p className="text-xl">Until {timeData.periodName}</p>
          </div>
        )
    }
    else if (timeData.status === 3) {
        return (
          <div>
            <p className="text-xl">Today is {timeData.dateStr}</p>
            <p className="text-xl">Classes are over</p>
          </div>
        )
    }
    else { // therefore timestatus=4
        return (
          <div>
            <p className="text-xl">Today is {timeData.dateStr}</p>
            <p className="text-xl">No data for today</p>
          </div>
        )
    }
}

