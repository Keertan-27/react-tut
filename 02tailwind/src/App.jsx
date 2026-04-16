import { useState } from 'react'
import Card from './components/Card';
import MordernDesignCard from './components/MordernDesignCard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
  <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'
    >React Tailwind</h1>
    <Card username = 'Keertan'/>
    <Card username='Sharma'/>
    <MordernDesignCard />
  </>
)}

export default App
