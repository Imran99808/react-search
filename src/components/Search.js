import React, { useEffect, useState } from 'react'

export default function Search(props) {
    // const[value,setvalue]=useState("");
    const[card,setCard]=useState();
    
    function change(e){
       
      setCard(e.target.value)
      
     console.log("emon")
     
    // console.log(card)
    }
    useEffect(() => {
        props.onSearch(card)
      },[card]);

  return (
        <div style={{textAlign:"center",
                      marginTop:"2rem"}}>
      <input type="text" placeholder='search country'
      value={card}
      onChange={change}/>
     
    </div>
  )
}
