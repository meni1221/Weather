export interface Props{
  setUnits:(units:string)=>void
}
export default function BtnF({setUnits}:Props) {
  const changeTemp=()=>{
    setUnits("imperial")
  }
  return (
    <button onClick={changeTemp}>
      f°
    </button>
  )
}
