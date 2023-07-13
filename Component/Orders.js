import React, {useState,useEffect} from "react";


const Orders=(props)=>{
   
    
    
    const [Table1,setTable1]=useState([])
    const [Table2,setTable2]=useState([])
    const [Table3,setTable3]=useState([])
    
    let obj={
        id: props.pass.id,
        dish: props.pass.name,
        table: props.pass.table,
        price: props.pass.price
    }

    let objStringfy=JSON.stringify(obj)
    localStorage.setItem(obj.id,objStringfy)

    useEffect(()=>{
    
        if( props.pass.table==="Table1"){
            
            setTable1([...Table1,props.pass])
            
            
        }

        else if( props.pass.table==="Table2"){
            
            setTable2([...Table2,props.pass])
            
            
        }
        else if( props.pass.table==="Table3"){
            setTable3([...Table3,props.pass])
            
        }
        

    },[props.pass.table])

    const DeleteHandler=()=>{
        
        if(obj.table==="Table1"){
            setTable1([])
            localStorage.removeItem(obj.id)
        }
        else if(obj.table==="Table2"){
          setTable2([])
          localStorage.removeItem(obj.id)
        }
        else if(obj.table==="Table3"){
          setTable3([])
          localStorage.removeItem(obj.id)
        }
       
        
    }
    
   

    return(
        <React.Fragment>
            <h2>Orders</h2>
            <div id="Table-1">Table 1</div>
            {Table1.map((i)=>(<li key={i.id}>{i.name}-{i.price}-{i.table}<button onClick={DeleteHandler}>Delete</button></li>)) }
            <div id="Table-2">Table 2</div>
            {Table2.map((i)=>(<li key={i.id}>{i.name}-{i.price}-{i.table}<button onClick={DeleteHandler}>Delete</button></li>)) }
            <div id="Table-3">Table 3</div>
            {Table3.map((i)=>(<li key={i.id}>{i.name}-{i.price}-{i.table}<button onClick={DeleteHandler}>Delete</button></li>)) }

        </React.Fragment>
    )
}

export default Orders
