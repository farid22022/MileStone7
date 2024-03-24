import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './Component/Watch/Watch'

function App() {

  const [watches, setWatches] = useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])

  // const watches = [
  //   {id :1 , name :'a',price :200},
  //   {id :2 , name :'b',price :200},
  //   {id :3, name :'c',price :200},
  // ]

  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map(watch =><Watch key={watches.id} watch={watch}></Watch>)
      }

    </>
  )
}

export default App
