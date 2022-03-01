import { Link } from "react-router-dom";
import { ScreenProps } from "../api/globals";
import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Calendar(props: ScreenProps) {
    return (
      <div className="bg-dark-bg h-screen text-left">
      <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
        <div className="flex flex-col bg-dark-container w-full rounded-3xl p-8 h-4/5 mb-6 overflow-y-scroll">
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
          <Divider theme={props.theme} />
          <div className="flex flex-col justify-between">
            <p className="text-xl text-dark-text">Friday, February 25, 2022</p>
            <p className="text-xl text-dark-text">X Schedule</p>
          </div>
        </div>
  
        <div className="flex flex-row w-full justify-between text-center">
          <Button theme={props.theme}><Link to="/"><p className="text-dark-text">Back</p></Link></Button>
        </div>
      </div>
      </div>
    );
  }