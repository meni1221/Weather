export interface Props{
  setUnits:(units:string)=>void
}

export default function BtnC({setUnits}:Props) {
  const changeTemp=()=>{
    setUnits("metric")
  }
  return (
    <button onClick={changeTemp}>
      c°
    </button>
  )
}
