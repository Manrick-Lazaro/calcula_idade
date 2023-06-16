import { useState } from 'react'
import './App.css'

function App() {
  const [inputName, setInputName] = useState<string>()
  const [inputYear, setInputYear] = useState<number | string>()
  
  const [name, setName] = useState<string>()
  const [year, setYear] = useState<number>()

  const date = new Date()

  const currentYear = date.getFullYear()

  function submit() {
    if(inputName && inputYear) {
      setName(inputName)
      setYear(currentYear - Number(inputYear))
    }
    setInputName("")
    setInputYear("")
  }

  return (
    <section className='container'>
      <h1 className='title'>Descubra sua idade</h1>

      <div className='formDivContainer'>
        <form className='form' onSubmit={submit}>
          <label className='labelInput'>Digite seu nome</label>
          <input 
            className='inputForm' 
            type="text"
            value={inputName}
            onChange={ (e) => setInputName(e.target.value) }
            placeholder='Ex: joão'  
          />

          <label className='labelInput'>Digite sua idade</label>
          <input
            className='inputForm' 
            type="text"
            value={inputYear}
            onChange={ (e) => setInputYear(Number(e.target.value)) } 
            placeholder='Ex: 1999'
          />
        </form>
        <button onClick={submit} className='submite'>Descobrir idade</button>
      </div>
      {name && year && (<p className='text'>{name} você tem: {year} anos</p>)}
    </section>
  )
}

export default App
