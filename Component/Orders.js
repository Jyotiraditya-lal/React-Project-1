import React, {useState,useEffect} from "react";


const Orders=(props)=>{
   
    
    
    const [Table1,setTable1]=useState([])
    const [Table2,setTable2]=useState([])
    const [Table3,setTable3]=useState([])
    
    let obj={
       
        dish: props.pass.name,
        table: props.pass.table,
        price: props.pass.price
    }

    let objStringfy=JSON.stringify(obj)
    localStorage.setItem(props.pass.id,objStringfy)

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

    const T1DeleteHandler=(key)=>{
        localStorage.removeItem(key)
        const index= Table1.findIndex(key)
        Table1.splice(index,1)
        setTable1([...Table1])   
    }

    const T2DeleteHandler=(key)=>{
        localStorage.removeItem(key)
        const index= Table2.findIndex(key)
        Table2.splice(index,1)
        setTable2([...Table2])   
    }

    const T3DeleteHandler=(key)=>{
        localStorage.removeItem(key)
        const index= Table3.findIndex(key)
        Table3.splice(index,1)
        setTable3([...Table3])   
    }
    
   

    return(
        <React.Fragment>
            <h2>Orders</h2>
            <div id="Table-1">Table 1</div>
            {Table1.map((i)=>(<li key={obj.id}>{i.name}-{i.price}-{i.table}<button onClick={T1DeleteHandler(event,key)}>Delete</button></li>)) }
            <div id="Table-2">Table 2</div>
            {Table2.map((i)=>(<li key={obj.id}>{i.name}-{i.price}-{i.table}<button onClick={T2DeleteHandler(event,key)}>Delete</button></li>)) }
            <div id="Table-3">Table 3</div>
            {Table3.map((i)=>(<li key={obj.id}>{i.name}-{i.price}-{i.table}<button onClick={T3DeleteHandler(event,key)}>Delete</button></li>)) }

        </React.Fragment>
    )
}

export default Orders
