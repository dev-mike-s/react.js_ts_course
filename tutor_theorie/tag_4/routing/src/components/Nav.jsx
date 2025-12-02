import { NavLink } from 'react-router'

function Nav() {

    const VERT = "Vertrieb"
    const PERS = "Personal"

    const ID = 99

    return (
        <nav>
            <NavLink to="/">Startseite</NavLink><br />
            <NavLink to="/about">Über uns</NavLink><br />
            <NavLink to="/team">Team</NavLink><br />
            <NavLink to="/team/Marketing">Team / Marketing</NavLink><br />
            <NavLink to={"/team/"+VERT}>Team / Vertrieb</NavLink><br />
            <NavLink to={`/team/${PERS}`}>Team / Personal</NavLink><br />
            <NavLink to={`/team/${PERS}/${ID}`}>Team / Personal / ID</NavLink>
        </nav>
    )
}

export default Nav