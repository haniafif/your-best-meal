import { Container } from "./style";
import {useState , useEffect} from "react"
import Button from "../../components/button";
import Restaurant_card from "../../components/restaurant_card";
import { Fade, Slide  } from "react-awesome-reveal";
import { instanceAPI } from "../../utility/axios";

interface initialData{
    content: [
        {
            id: Number,
            name: String,
            customer_rating: Number,
            distance: Number,
            price: Number,
            cuisine_id: Number
        }
    ]
}

export default function Main_section(){
    const [inputData, setInputData] = useState<string>("")
    const [initialData, setInitialData] = useState<initialData>()

    const dataExample = [
        "Burguer King",
        "Mc Donalds",
        "Subway",
        "Outback",
        "Bobs"
    ]

    useEffect(()=>{
        instanceAPI.get("http://localhost:8080/restaurants?size=5",{
       }).then(
        (response) =>setInitialData(response.data)
       )
    },[inputData])
    
    return(
        <Container>
            <h1>
                <Fade cascade damping={.055}>Everything to make your day easy</Fade>
            </h1>
            <h3>What you need is here. Search and eat anywhere.</h3>
            <section>
                <input placeholder="Name of the restaurant" id="input_home" type="text" onChange={(event) => setInputData(event.target.value)}/>
                <Button text="Search"/>
            </section>
            {/* <h2>Some restaurants for you.</h2> */}
            <section id="cards_area">
                
                {
                    initialData?.content.map((data)=> {
                       return( <Slide  ><Restaurant_card name={`${data.name}`} rating={data.customer_rating} distance={data.distance} price={data.price} cuisine={`${data.cuisine_id}`} key={`${data.id}`}/></Slide > )
                    })
                }
            </section>
        </Container>
    )
}