import styled from 'styled-components';
import ImgBg from '../../images/pizzabg.jpg'

export const HeroContainer = styled.div`
 background:linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0,0,0,0.3)),
 url(${ImgBg});
 height:100vh;
 background-position:center;
 background-size:cover;
 background-position-y:center;
`;

export const HeroContent = styled.div`
height:calc(100vh-80px);
max-height:100%;
padding:0rem calc((100vw-1300px) /2);
`;
export const HeroItems = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
max-height:100%;
height:100vh;
padding: 0 4rem;
width:100%;
color:#fff;
text-transform:uppercase;
line-height:1;
font-weight:bold;

@media screen and(max-width:450px){
    width:100%;
    
}`;

export const HeroH1 = styled.h1`
font-size:3rem;
margin-bottom:1rem;
box-shadow:3px 5px #e9ba23;
letter-spacing:3px;


@media (max-width:736px ){
   font-size:2rem;
   line-height:3rem;
}

@media(max-width:575px){
    font-size:1.3rem;
      line-height:2rem

}
`;


export const HeroP = styled.p`
  font-size:1rem;
  margin-bottom:2rem;
  letter-spacing:0.225rem;

    @media(max-width:575px){
    font-size:0.7rem;
      line-height:1.2rem

}
`;

export const HeroBtn = styled.button`
  font-size:1.4rem;
  padding:1rem 4rem;
  border:none;
  background:#cb4d0e;
  color:#fff;
  transition:0.2s ease-out; 
  border-radius:10px;
 
  &:hover{
     background:#ffc500;
     transition:0.2s ease-out;
     cursor:pointer;
     color:#000;

  }

`;



