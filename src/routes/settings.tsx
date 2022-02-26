import { Link } from "react-router-dom";
import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Settings() {
    return (
      <div className="bg-dark-bg h-screen text-left">
      <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">


        <div className="flex flex-row w-full justify-between text-center">
          <Button><p className="text-dark-text">Dark</p></Button>
          <div className="w-12" />
          <Button><p className="text-dark-text">Light</p></Button>
          <div className="w-12" />
          <Button><p className="text-dark-text">Blue</p></Button>
        </div>
          <Divider margin="16px 0"/>
        <div className="flex flex-row w-full justify-between text-center">
          <Button><p className="text-dark-text">Refresh</p></Button>
          <div className="w-12" />
          <Button><p className="text-dark-text">Hard Refresh</p></Button>
        </div>
          <Divider margin="16px 0"/>
        <div className="flex flex-row w-full justify-between text-center">
          <Button><p className="text-dark-text">Reset settings</p></Button>
        </div>
  
          <Divider margin="16px 0"/>
        <div className="flex flex-row w-full justify-between text-center">
          <Button><Link to="/"><p className="text-dark-text">Back</p></Link></Button>
        </div>
      </div>
      </div>
    );
  }