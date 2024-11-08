import OrderForm from "./components/OrderForm"
import HomeT1 from "./components/HomeT1"
import SuccessT1 from "./components/SuccessT1"
import Home from "./components/Home"
import Success from "./components/Success"
export default function App(){

  return(
    <>
    <div className="T1">
    <h2>T1/Pizza + 🍕</h2>
    <OrderForm></OrderForm>
     <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <HomeT1></HomeT1>
     <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <SuccessT1></SuccessT1>
    </div>

    <div>
      <h1>T2/Pizza + 🍕</h1>
      <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <Home></Home>
     <br></br>
     <br></br>
     <hr></hr>
     <br></br>
     <br></br>
     <Success></Success>
      


    </div>
    </>
   
  )
}