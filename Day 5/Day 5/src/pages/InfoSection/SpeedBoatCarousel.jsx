import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SpeedBoatCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel  responsive={responsive} >
        
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://www.blazerboats.com/zupload/library/40525/-104423-1000x700-0.jpg?ztv=20221220122823" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Bass Boats</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
            <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10,}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://www.offthehookyachts.com/wp-content/uploads/blogimages/7380091_20200519072542071_1_XLARGE-980x652-nwb.jpg" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Cabin Cruiser</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://faysboatyard.com/wp-content/uploads/2022/11/Scarab-195-Model-Boat.jpg.webp" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Jetboat</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://www.catamarans-fountaine-pajot.com/wp-content/uploads/sites/3/2023/08/Aura-51-Fountaine-Pajot-Sailing-Catamarans-Ban-scaled.jpg" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Catamarans</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://robbreport.com/wp-content/uploads/2022/07/3.-Yamaha-51385476272_ef6546cc87_k.jpg?w=1000" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Personalized Watercrafts</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default SpeedBoatCarousel;
