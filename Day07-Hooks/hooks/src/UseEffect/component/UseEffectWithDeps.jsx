import React, {useEffect, useState} from "react";
import {BeatLoader} from "react-spinners";
import data from "bootstrap/js/src/dom/data";
import JsxGenerator from "./selfWriteFunction/JsxGenerator";
import jsxGenerator from "./selfWriteFunction/JsxGenerator";

function UseEffectWithDeps() {
  const [showGoToTop, setGoToTop] = useState(false)
  const [state, setState] = useState({
    postList: [],
    isFetching: false,
    showGoToTop: false,
    page: 1,
    maxPage: 0
  })
  const {postList, isFetching, page, maxPage} = state
  useEffect(() => {
    setState({
      ...state,
      isFetching: true
    })
    fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
        .then(response => response.json())
        .then(result => {
          setState({
            ...state,
            postList: result.data,
            maxPage: Math.ceil(result.pagination._totalRows / result.pagination._limit),
            isFetching: false
          })
        })

  }, [page])
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setGoToTop(true)
      } else {
        setGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // You can use 'auto' for an instant scroll
    })
  }
  const handlePrevious = (e) => {
    setState({
      ...state,
      page: page - 1
    })
    handleAddActive(e)
  }
  const handleNext = (e) => {
    setState({
      ...state,
      page: page + 1
    })
    handleAddActive(e)
  }
  const handleAddActive = (e) => {
    e.target.classList.add("active")
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 1000);
  }
  return (
      <>
        <h1>Post List</h1>
        {isFetching ? <BeatLoader color='#1f1f1f'/> : (
            <>
              <div className='row'>
                {postList.map((post) => (
                        <div key={post.id} className='col-md-6 mb-4'>
                          <div className='card h-100'>
                            <img className='card-img-top'
                                 src={post.imageUrl}
                                 alt=''/>
                            <div className='card-body'>
                              <h5 className='card-title'>{post.title}</h5>
                              <p className='card-text'>{post.description}
                              </p>
                              <p className='card-footer fw-bold border-0 bg-white p'>{post.author}</p>
                            </div>
                          </div>
                        </div>
                    )
                )}
              </div>
              <ul className="pagination d-flex justify-content-center">
                {/*Trang lui*/}
                <li className="page-item">
                  <button
                      className={`page-link ${page === 1 ? 'disabled' : ''}`}
                      onClick={handlePrevious}>Previous
                  </button>
                </li>
                {/*Số Trang*/}
                {jsxGenerator(1,maxPage, (index)=> (
                    <li key={index} className="page-item">
                      <button
                          disabled={page === index ? true : false}
                          className={`page-link ${page === index ? 'active' : ''}`}
                          onClick={() => {setState({...state, page: index})}}>{index}
                      </button>
                    </li>)
                )}
                {/*Trang tới*/}
                <li className="page-item">
                  <button
                      className={`page-link ${page === maxPage ? 'disabled' : ''}`}
                      onClick={handleNext}>Next
                  </button>
                </li>
              </ul>
            </>
        )}
        {showGoToTop && (
            <button className='position-fixed btn btn-dark btn-lg fw-bold'
                    style={{right: '30px', bottom: '40px'}}
                    onClick={() => {
                      handleScrollToTop()
                    }}>Go to top
            </button>
        )}
      </>
  )
}

export default UseEffectWithDeps