import Header from "../components/Header"
import ToTop from "../components/ToTop"
import '../styles/components/not-found.scss'


function NotFound() {

  return (
    <>
      <Header />
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1>404 Not Found</h1>
        <div className="container-md" id='not-found'>

        </div>
      </div>
      <ToTop />
    </>
  )
}

export default NotFound
