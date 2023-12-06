export default function ArtistLink(props) {
    return (
        <a href={`/musics/artist/${props.slug}`}>
            <div className="artist-link">
                <img src={`/artists/${props.slug}.png`} alt="" />
                <h5>{props.name}</h5>
            </div>
        </a>
    )
}
