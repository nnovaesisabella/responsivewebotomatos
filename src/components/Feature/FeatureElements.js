import styled from 'styled-components';
import FeacturePic from '../../images/pizzafeature.jpg';

export const FeatureContainer = styled.div`
 background:linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0,0,0,0.3)),
 url(${FeacturePic});
 height:100vh;
 max-height:500px;
 background-position:center;
 background-size:cover; 
 background-repeat:no-repeat;
 display: flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 color:#ffff;
 text-align:center;
 padding:0 1rem;
  
 h1{
font-size: clamp(3rem, 5vw, 5rem);
 }

 p{ 
     font-size: clamp(1rem, 3vw, 2 rem );
     margin-top: 1rem;
     padding-bottom: 2rem;
     
 }
 
`;

export const FeatureButton= styled.button`

    font-size:1.4rem;
    padding: 0.6rem 3rem;
    border:none;
    background:#cb4d0e;
    color:#ffff;
    transition:0.2s ease-out;
    border-radius:10px;

    &:hover{
       color:#000;
       background:#ffc500; 
       transition: 0.2s ease-out;
       cursor:pointer;
    }


`

