import styled from "styled-components";
import { BaseButton,GoogleSignInButton,Inverted } from "../../button/ButtonStyle/button";
export const CartDropdawnContainer = styled.div`
 position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    ${BaseButton},
    ${GoogleSignInButton},
    ${Inverted} {
      margin-top:auto;
    }
`

export const EmptyMEssage = styled.div`
font-size: 18px;
      margin: 50px auto;
`

export const CartItems = styled.div`
    height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      overflow-x: hidden;
`


  