import React, {useState} from "react";

function PlayListApp() {
  const [playList, setPlayList] = useState([
    'Cơn mưa ngang qua', 'Nắng ấm xa dần', 'Em của ngày hôm mơi', 'Chó cùng rứt dậu'
  ])
  const [music, setMusic] = useState()
  const [selectIndex, setSelectIndex] = useState(-1)
  const [newMusic, setNewMusic] = useState()
  const handleAddMusic = (e) => {
    e.preventDefault()
    // setPlayList(playList.concat(music))
    setPlayList([...playList, music]);
    setMusic('')
  }
  const handleCancelEdit = (music) => {
    setSelectIndex(-1)
    setNewMusic()
  }
  const handleRemoveMusic = (idx, music) => {
    let confirm = window.confirm(`Are you sure to delete ${music} from playlist?`)
    if (confirm) {
      setPlayList((prev) => {
            let newPlaylist = prev.filter((item, index) => index !== idx)
            return newPlaylist
          }
      )
    }
  }
  const handleUpdateMusic = (idx) => {
    if(newMusic){
      playList[idx] = newMusic
    }
    setNewMusic(null)
    setSelectIndex(-1)
    setPlayList(playList)
  }
  return (
      <div className='container mt-3'>
        <h1 className='display-6 text-warning fw-bolder'>
          Playlist Music
          <i className='fa-solid fa-music ms-2'/>
        </h1>
        <form onSubmit={handleAddMusic} className='w-75 mb-5'>
          <div className='form-group d-flex gap-2'>
            <input type='text' className='form-control w-75' value={music}
                   onInput={(e) => setMusic(e.target.value)} required
            />
            <button className='btn btn-sm btn-primary'>
              <i className='fa-solid fa-plus me-1'></i>
              Add to Playlist
            </button>
          </div>
        </form>
        <ul className='list-group'>
          {
            playList.map((song, index) =>
                (
                    <li key={index}
                        className='list-group-item d-flex justify-content-between align-items-center p-3'>{
                      selectIndex === index ? <input className='form-control w-75' value={newMusic || song}
                      onInput = {(e) => setNewMusic(e.target.value) }
                      /> : song
                    }
                      <div className='d-flex gap-4'>
                        {
                          selectIndex === index ? (
                              <>
                                <i role='button' className='fa-solid fa-save text-success'
                                   data-placement="bottom"
                                   title="Save"
                                   onClick={() => handleUpdateMusic(index)}
                                />
                                <i role='button' className='fa-solid fa-cancel text-danger'
                                   data-placement="bottom"
                                   title="Cancel"
                                   onClick={() => handleCancelEdit(music)}
                                />
                              </>
                          ) : (
                              <>
                                <i role='button' className='fa-solid fa-pen-to-square text-success'
                                   data-placement="bottom"
                                   title="Edit"
                                   onClick={() => setSelectIndex(index)}
                                />
                                <i role='button' className='fa-solid fa-trash text-danger'
                                   data-placement="bottom"
                                   title="Delete"
                                   onClick={() => handleRemoveMusic(index, music)}
                                />
                              </>
                      )
                      }
                    </div>
            </li>
            )
            )
          }
        </ul>
      </div>
  )
}

export default PlayListApp;