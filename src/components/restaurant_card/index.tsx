import { Container } from "./styles";
import {FiStar,FiDollarSign,FiMapPin} from "react-icons/fi"
import { useState } from "react";
import Button from "../button";
import { cuisines } from "../../utility/cuisines";


interface restaurantProps{
    name: string;
    rating?: Number;
    distance?: Number;
    price?: Number;
    cuisine?: number;
}

export default function Restaurant_card({name,rating,distance,price,cuisine}:restaurantProps){

    const [isShown,setIsShown]= useState(false)

    return(
        <Container onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
            <header>
                <div className="flexrow">
                    <h4>{`${rating}`}</h4>
                    <FiStar color="gold" fill="gold"/>
                </div>
                {cuisine ? cuisines[cuisine] : ""}
            </header>
            
            <main>
                <h2>{name}</h2>
            </main>

            <footer>
                <div className="flexrow">
                    <FiMapPin/>
                    <h4 className="align_space">{`${distance}`} Miles</h4>
                </div>

                <div className="flexrow">
                    <FiDollarSign/>
                    <h4 className="align_space">{`${price}`}</h4>
                </div>
            </footer>

            {
                isShown &&

                <div id="descriptionContainer">
                    <h4 id="description">Description:</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illo quam repellendus commodi quod maiores fugit culpa cumque sint nihil atque odio quae enim fuga optio officiis, qui reiciendis a?</p>
                    <div id="divButtonCard"><Button text="See more"/></div>
                </div>
            }
        </Container>
    )
}