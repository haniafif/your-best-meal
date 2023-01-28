import Header_section from "../../sections/header-section";
import Main_section from "../../sections/main-section";
import { Container } from "./styles";

export default function Home(){
    return(
        <Container>
            <Header_section/>
            <Main_section/>
        </Container>
    )
}