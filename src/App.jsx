
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
      <header className=" Red-Back">
        <div className="just-item-center bej satisfy bold">
        <h1 className='bold font-30 padding-m'>Teknolojik Yemekler</h1>
        </div>
        
        <div className='center max-width font-12 barlow padding-s'>
          <button className="Red-Back bej no-border">Anasayfa</button>
          <button className="Red-Back bej no-border">Sipariş Oluştur</button>
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
      {/* ek malzemeler */}
      <div>
        <form>
          <h2 className='dark-grey bold font-18'>Ek Malzemler</h2>
          <p>en fazla 10 malzeme seçebilirsiniz. 5₺<span style={{color: "red"}}>*</span></p>
          { malzemeler.map((malzeme,index)=>{
              return <FormGroup className='flex' key={index}>
            <Input id={malzeme} name="malzeme" type="checkbox" onChange={handleChange} checked={formData.malzeme}/>{" "}
            <Label htmlFor={malzeme}>{malzeme}</Label>
          </FormGroup>
          })}
        </form>
      </div>
      {/*sipariş notu */}
      <footer> 
        <div className=' flex column between'>
      <FormGroup >
            <Label className='dark-grey bold font-18'>Sipariş Notu</Label>
            <Input className="font-12" name="not" type="textarea" placeholder='Siparişinize eklemek istediğiniz bir not var mı?'/>
        </FormGroup>
      </div>
      <hr></hr>  

          <div className='flex gap-s between'>
            <ButtonGroup className='max-height btn-min-width'>
              <Button color="warning">-</Button>
              <Button color="link">1</Button>
              <Button color="warning">+</Button>
          </ButtonGroup>

            <div className='flex column border min-width'>
              <div className='padding-m'>
                <h2 className='font-18 bold text-center'>Sipariş Toplamı</h2>
                <div className="flex around ">
              <p>Seçimler</p>
                  <p>25.00₺</p>
            </div>

                <div className='red flex around'>
              <p>Toplam</p>
                  <p>110.50₺</p>
                </div>
              </div>
              <Button color="warning">SİPARİŞ VER</Button>
            </div>
          </div>
      
      </footer>
     
      
      
      </main>
      </div>
  )
}

export default App
