import { Container } from "./style";
import {useState , useEffect} from "react"
import Button from "../../components/button";
import Restaurant_card from "../../components/restaurant_card";

export default function Main_section(){
    const [inputData, setInputData] = useState<string>("")

    const dataExample = [
        "Burguer King",
        "Mc Donalds",
        "Subway",
        "Outback",
        "Bobs"
    ]

    useEffect(()=>{
        // CALL API
    },[inputData])
    
    return(
        <Container>
            <h1>Everything to make your day easy</h1>
            <h3>What you need is here. Search and eat anywhere.</h3>
            <section>
                <input placeholder="Name of the restaurant" id="input_home" type="text" onChange={(event) => setInputData(event.target.value)}/>
                <Button text="Search"/>
            </section>
            <section id="cards_area">
                {
                    dataExample.map((name)=> {
                       return( <Restaurant_card name={`${name}`}/> )
                    })
                }
            </section>
        </Container>
    )
}