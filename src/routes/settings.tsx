import { Link, useNavigate } from "react-router-dom";
import { getTheme, ScreenProps, ThemeStrInterface } from "../api/globals";
import { deleteCalendarData, deleteSettingsData, saveSettingsData } from "../api/cacheFile";
import Button from "../components/Button";
import Divider from "../components/Divider";

export default function Settings(props: ScreenProps) {

  const navigate = useNavigate()

  const fastRefresh = () => {
      //@ts-ignore
      props.refreshApp()
      navigate("/")
    }
    
    const hardRefresh = () => {
      deleteCalendarData()
      //@ts-ignore
      props.refreshApp()
      navigate("/")
    }

    const setTheme = (theme: ThemeStrInterface) => {
      props.setTheme!(getTheme(theme))
      let newSettings = props.settings!
      newSettings.theme = theme
      saveSettingsData(newSettings)
    }

    const resetSettings = () => {
      deleteSettingsData()
      //@ts-ignore
      props.refreshApp()
    }


  return (
    <div className="h-screen text-left" style={props.theme.body}>
      <div className="flex flex-col justify-center items-center h-screen max-w-lg mx-auto w-11/12">


        <div className="flex flex-row w-full justify-between text-center">
          <Button theme={props.theme} onClick={() => {setTheme("dark")}}><p>Dark</p></Button>
          <div className="w-12" />
          <Button theme={props.theme} onClick={() => {setTheme("light")}}><p>Light</p></Button>
          <div className="w-12" />
          <Button theme={props.theme} onClick={() => {setTheme("blue")}}><p>Blue</p></Button>
        </div>

        <Divider theme={props.theme} margin="16px 0"/>

        <div className="flex flex-row w-full justify-between text-center">
          <Button theme={props.theme} onClick={fastRefresh}><p>Refresh</p></Button>
          <div className="w-12" />
          <Button theme={props.theme} onClick={hardRefresh}><p>Hard Refresh</p></Button>
        </div>
        
        <Divider theme={props.theme} margin="16px 0"/>

        <div className="flex flex-row w-full justify-between text-center">
          <Button theme={props.theme} onClick={resetSettings}><p>Reset settings</p></Button>
        </div>

        <Divider theme={props.theme} margin="16px 0"/>

        <div className="flex flex-row w-full justify-between text-center">
          <Button theme={props.theme}><Link to="/"><p>Back</p></Link></Button>
        </div>

        <div style={{marginTop: 16}}/>

        <p className="text-sm" style={props.theme.secondarytext}>Created by <a target="_blank" rel="noopener noreferrer" href="https://gabebanks.net">Gabe Banks</a> 2022</p>

      </div>
    </div>
  );
}