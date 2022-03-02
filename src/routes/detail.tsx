import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ScreenProps } from "../api/globals";
import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Detail(props: ScreenProps) {
  const params = useParams()
  const dateStr = params.date
  
  const calendarItem = props.calendarData!.find(x => x.dateStr === dateStr)
  
  if (calendarItem) {
    let listPeriods: JSX.Element[] = []

    if (calendarItem.schedule){   
        calendarItem.schedule.forEach((x, i) => {
          listPeriods.push(
              <div key={2*i} className="flex flex-row justify-between">
                  <p className="text-base">{x.periodName}</p>
                  <p className="text-base">{x.timeStart.toTimeString().slice(0,5)} - {x.timeEnd.toTimeString().slice(0,5)}</p>
              </div>
          )
          listPeriods.push(<Divider theme={props.theme} key={2*i+1}/>)
      })
    }
    else {
        listPeriods.push((
            <div><p>no calendar found for today</p></div>
        ))
    }


    return (
      <div className={`h-screen text-center`} style={props.theme.body}>
        <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
          <div className={`flex flex-col w-full rounded-3xl p-8 mb-6`} style={props.theme.container}>
            <p className="text-xl">{calendarItem.dateStr}</p>
            {calendarItem?.dayEvents.map((x, i) => {
              return (
                <p key={i} className="text-xl">{x}</p>
              )
            })}
          </div>
          
          <div className={`overflow-y-auto w-full rounded-3xl p-8 h-1/2 mb-6`} style={props.theme.container}>
            <div className="h-full flex flex-col justify-between">
              <div />
              {listPeriods.slice(0,-1)}
              <div />
            </div>
          </div>

          <Button theme={props.theme}><Link to="/calendar"><p>Back</p></Link></Button>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center" style={props.theme.body}>
        <p>No data :(</p>
        <Button theme={props.theme}><Link to="/calendar"><p>Back</p></Link></Button>
      </div>
    )
  }
}