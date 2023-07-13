import React,{useState} from 'react';
import AddOrder from './Components/AddOrder';
import Orders from './Components/Orders';


function App() {
  const Dummy_orders={}
  const [orders,setOrders]=useState(Dummy_orders)
  const AddProductHandler=(order)=>{
    setOrders(order)
  }

  return(
    <React.Fragment>
       <AddOrder onAdd={AddProductHandler}/>
       <Orders  pass={orders}/>
    </React.Fragment>
  )
  
}

export default App;
