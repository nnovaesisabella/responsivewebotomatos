import styled from 'styled-components';
import{NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa'


export const Nav = styled.nav`
   background:transparent;
   height:80px;
   display: flex;
   justify-content:center;
   font-weight:700;
   padding-top:10px;
   margin-left:auto;
   
`;

export const NavLink = styled(Link)`
color:#ffff;
font-size:2rem;
display:flex;
align-items:center;
text-decoration:none;
cursor: pointer;
width:90%;
margin-left:auto;

@media screen and (max-width:400px){
   position:absolute;
   top:40px;
   left:25px;
   font-size:1rem;

}`;

export const NavIcon = styled.div`
  display:block;
  position:absolute;
  top:0;
  right:0;
  cursor:pointer;
  color:#ffff;
  padding-top:10px;

p {
    transform: translate(-175%, 100%);
    font:bold;
}`
export const Bars = styled(FaPizzaSlice)`
 font-size:2rem;
 transform:translate(-50%, -15%)


`

