import {useContext} from 'react'
import { Link } from "react-router-dom"
import { UserContext } from '../../context/userContext'
import { THEME_PRIMARY_COLOR } from "../constants"
import { capitalizeFirstLetter } from '../utility/stringFunctions';
import Avatar from '../commons/Avatar';
import Dropdown from '../commons/Dropdown';

export default function Navbar() {
  const {user} = useContext(UserContext);
  const {name} = user || {};

  const dropdownData = [
    { label: 'Logout', link: '/logout' },
    { label: 'Item 2', link: '/item2' },
    { label: 'Item 3', link: '/item3' },
    // Add more items as needed
  ];

  return (
    <nav className={`text-[${THEME_PRIMARY_COLOR}] shadow-md bg-black opacity-70 p-4 w-full top-0 flex justify-between items-center`}>
      <Link className="text-lg font-bold" to="/">Home</Link>
      <div className="flex items-center space-x-4">
        {user ?
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Avatar initials={capitalizeFirstLetter(name)} dropdownData={dropdownData} />
          </>
          :
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        }
      </div>
    </nav>
  )
}

