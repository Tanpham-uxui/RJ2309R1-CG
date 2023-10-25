import React, {useEffect, useState} from "react";

function UseEffect(){
  const [content, setContent] = useState()
  useEffect(()=>{
    console.log('test')
  })
  return(
      <>
        <input type='text' className='form-control mb-2'
               onInput={(e)=>setContent(e.target.value)}/>
        <h1>{content}</h1>
      </>
  )
}
export default UseEffect