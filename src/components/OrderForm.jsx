import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

const malzemeler = ["Pepperoni","Sosis", "Kanada Jambonu","Tavuk Izgara","Soğan","Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"];
const boyutlar=["küçük", "orta", "büyük"];
const hamurSeç = ["ince","orta","kalın"];

const initial = {
  boyut:"-1",
  hamurlar:"-1",
  malzeme: [],
  not: ""
}

function OrderForm() {
  const [formData, setFormData] = useState(initial);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [malzemeList, setMalzemeList] = useState([]);
  const [adet, setAdet] = useState(1);
  const [secimler, setSecimler] = useState(0);
  const [toplam, setToplam] = useState(85.50); // Başlangıç fiyatı

  // Adet artırma
  const arttir = () => {
    setAdet(adet + 1);
  }

  // Adet azaltma
  const azalt = () => {
    if (adet > 1) {
      setAdet(adet - 1);
    }
  }

  // Malzeme seçimlerini işleme
  const handleChange = (event) => {
    const { name, checked, type, value } = event.target;

    if (type === "checkbox") {
      if (checked) {
        setMalzemeList([...malzemeList, value]); // Yeni malzeme ekle
      } else {
        setMalzemeList(malzemeList.filter(malz => malz !== value)); // Malzeme çıkar
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Validasyon kontrolü
    if (name === "boyut" && value === "") {
      setErrors({ ...errors, [name]: "Bir boyut seçiniz" });
    } else if (name === "boyut") {
      setErrors({ ...errors, [name]: "" });
    }

    if (name === "hamurlar" && value === "") {
      setErrors({ ...errors, [name]: "Bir hamur kalınlığı seçiniz" });
    } else if (name === "hamurlar") {
      setErrors({ ...errors, [name]: "" });
    }

    if (name === "malzeme") {
      if (malzemeList.length > 10) {
        setErrors({ ...errors, [name]: "En fazla 10 malzeme seçebilirsiniz" });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }

    if (name === "not" && value.length < 3) {
      setErrors({ ...errors, [name]: "Yorum 3 karakterden fazla olmalı" });
    } else if (name === "not") {
      setErrors({ ...errors, [name]: "" });
    }
  }

  // Seçilen malzemelerin fiyatını ekleyip, toplam tutarı hesaplama
  const secim = () => {
    setSecimler(malzemeList.length * 5); // Her malzeme için 5₺ ekle
  }

  // Toplam tutarı hesaplama
  const toplamTutar = () => {
    setToplam((85.50 + secimler) * adet); // 85.50₺ pizza fiyatı ve seçilen malzemeler
  }

  // Form geçerliliği
  useEffect(() => {
    if (
      formData.boyut !== "-1" &&
      formData.hamurlar !== "-1" &&
      malzemeList.length <= 10 // Malzeme sayısını kontrol et (en fazla 10 malzeme)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    toplamTutar();
    secim();
  }, [formData, malzemeList, adet, secimler]);  // Değişikliklere göre tekrar kontrol et

  // Sipariş formunun gönderilmesi
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        setFormData(initial);  // Formu sıfırlama
        console.log(response.data);  // Sipariş bilgilerini yazdır
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='light-grey'>
      {/* Kırmızı alan */}
      <header className="kirmiziBack">
        <div className="just-item-center bej satisfy bold">
          <h1 className='bold font-30 padding-m'>Teknolojik Yemekler</h1>
        </div>

        <div className='center max-width font-12 barlow padding-s'>
          <button className="kirmiziBack bej no-border">Anasayfa</button>
          <button className="kirmiziBack bej no-border">Sipariş Oluştur</button>
        </div>
      </header>

      {/* Pizza açıklamaları */}
      <main className='center max-width barlow padding-l'>
        <div>
          <h2 className='font-22 bold'>Position Absolute Acı Pizza</h2>
          <div className="flex align-center between">
            <p className='bold font-25 dark-grey'>85.50₺</p>
            <p className='font-12'>4.9</p>
            <p className='font-12'>(200)</p>
          </div>
          <p className=''>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
          </p>
        </div>

        {/* Boyut-Hamur seçimi */}
        <div className="flex between">
          <div>
            <Form>
              <Label className="dark-grey bold font-18" htmlFor="boyut">Boyut Seç<span style={{ color: "red" }}> *</span></Label>
              {boyutlar.map((boyut, index) => (
                <FormGroup key={index}>
                  <Input className="font-12" id={boyut} name="boyut" type="radio" onChange={handleChange} value={boyut} />
                  {errors.boyut && <div className='error'>{errors.boyut}</div>}
                  <Label htmlFor={boyut}>{boyut}</Label>
                </FormGroup>
              ))}
            </Form>
          </div>

          <div className='flex column'>
            <Label className="bold font-18 dark-grey" htmlFor="hamurlar">Hamur Seç<span style={{ color: "red" }}> *</span></Label>
            <select onChange={handleChange} value={formData.hamurlar}>
              {hamurSeç.map((hamur, index) => (
                <option key={index} value={hamur}>{hamur}</option>
              ))}
            </select>
            {errors.hamurlar && <div className='error'>{errors.hamurlar}</div>}
          </div>
        </div>

        {/* Ek Malzemeler */}
        <div>
          <Form>
            <h2 className='dark-grey bold font-18'>Ek Malzemeler</h2>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺ <span style={{ color: "red" }}>*</span></p>
            {malzemeler.map((malz, index) => (
              <FormGroup className='flex' key={index}>
                <Input id={malz} name="malzeme" type="checkbox" onChange={handleChange} value={malz} />
                {errors.malzeme && <div className='error'>{errors.malzeme}</div>}
                <Label htmlFor={malz}>{malz}</Label>
              </FormGroup>
            ))}
          </Form>
        </div>

        {/* Sipariş Notu */}
        <footer>
          <div>
            <FormGroup>
              <Label className='dark-grey bold font-18'>Sipariş Notu</Label>
              <Input className="font-12" name="not" type="textarea" placeholder='Siparişinize eklemek istediğiniz bir not var mı?' onChange={handleChange} value={formData.not} />
              {errors.not && <div className='error'>{errors.not}</div>}
            </FormGroup>
          </div>

          <hr></hr>

          {/* Sipariş Özeti */}
          <div className='flex gap-s between'>
            <ButtonGroup className='max-height btn-min-width'>
              <Button onClick={azalt} className="arti" color="warning">-</Button>
              <Button className="adet" color="link">{adet}</Button>
              <Button onClick={arttir} className="eksi" color="warning">+</Button>
            </ButtonGroup>

            <div className='flex column border min-width'>
              <div className='padding-m'>
                <h2 className='font-18 bold text-center'>Sipariş Toplamı</h2>
                <div className="flex around">
                  <p>Seçimler</p>
                  <p>{secimler}₺</p>
                </div>

                <div className='kirmizi flex around'>
                  <p>Toplam</p>
                  <p>{toplam}₺</p>
                </div>
              </div>
              <Button disabled={!isValid} onClick={handleSubmit} type="submit" className="siparişVer" color="warning">SİPARİŞ VER</Button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default OrderForm;
