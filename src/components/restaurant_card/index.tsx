import { Container } from "./styles";
import {FiStar,FiDollarSign,FiMapPin} from "react-icons/fi"
import {IoMdRestaurant} from "react-icons/Io"


interface restaurantProps{
    name: string;
    rating?: Number;
    distance?: Number;
    price?: Number;
    cuisine?: String;
}


export default function Restaurant_card({name,rating,distance,price,cuisine}:restaurantProps){
    return(
        <Container>
            <header>
                <div className="flexrow">
                    <h4>4</h4>
                    <FiStar color="gold" fill="gold"/>
                </div>
                Chinese
            </header>
            
            <main>
                <IoMdRestaurant id="foodIco"/>
                <h2>{name}</h2>
            </main>

            <footer>
                <div className="flexrow">
                    <FiMapPin/>
                    <h4 className="align_space">10 KM</h4>
                </div>

                <div className="flexrow">
                    <FiDollarSign/>
                    <h4 className="align_space">10</h4>
                </div>
                
            </footer>
        </Container>
    )
}