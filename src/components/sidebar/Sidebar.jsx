import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
            <span>Dashboard</span></Link>
          </li>
          <p className="title">CUSTOMERS</p>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customer List</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Add New Customer</span>
              
            </li>
          </Link>
          {/* <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">Ticketing</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>List</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Add New</span>
          </li>
          <p className="title">Projects</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>List</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Add New</span>
          </li>
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">Work Order</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>List</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Add New</span>
          </li>
          <p className="title">Staff</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Staff</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Permissions</span>
          </li>
          <p className="title">Company</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Company Information</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Email</span>
          </li>
          <p className="title">Reports</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Total Tickets</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Overall Report</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
