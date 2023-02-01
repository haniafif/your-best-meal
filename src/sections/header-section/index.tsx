import Button from "../../components/button";
import { Container_header } from "./style";

export default function Header_section(){
    return(
        <Container_header>
            <img loading="lazy" id="logo" src="/logo.png" alt="" />
            <nav>
                <a href="#">Home</a>
                <a href="https://github.com/haniafif/your-best-meal" target={"_blank"}>Github</a>
            </nav>
            <Button text="I am a restaurant"/>
        </Container_header>
    )
}