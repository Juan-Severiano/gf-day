import ArtistLink from "../components/ArtistLink"
import Header from "../components/Header"
import ToTop from "../components/ToTop"
import listArtists from "../utils/listArtists"


function Musics() {

  return (
    <>
      <Header />
      <main id="musics" className="container">
        <aside className="text-container">
          <p>eita caraca, agora vem um bocado de músicas e artistas mo daora, bo ver direitinho aqui né, vai que tem algo a mais, nunca se sabe</p>
          { listArtists.map((artist) => {
            return <ArtistLink key={artist.id} {...artist} />
          }) }
        </aside>
        <div className="img"></div>

      </main>
      <ToTop />
    </>
  )
}

export default Musics
