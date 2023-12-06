import { Link } from "react-router-dom"

export default function Header(props) {
    if (props.false == true) {
        return (
            <header className="container" id="header">
                <div className="logo">
                    <Link to="/"><img src="/logo.png" alt="" /></Link>
                </div>
                <nav className="nav navbar-nav">
                    <ul className="nav-bar navbar">
                        <li className="nav-item"><Link className="nav-link disabled" to="/musics">Musics</Link></li>
                        <li className="nav-item"><Link className="nav-link disabled" to="/photos">Photos</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
    return (
        <header className="container" id="header">
            <div className="logo">
                <Link to="/"><img src="/logo.png" alt="" /></Link>
            </div>
            <nav className="nav navbar-nav">
                <ul className="nav-bar navbar">
                    <li className="nav-item"><Link className="nav-link " to="/musics">Musics</Link></li>
                    <li className="nav-item"><Link className="nav-link " to="/photos">Photos</Link></li>
                </ul>
            </nav>
        </header>
    )
}