
import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap'
import './App.css'
import "./index.css"
import { useState } from 'react';
import React from 'react';


const malzemeler = ["Pepperoni","Sosis", "Kanada Jambonu","Tavuk Izgara","Soğan","Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"];
const boyutlar=["küçük", "orta", "büyük"];
const hamurSeç = ["ince","orta","kalın"]


const initial ={
  boyut:"-1",
  hamurlar:"-1",
  malzeme: [],
  not: ""
}
function App() {

  const [formData, setFormData] = useState({
    initial
  })




  const handleChange = (event) =>{
    const {name, id, type, value} = event.target
    console.log("type, name, value, checked:", type, name, value, checked)

    if(type===checkbox) {
      setFormData({...formData, [name]:cheked})
    } else{
      setFormData({...formData, [name]:value})
    }
  }



  return (

    <div className='light-grey '>
      {/* kırmızı alan............................................ */}
      <header className=" kirmiziBack">
        <div className="just-item-center bej satisfy bold">
        <h1 className='bold font-30 padding-m'>Teknolojik Yemekler</h1>
        </div>
        
        <div className='center max-width font-12 barlow padding-s'>
          <button className="kirmiziBack bej no-border">Anasayfa</button>
          <button className="kirmiziBack bej no-border">Sipariş Oluştur</button>
        </div>
      </header>

      {/* Position Pizza-Paragraf bölümü........................................... */}


      <main className='center max-width barlow padding-l'>  
        <div >
          <h2 className='font-22 bold '>Position Absolute Acı Pizza</h2>
          <div className="flex align-center between" >
            <p className='bold font-25 dark-grey'>85.50₺</p>
            <p className=' font-12'>4.9</p>
            <p className=' font-12'>(200)</p>
        </div>
          <p className=''>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir</p>
      </div>



      {/* Boyut-Hamur bölümü........................................... */}

        <div className="flex between">
        <div>
          <Form>
              <Label className="dark-grey bold font-18" htmlFor="boyut">Boyut Seç<span style={{color: "red"}}> *</span></Label>

            {boyutlar.map((boyut,index)=>{
              return <FormGroup>
                <Input className="font-12" key={index} id={boyut} name="boyut" type="radio" onChange={handleChange} value={formData.boyut}/>{" "}
              <Label htmlFor={boyut}>{boyut}</Label>
            </FormGroup>
            })}
  
          </Form>
        </div>

          <div className='flex column'>
            <Label className="bold font-18 dark-grey" htmlFor="hamurlar">Hamur Seç<span style={{color: "red"}}> *</span></Label>
          <select onChange={handleChange} value={formData.hamur} >
            {hamurSeç.map((hamur)=>{
              return <option value={hamur}>{hamur}</option>
            })}
          </select>
        </div>
      </div>
      
      
      </main>
      </div>
  )
}

export default App
