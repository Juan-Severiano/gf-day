import Header from "../components/Header"
import ToTop from "../components/ToTop"


function Photos() {

  return (
    <>
      <Header />
      <main className="container photos">
        <ul className="list-photos">
          <li className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="/my-princess/photos/1.jpg" alt="" />
          </li>
        </ul>

        <div className="modal fade lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">fotinha</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src="/my-princess/photos/1.jpg" alt="" />
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
