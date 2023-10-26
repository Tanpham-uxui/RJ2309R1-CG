import React, {useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";

function UseEffectDOMEvent() {
  const [content, setContent] = useState('')
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [showGoToTop, setGoToTop] = useState(false)
  useEffect(() => {
    setIsFetching(true)
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
          setData(json)
          setIsFetching(false)
        })
  }, [])
  useEffect(()=>{
        const handleScroll = ()=>{
          if (window.scrollY >= 150){
            setGoToTop(true)
          } else {
            setGoToTop(false)
          }
        }
        window.addEventListener('scroll', handleScroll)
    return () => {
          window.removeEventListener('scroll', handleScroll)
    }
  },[])
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can use 'auto' for an instant scroll
    })
  }
  return (
      <>
        <input type='text' className='form-control mb-2'
               onInput={(e) => setContent(e.target.value)}/>
        <h1>Todo List</h1>
        {isFetching ? <BeatLoader color='#1f1f1f'/> : (
            <ul className='list-group'>
              {data.map((todo) => (
                      <li key={todo.id} className='list-group-item p-2 d-flex justify-content-between gap-2'>{todo.title}
                        <input type='checkbox'
                               checked={todo.completed}
                               className='form-check-input'
                        />
                      </li>
                  )
              )}
            </ul>
        )}
        {showGoToTop && (<button className='position-fixed btn btn-dark btn-lg fw-bold' style={{
          right:'30px',
          bottom:'40px'
        }}
        onClick={()=>{handleScrollToTop()}}
        >Go to top </button>)}

      </>
  )
}
export default UseEffectDOMEvent