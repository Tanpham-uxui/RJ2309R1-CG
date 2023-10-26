import React, {useEffect, useState} from "react";

function UseEffect(){
  const [content, setContent] = useState('')
  useEffect(()=>{
    document.getElementById('h_1').innerText = content
  })
  return(
      <>
        <input type='text' className='form-control mb-2'
               onInput={(e)=>setContent(e.target.value)}/>
        <h1 id="h_1"></h1>
      </>
  )
}
export default UseEffect