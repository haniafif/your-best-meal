import {ButtonContainer} from "./styles"

interface buttonProps{
    text: string;
}

export default function Button({text}:buttonProps){
    return(
        <ButtonContainer>
            {text}
        </ButtonContainer>
    )
}