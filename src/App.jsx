import { useState } from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="Assignment Project"/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
