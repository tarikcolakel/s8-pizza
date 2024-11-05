import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { NavLink, Label, Form, Input, FormGroup,Button } from 'reactstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
       <header>
        <div className='header-container'>
          <div className='header'><img className="logo" src="../Assets/Iteration-1-assets/logo.svg" alt="" />
          <p>Anasayfa-Seçenekler - <strong>Sipariş Oluştur</strong> </p></div>
          
        </div>
       </header>
       <div className='p'>
        <h2>Position Absolute Acı Pizza</h2>
        <div className='fiyat'>
          <p>85.50TL</p>
          
            <p>4.9 (200)</p>
            
          
        </div>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        
       </div>
       
       
       </div>
      
      
  )
}

export default App
