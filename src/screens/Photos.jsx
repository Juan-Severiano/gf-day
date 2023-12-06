import { useState } from "react"
import Header from "../components/Header"
import ToTop from "../components/ToTop"
import listPhotos from "../utils/listPhotos"


function Photos() {
  const [photoModal, setPhotoModal] = useState(1)
  const [name, setName] = useState('')

  return (
    <>
      <Header />
      <main className="container photos">
        <ul className="list-photos">
          {listPhotos.map(item => {
            return (
              <li className="btn" data-bs-toggle="modal" key={item.id} data-bs-target="#exampleModal" onClick={() => {
                setPhotoModal(item.id)
                setName(item.name)
              }}>
                <img src={`/my-princess/photos/${item.id}.jpg`} alt="" />
              </li>
            )
          })}
        </ul>

        <div className="modal fade lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">{name}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={`/my-princess/photos/${photoModal}.jpg`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToTop />
    </>
  )
}

export default Photos
