import { Container } from "./style";
import {useState , useEffect} from "react"
import Button from "../../components/button";

export default function Main_section(){
    const [inputData, setInputData] = useState<string>("")

    useEffect(()=>{
        // DO SOMETHING
    },[inputData])
    
    return(
        <Container>
            <h1>Tudo pra facilitar seu dia a dia</h1>
            <h3>O que você precisa está aqui. Peça e receba onde estiver.</h3>
            <section>
                <input placeholder="Name of the restaurant" id="input_home" type="text" onChange={(event) => setInputData(event.target.value)}/>
                <Button text="Search"/>
            </section>
        </Container>
    )
}