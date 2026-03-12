import { Link } from "react-router-dom"
import "./mainNav.css"

function Nav () {
    return(
        <nav className="mainNav">
            <ul>
                <li> <Link to="/"> Inicio </Link></li>
                <li> <Link to="/fastandfurious"> Fast and Furious </Link> </li>
                <li> <Link to="/drift_night"> Drift Night </Link> </li>
                <li> <Link to="/sport"> Sport </Link> </li>
                <li> <Link to="/popular/"> Popular </Link></li>
                <li> <Link to="/geral/"> Geral </Link></li>
                <li> <Link to="/cadastrar/"> Cadastrar </Link></li>
                <li> <Link to="/deletar/"> Deletar </Link></li>
                <li> <Link to="/atualizar/"> Atualizar </Link></li>
            </ul>
        </nav>
    )
}

export default Nav