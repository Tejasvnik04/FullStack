import React from 'react'
import { FooterContainer,FooterLink,FooterLinksContainer,FooterLinksWrapper, FooterLinkItems,FooterLinkTitle,FooterWrap} from './FooterElements'
import{SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,SocialIcons,SocialIconLink} from './FooterElements'
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer style={{  left: 0, bottom: 0, width: '100%' }}>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="/signin">Email</FooterLink>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Whatsapp</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Branches</FooterLinkTitle>
                            <FooterLink to="/signin">Banglore, India</FooterLink>
                            <FooterLink to="/signin">Tokyo, Japan</FooterLink>
                            <FooterLink to="/signin">Vancouver, Canada</FooterLink>
                            <FooterLink to="/signin">Milan, Italy</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap >
                    <SocialLogo to='/a' >
                        
                        Aqua Cruise
                    </SocialLogo>
                    <WebsiteRights style={{left:60}}>
                        Aqua Cruise • {new Date().getFullYear()}
                         &nbsp; &nbsp; All rights reserved
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria_labels="Facebook">
                          <FaFacebook/>                       
                         </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria_labels="Instagram">
                          <FaInstagram/>                       
                         </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria_labels="Youtube">
                          <FaYoutube/>                       
                         </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria_labels="Telegram">
                          <FaTelegram/>                       
                         </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
      
    </FooterContainer>
  )
}

export default Footer
