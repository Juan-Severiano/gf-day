import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useParams } from 'react-router-dom';
import listArtists from '../utils/listArtists';
import { useState } from 'react';

// const artist = {
//   id: 0,
//   slug: 'baco',
//   name: 'Baco Exu do Blues',
//   description: 'Sendo bem sincero, não conhecia nada do Bacu, inclusive estou ouvindo uma música dele agoraKKKKKKKK. Mas passei a conhecer por causa de você, e fico bem feliz com isso, e como o Baco já disse: minha preta é rainha 💕'
// }

function Artist() {
  const { id } = useParams()
  const artist = listArtists[id]
  return (
    <>
      <main id="artist">
        <img className="image" src={`/bg/bg-${artist.slug}.jpg`} alt="" />
        <div className="content">
          <i className="logo"></i>
          <h2 className="artist-name">{artist.name}</h2>
          <p className="description" id={artist.slug}>{artist.description}</p>
          <AudioPlayer
            src={`/musics/${artist.slug}.mp3`}
            className='audio-player'
          />
        </div>
      </main>
    </>
  )
}

export default Artist
