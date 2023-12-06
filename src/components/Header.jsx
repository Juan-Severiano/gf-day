export default function Header(props) {
    if (props.false == true) {
        return (
            <header className="container" id="header">
                <div className="logo">
                    <a href="/"><img src="/logo.png" alt="" /></a>
                </div>
                <nav className="nav navbar-nav">
                    <ul className="nav-bar navbar">
                        <li className="nav-item"><a className="nav-link disabled" href="/musics">Musics</a></li>
                        <li className="nav-item"><a className="nav-link disabled" href="/photos">Photos</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
    return (
        <header className="container" id="header">
            <div className="logo">
                <a href="/"><img src="/logo.png" alt="" /></a>
            </div>
            <nav className="nav navbar-nav">
                <ul className="nav-bar navbar">
                    <li className="nav-item"><a className="nav-link " href="/musics">Musics</a></li>
                    <li className="nav-item"><a className="nav-link " href="/photos">Photos</a></li>
                </ul>
            </nav>
        </header>
    )
}