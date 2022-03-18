import { useState, useEffect, useContext } from "react";

import { UserContext } from "../../context/UserContext"

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch"

import { users } from "../../../constants/users";


const SiderbarSwitch: React.FC = () => {

  const [isActive, setIsActive] = useState(true);
  const userContext = useContext(UserContext);

  const handleChange = () => {
    setIsActive((prevState) => !prevState);
  }

  useEffect(() => {
    const user = isActive ? users[0] : users[1]
    userContext?.setUser(user)
  }, [isActive, userContext])

  return (
    <FormControlLabel control={<Switch onChange={handleChange} checked={isActive} />} className="chat__user" label={isActive ? users[0].name : users[1].name} />
  )
}

export default SiderbarSwitch;