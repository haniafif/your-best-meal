import Button from "../../components/button";
import { Container_header } from "./style";

export default function Header_section(){
    return(
        <Container_header>
            <img id="logo" src="/logo.png" alt="" />
            <nav>
                <a>Home</a>
                <a>Contact</a>
                <a>Who we are?</a>
            </nav>
            <Button text="I am a restaurant"/>
        </Container_header>
    )
}