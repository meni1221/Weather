import { useEffect, useState } from "react"

interface Props {
  setTemp:(temp:number)=>void
  setIcon:(icon:string)=>void
  units:string
}
export default function City({setTemp, setIcon, units}:Props) {

  const [city,setCity] = useState ("") 
  useEffect(()=>{SearchCity()},[units])
  const SearchCity = async()=>{
    const apiKey ="d7f64e05043d19af9eb95658ec1a2f74"
    const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
    const data = await res.json()
    console.log(data)
    setTemp (data.main.temp)
    setIcon (data.weather[0].icon)
    
    }
  return (
    <div className='City'>
      <input type="text" 
      placeholder='Search for a City'
      onChange={(e)=> {setCity(e.target.value);SearchCity()}}/>
    </div>
  )
}
