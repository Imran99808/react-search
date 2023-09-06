import React from 'react'

import Country from './Country';
import style from './countries.module.css';

export default function Countries(props) {
 
  
  function pass(){
    let arr=[];
  for(let i=0;i<props.data.length;i++){
   arr.push(<Country id={props.data.id} data={props.data[i]} onId={props.onId} />)
  //  console.log(arr)
  }
  return arr;
  }
  return (
    <section
         className={style.countries}>
      { pass()}
      </section>
    
   
    
  ) 
}
