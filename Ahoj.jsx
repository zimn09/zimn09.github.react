import React, {useState} from 'react'

function Ahoj() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

 let [num, setNum] = useState(Math.floor(Math.random() * 100) + 1)
 let [text, setText] = useState('')
 const ahoj = () => {
    console.log(inputValue)
  if(inputValue > num) {
    setText("Hádej menší číslo")}
    else if(inputValue < num) {
        setText("Hádej větší číslo")
    }
    else{
        setText("Vyhrál jsi")
    }

}
  return (
    <div>
       <h1>Hádej číslo od 1 do 100</h1><br/>
        <input className='inpt' type="number" value={inputValue} onChange={handleInputChange} placeholder='Hádej číslo'></input>
        <h2>{text}</h2><br /><br />
        <button onClick={ahoj}>potvrdit</button>
    </div>
  )
}


export default Ahoj