export default function Header() {
    return (
        <header className="container">
            <div className="logo">
                <a href="/"><img src="/logo.png" alt="" /></a>
            </div>
            <nav className="nav navbar-nav">
                <ul className="nav-bar navbar">
                    <li className="nav-item"><a className="nav-link" href="/musics">Musics</a></li>
                    <li className="nav-item"><a className="nav-link" href="/photos">Photos</a></li>
                </ul>
            </nav>
        </header>
    )
}