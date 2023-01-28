import Button from "../../components/button";
import { Container_header } from "./style";

export default function Header_section(){
    return(
        <Container_header>
            <img id="logo" src="/logo.png" alt="" />
            <nav>
                <a>Inicio</a>
                <a>Contato</a>
                <a>Quem somos?</a>
            </nav>
            <Button text="Meus pedidos"/>
        </Container_header>
    )
}