import React from 'react'
import style from "./country.module.css"

export default function country(props) {
     

   function removeCard(){
    props.onId(props.data.id)
   
   }


  return (
   <article className={style.country}>
    <h2>{props.data.name}</h2>
    <p>USERID:{props.data.id}</p>
    <p>City:{props.data.city}</p>
    <button
    onClick={removeCard}>
      Remove card
    </button>
   </article>
  )
}
