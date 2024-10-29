import { useState } from "react";
import City from "./components/City";
import Display from "./components/Display";
import FormeatChange from "./components/FormeatChange";

export default function App() {
  const [temp, setTemp] = useState(0)
  const [icon, setIcon] = useState("")
  const [units, setUnits] = useState("metric")
  return (
    <div className="App">
    <City setTemp={setTemp} setIcon={setIcon}  units={units}/>
      
    <Display temp ={temp} icon={icon}/>
    <FormeatChange setUnits ={setUnits}/>
    </div>
  )
}
