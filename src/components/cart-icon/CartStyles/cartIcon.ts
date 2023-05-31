import styled from "styled-components";
import {ReactComponent as ShoppinIcon} from '../../../assets/004 shopping-bag.svg'

export const CartIConCont = styled.div`
width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const ShoppingIcon = styled(ShoppinIcon)`
 width: 24px;
      height: 24px;
`

export const ItemCount = styled.div `
 position: absolute;
      font-size: 10px;
      font-weight: bold;
      bottom: 12px;
`


  