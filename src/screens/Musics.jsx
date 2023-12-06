import ArtistLink from "../components/ArtistLink"
import Header from "../components/Header"
import ToTop from "../components/ToTop"


function Musics() {

  return (
    <>
      <Header />
      <main id="musics" className="container-fluid row row-cols-2">
        <aside className="col text-container">
          <p>eita caraca, agora vem um bocado de músicas e artistas mo daora, bo ver direitinho aqui né, vai que tem algo a mais, nunca se sabe</p>
          <ArtistLink />
          <ArtistLink />
          <ArtistLink />
          <ArtistLink />
          <ArtistLink />
          <ArtistLink />
          <ArtistLink />
          <ArtistLink />
        </aside>
        <div className="img"></div>

      </main>
      <ToTop />
    </>
  )
}

export default Musics
