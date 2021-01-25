import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo,
    SocialIcons, SocialIconLink} from './FooterElements';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap> 
                <SocialMedia>
                    <SocialMediaWrap> 
                        <SocialLogo to="/"> Tomato Pizzas </SocialLogo> 
                        <SocialIcons> 
                           <SocialIconLink href="/" target="_blanck" aria-label="Facebook" rel="noopener noreferrer"> 
                            <FaFacebook/>
                            </SocialIconLink> 
                            <SocialIconLink href="/" target="_blanck" aria-label="Instagram" rel="noopener noreferrer" >
                            <FaInstagram />
                            </SocialIconLink> 
                            <SocialIconLink href="/" target="_blanck" aria-label="Twitter" rel="noopener noreferrer" >
                            <FaTwitter />
                            </SocialIconLink> 
                        </SocialIcons>
                    </SocialMediaWrap>
                    </SocialMedia> 
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
