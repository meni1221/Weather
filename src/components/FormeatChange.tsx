import BtnC from './BtnC'
import BtnF from './BtnF'

export interface Props{
  setUnits:(units:string)=>void
}

export default function FormeatChange({setUnits}:Props) {
  return (
    <div className='formeatChange'>
      <BtnC setUnits ={setUnits}/>
      <BtnF setUnits ={setUnits}/>
    </div>
  )
}
