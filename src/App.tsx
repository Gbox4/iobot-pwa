import { Link, Outlet } from "react-router-dom";


export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>

      <div>
        <Link to="/calendar">Calendar</Link>
        <br/>
        <Link to="/settings">Settings</Link>

        <Outlet/>
      </div>
    </div>
  );
}