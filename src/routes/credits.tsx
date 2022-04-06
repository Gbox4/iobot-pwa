import { Link } from "react-router-dom";
import { ScreenProps } from "../api/globals";
import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Credits(props: ScreenProps) {

  return (
    <div className="h-screen text-left" style={props.theme.body}>
      <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">
        <p className="text-sm" style={props.theme.secondarytext}>Created and written by <a target="_blank" rel="noopener noreferrer" href="https://gabebanks.net" className="underline">Gabe Banks</a> 2022</p>
        
        <p className="text-sm mt-4" style={props.theme.secondarytext}>Wouldn't be possible without:</p>
        <p className="text-sm" style={props.theme.secondarytext}>Scott Watanuki for planning and consulting</p>
        <p className="text-sm" style={props.theme.secondarytext}>Korry Luke for inspiration of original IoBot</p>
        <p className="text-sm" style={props.theme.secondarytext}>Scott Weaver for deployment and distribution</p>

        <p className="text-sm mt-4" style={props.theme.secondarytext}>Special thanks to beta testers:</p>
        <p className="text-sm" style={props.theme.secondarytext}>Owen Banks</p>
        <p className="text-sm" style={props.theme.secondarytext}>Naomi Jenfort</p>
        <p className="text-sm" style={props.theme.secondarytext}>Alex Gavrilchik</p>
        <p className="text-sm" style={props.theme.secondarytext}>Sean Cottrell</p>
        <p className="text-sm" style={props.theme.secondarytext}>Jaron Kawamura</p>
        <p className="text-sm" style={props.theme.secondarytext}>Niko Yim</p>

        <Divider theme={props.theme} margin="16px 0"/>

        <div className="flex flex-row w-full justify-between text-center">
          <Button theme={props.theme}><Link to="/settings"><p>Back</p></Link></Button>
        </div>

 

      </div>
    </div>
  );
}