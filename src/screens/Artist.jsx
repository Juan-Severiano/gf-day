import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Artist() {

  return (
    <>
      <main id="artist">
        <img className="image" src="/bg/bg-baco.jpg" alt="" />
        <div className="content">
          <i className="logo"></i>
          <h2 className="artist-name">Bacu Exu do Blues</h2>
          <p className="description">Sendo bem sincero, não conhecia nada do Bacu, inclusive estou ouvindo uma música dele agoraKKKKKKKK. Mas passei a conhecer por causa de você, e fico bem feliz com isso, e como o Baco já disse: minha preta é rainha 💕</p>
          <AudioPlayer
            src="/musics/eu-amo-vc.mp3"
            className='audio-player'
          />
        </div>
      </main>
    </>
  )
}

export default Artist
