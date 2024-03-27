import React, { useState, useRef } from 'react';
import Navbar from './Navbar/Navbar2';
import componentBg from './componentbgm.mp4'
import Footer from './Footer/Footer';
import BoatCarousel from '../pages/InfoSection/BoatCarousel';
import SpeedBoatCarousel from '../pages/InfoSection/SpeedBoatCarousel';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroSub,
  HeroP,
  ContentContainer1,
  ContentContainer,
  ContentContainer2,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import backgroundvideo from '../assets/boat.mp4';
import { Button } from './ButttonElements';
import Sidebar from './Sidebar/Sidebar';
import styled from 'styled-components';
import CircleIcon from '@mui/icons-material/Circle';

// Styled HeroH1 with increased size and Pixelify Sans font
const StyledHeroH1 = styled(HeroH1)`
  font-size: 7.5rem; /* Adjust size as needed */
  font-family: 'Pixelify Sans', sans-serif; /* Change font family to Pixelify Sans */
  font-weight: 400; /* Apply black 900 style */
  margin-top: -270px;
  @media screen and (max-width:768px) {
    font-size: 48px;
  }

  @media screen and (max-width:480px) {
    font-size: 32px;
  }
`;

const Landing = () => {
  const [hoverButton1, setHoverButton1] = useState(false);
  const [hoverButton2, setHoverButton2] = useState(false);
  const [hoverButton3, setHoverButton3] = useState(false);

  const toggleHoverButton1 = () => {
    setHoverButton1(!hoverButton1);
  };

  const toggleHoverButton2 = () => {
    setHoverButton2(!hoverButton2);
  };

  const toggleHoverButton3 = () => {
    setHoverButton3(!hoverButton3);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Ref for ContentContainer1
  const boatCarouselRef = useRef(null);

  // Function to handle smooth scrolling to ContentContainer1
  const scrollToBoatCarousel = () => {
    boatCarouselRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const speedBoatCarouselRef=useRef(null);

  const scrolltoSpeedCarousel=()=>
  {
    speedBoatCarouselRef.current.scrollIntoView({behavior:'smooth',block:'start'});
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroContainer>
        <div className="bodypart">
          <HeroBg>
            <VideoBg autoPlay loop muted className="bg-vid" src={backgroundvideo} type="video/mp4" />
          </HeroBg>
          <HeroContent>
            <StyledHeroH1 style={{ marginLeft: -200 }}>AquaCruise <CircleIcon /></StyledHeroH1>
            <HeroP style={{ marginLeft: 400, marginTop: -6 }}>Personalised Cruising</HeroP>
            <HeroSub style={{ marginLeft: 400 }}>More flexibility, freedom and choice!</HeroSub>
            <HeroBtnWrapper style={{ marginLeft: 400 }}>
              <Button  onMouseEnter={toggleHoverButton1} onMouseLeave={toggleHoverButton1} primary={hoverButton1 ? 'true' : 'false'} dark={hoverButton1 ? 'true' : 'false'} style={{ marginRight: 20 }} onClick={scrollToBoatCarousel}>
                View Boats{hoverButton1 ? <ArrowForward /> : <ArrowRight />}
              </Button>
              <Button  onMouseEnter={toggleHoverButton2} onMouseLeave={toggleHoverButton2} primary={hoverButton2 ? 'true' : 'false'} dark={hoverButton2 ? 'true' : 'false'} style={{ marginRight: 20 }} onClick={scrolltoSpeedCarousel}>
                View Speed Boats{hoverButton2 ? <ArrowForward /> : <ArrowRight />}
              </Button>
              <Button to="/boats" onMouseEnter={toggleHoverButton3} onMouseLeave={toggleHoverButton3} primary={hoverButton3 ? 'true' : 'false'} dark={hoverButton3 ? 'true' : 'false'} style={{ marginRight: 20 }}>
                View Cruises{hoverButton3 ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
          </HeroContent>
        </div>
      </HeroContainer>
     
      <ContentContainer1 ref={boatCarouselRef}>
      <HeroBg>
            <VideoBg autoPlay loop muted className="bg-vid" src={componentBg} type="video/mp4" style={{height:'75%'}} />
          </HeroBg>
        <BoatCarousel />
      </ContentContainer1>
      <ContentContainer2 ref={speedBoatCarouselRef}>
       <HeroBg>
            <VideoBg autoPlay loop muted className="bg-vid" src={componentBg} type="video/mp4" style={{height:'75%'}} />
          </HeroBg>
        <SpeedBoatCarousel />
      </ContentContainer2>
  
      <Footer />
    </>
  );
};

export default Landing;
