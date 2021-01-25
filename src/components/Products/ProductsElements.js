import styled from 'styled-components';

export const ProductsContainer= styled.div`
 width:100%;
 min-height:100vh;
 padding: 2rem cal((100vw-1300px)/2);
 color:#ffff;
`;

export const ProductWrapper= styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  margin:0 auto;
`;

export const ProductsCard = styled.div`
margin:0rem 2rem;
line-height:2;
width:330px;
`;

export const ProductImg= styled.img`
  height:300px;
  min-width:300px;
  max-width:100%;
  box-shadow: 8px 8px #fdc500;
  
`;

export const ProductsHeading= styled.h1`
font-size:clamp(2rem, 2.5vw, 3rem);
text-align:center;
padding-top:2rem;
padding-bottom:3rem;
color:#4F4F4F;
`;

export const ProductTitle=styled.h2`
font-weight: 400;
font-size:1.5rem;
`;

export const ProductInfo=styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem; 
text-align:center;
color:black;

`;

export const ProductDesc =styled.p`
margin-bottom:1rem;
color:#4F4F4F;
`;

export const ProductPrice= styled.p`

margin-bottom:1rem;
font-size:1.5rem;
color:#006400;
`;

export const ProductButton=styled.button`
font-size:1rem;
padding:1rem 4rem;
border:none;
background:#cb4d0e;
color:#ffff;
transition:0.2 ease-out;
border-radius:5px;

&:hover{
    background:#ffc500;
    transition: 0.2s ease-out;
    cursor:pointer;
    color:#000;

}

`
