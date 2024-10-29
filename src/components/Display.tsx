
interface Props{
  temp:number
  icon:string
}
export default function Display({temp,icon}:Props) {

  return (
    <div className="display">
      <h2>{temp}°</h2>
      {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>}
    </div>
  )
}
