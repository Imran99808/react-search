import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';
const url= "https://jsonplaceholder.typicode.com/users";


function reusealeFunck(id,value,setValue){
  let arr=[];
     for(let i=0;i<value.length;i++){
       if(value[i].id===id){
        continue

       }
        arr.push(value[i]);


     }
     
      setValue(arr);

 }


function App() {
  
  const[data,setData]=useState(null);
  const [stor,setStor]=useState(data)
  const[isload,setload]=useState(true);
  const[error,seterror]=useState(null);

    
    function receiveId(id){
      reusealeFunck(id,data,setData);
      reusealeFunck(id,stor,setStor);
   }


  

   function search(value){
    
    if(stor!=null){
     setData(stor);
      let arr=[];
      let searchValue=value.toLowerCase();
      console.log(searchValue)
      
      for(let i=0;i<stor.length;i++){
        let newName=stor[i].name.toLowerCase();
        let o=0;
          for(let l=0;l<searchValue.length;l++){
               if(newName.charAt(l)===searchValue.charAt(l)){
               o++;
              console.log(o)
              if(searchValue.length==o){
                console.log()
                 arr.push(stor[i]);
                //  break
              }
               }
          }
 }         
         if(searchValue!=""){
          setData(arr);
         }
    }
   
 } 
  
  
      


async function fetchData(url){
setload(true);
seterror(null);
// setData(null)
try{
  const response=await fetch(url);
  const json=await response.json();
  setData(json);
  setStor(json);
  setload(false);
 
  
}catch(e){
  seterror(e);
  setload(false);
  console.log(e.message);

}
}
  useEffect(()=>{
      fetchData(url);
      
  },[]);




  //  console.log(data!=null)
 

return (
  <>
  <h1>Country APP</h1>
  <Search onSearch={search}/>
   {isload && <h1>Loading....</h1>}
   {error &&<h1>{error.message}</h1>}
   {data&&<Countries data={data} onId={receiveId}/>}
   
  </>
)
}

export default App;
