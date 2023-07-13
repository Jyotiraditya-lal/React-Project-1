import React,{useState} from "react";


const AddOrder=(props)=>{

    const[Id,setId]=useState('')
    const [Price,setPrice]=useState('')
    const [Name,setName]= useState('')
    const [Table,setTable] = useState('')
    

    const IdChangeHandler=(event)=>{
        setId(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setPrice(event.target.value)
    }

    const  nameChangeHandler=(event)=>{
        setName(event.target.value)
    }

    const TableChangeHandler=(event)=>{
        setTable(event.target.value)
       
    }

    const SubmitHandler=(event)=>{
        event.preventDefault()
        const orders={
            id: Id,
            name: Name,
            price: Price,
            table: Table
        }
        props.onAdd(orders)
        setName('')
        setPrice('')
        setId('')
        
    }

    return(
     <React.Fragment>
        <form onSubmit={SubmitHandler}>
            <div>
                <label htmlFor="id">Order Id:</label>
                <input id="id" type="number" value={Id} onChange={IdChangeHandler} />
            </div>
            <div>
                <label htmlFor="price">Choose Price(Rs):</label>
                <input id="price" type="number" value={Price} onChange={priceChangeHandler} />
            </div>
            <div>
                <label htmlFor="name">Choose Dish:</label>
                <input id="name" type="text" value={Name} onChange={nameChangeHandler} />
            </div>
            <div>
                <label htmlFor="Table">Choose Table:</label>
                <select name="Table" id="Table" onChange={TableChangeHandler}>
                    <option value="Table1">Table 1</option>
                    <option value="Table2">Table 2</option>
                    <option value="Table3" >Table 3</option>
                </select>
            </div>
            <button type="submit">Add to bill</button>
     </form>
    
     </React.Fragment>
        
    )
}

export default AddOrder
