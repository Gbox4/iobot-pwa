import { Link } from "react-router-dom";
import Button from "./components/Button";
import Divider from "./components/Divider";

export default function App() {
  return (
    <div className="bg-dark-bg h-screen text-center">
    <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
      <div className="flex flex-col bg-dark-container w-full rounded-3xl p-8 mb-6">
        <p className="text-xl text-dark-text">Today is Friday, February 25, 2022</p>
        <p className="text-xl text-dark-text">D schedule</p>
        <p className="text-4xl text-dark-text">34:45</p>
        <p className="text-xl text-dark-text">Left in Period X</p>
      </div>
      
      <div className="flex flex-col justify-between bg-dark-container w-full rounded-3xl p-8 h-1/2 mb-6">
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between">
          <p className="text-xl text-dark-text">Period X</p>
          <p className="text-xl text-dark-text">7:40 - 8:10</p>
        </div>
      </div>

      <div className="flex flex-row w-full justify-between">
        <Button><Link to="/calendar"><p className="text-dark-text">Calendar</p></Link></Button>
        <div className="w-10" />
        <Button><Link to="/settings"><p className="text-dark-text">Settings</p></Link></Button>
      </div>
    </div>
    </div>
  );
}