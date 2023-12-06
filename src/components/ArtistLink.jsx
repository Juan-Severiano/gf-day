import { Link } from "react-router-dom";

export default function ArtistLink(props) {
    return (
        <Link className="link" to={`/musics/artist/${props.id}`}>
            <div className="artist-link">
                <img src={`/artists/${props.slug}.png`} alt="" />
                <h5>{props.name}</h5>
            </div>
        </Link>
    )
}
