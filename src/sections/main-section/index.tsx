import { Container } from "./style";
import {useState , useEffect} from "react"
import Restaurant_card from "../../components/restaurant_card";
import { Fade, Slide  } from "react-awesome-reveal";
import { instanceAPI } from "../../utility/axios";
import initialData from "../../utility/intialDataDTO";
import filteredData from "../../utility/filteredDataDTO";
import { cuisines } from "../../utility/cuisines";


export default function Main_section(this: any){
    // FILTERS
    const [inputTextData, setInputTextData] = useState<string>("")
    const [inputDistanceData, setInputDistancetData] = useState<number>()
    const [inputPriceData, setInputPriceData] = useState<number>()
    const [inputRatingData, setInputRatingData] = useState<number>()
    const [inputCuisineData, setInputCuisineData] = useState<number>()

    const [initialData, setInitialData] = useState<initialData>() // Data to load First 5 Restaurant on page load
    const [filteredData, setFilteredData] = useState<filteredData[]>() // Data with filter applied

    useEffect(()=>{
        instanceAPI.get("restaurants?size=5",{
       }).then(
        (response) =>setInitialData(response.data)
       )
    },[])

    useEffect(()=>{
       
            instanceAPI.post("restaurants/filters",{
                "nameToMatch": inputTextData,
                "distance_wanted": inputDistanceData,
                "price_wanted": inputPriceData,
                "customer_rating_wanted": inputRatingData,
                "cuisine_id_wanted": inputCuisineData
            }).then(
                (response) => setFilteredData(response.data.slice(0, 5))
            )
        
    },[inputTextData,inputDistanceData,inputPriceData,inputRatingData,inputCuisineData])

    const handleChange = (e:any) => {
        setInputCuisineData(Number(e.target.value));
      };
    
    return(
        <Container>
            <h1>
                <Fade cascade damping={.055}>Everything to make your day easy</Fade>
            </h1>
            <h3>What you need is here. Search and eat anywhere.</h3>

            <section>
                <input placeholder="Name of the restaurant" id="input_home" type="text" onChange={(event) => setInputTextData(event.target.value)}/>
            </section>

            <section id="filters">
                <div className="centerDiv">
                    <label htmlFor="input_distance">Distance</label>
                    <input placeholder="1-10" id="input_distance" type="number" min={1} max={10} step={1} onChange={(event) => setInputDistancetData(Number(event.target.value))}/>
                </div>
                <div className="centerDiv">
                    <label htmlFor="input_price">Price</label>
                    <input placeholder="10-50" id="input_price" type="number" min={10} max={50} step={10} onChange={(event) => setInputPriceData(Number(event.target.value))} />
                </div>
                <div className="centerDiv">
                    <label htmlFor="input_rating">Rating</label>
                    <input placeholder="1-5" id="input_rating" type="number" min={1} max={5} step={1} onChange={(event) => setInputRatingData(Number(event.target.value))}/>
                </div>
                <div className="centerDiv">
                    <label htmlFor="input_cuisine">Cuisine</label>
                    <select defaultValue={0} onChange={handleChange} name="cuisine" id="input_cuisine">
                        {cuisines.map(cuisine => {
                            return <option value={`${cuisines.indexOf(cuisine)}`}>{cuisine}</option>
                        })}
                    </select>
                </div>
            </section>
            <section id="cards_area">
                {
                    filteredData ? 
                    filteredData.map((data)=> {
                        return( <Slide triggerOnce  ><Restaurant_card name={`${data.name}`} rating={data.customer_rating} distance={data.distance} price={data.price} cuisine={data.cuisine_id} key={`${data.id}`}/></Slide > )
                     })
                     :
                    initialData?.content.map((data)=> {
                       return( <Slide  ><Restaurant_card name={`${data.name}`} rating={data.customer_rating} distance={data.distance} price={data.price} cuisine={data.cuisine_id} key={`${data.id}`}/></Slide > )
                    })
                }
            </section>
        </Container>
    )
}