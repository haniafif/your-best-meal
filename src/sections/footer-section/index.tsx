import { Container } from "./styles";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

export default function Footer_section(){
    return(
            <Container>
                <section className="logoeicons">
                    <h2>byFOOD</h2>
                    <div className="socialicons">
                        <FiFacebook aria-label="Facebook logo"/>
                        <FiTwitter aria-label="Twitter logo"/>
                        <FiInstagram aria-label="Instagram logo"/>
                        <FiYoutube aria-label="Youtube logo"/>
                        <FiGithub aria-label="Github logo"/>
                    </div>
                </section>

                <section className="text">
                    <p>
                        We are a registred brand of byFOOD INC S/A. 
                        All rights reserved. All promotional prices can be altered withour prior warning. 
                        byFOOD is not responsible for descriptive erros. 
                        All pictures are merely fictional an can vary depending on supplier. 
                        This site operate with 100% SSL criptografy. 
                    </p>
                </section>
            </Container>
    )
}