import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BoatCarousel = () => {
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
          <img src="https://www.seamagazine.com/wordpress/wp-content/uploads/2023/08/d1.jpg" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Deck Boats</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
            <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10,}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://www.petzolds.com/wp/wp-content/uploads/petzolds.com/2018/12/Regal-1900ES_running_14_367-2k.jpg" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Bow Riders</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://scl.cornell.edu/sites/scl/files/2020-05/COE%20PADL%20Canoe4%20HRZ.jpg" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Canoes</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://www.discoverboating.com/sites/default/files/runabout-boats.jpg" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>Runaboats</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
        <div className='card' style={{backgroundColor: 'white', borderRadius: 20, padding: 20, textAlign: 'center',color:'black',
    margin: '0 15px'}}>
          <img src="https://www.merchantnavydecoded.com/wp-content/uploads/2023/11/Screenshot-2023-11-25-170700.png" alt="deckboat" style={{width:280, height:250}}/>
          <h2 style={{fontFamily: 'Monospace', fontSize: 24}}>LifeBoats</h2>
          <p style={{fontFamily: 'Monospace'}}>Description...</p>
          <p>
          <button style={{fontFamily: 'Monospace', fontSize: 16 ,borderRadius:20,width:200,padding:10}}>Book now!</button>
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default BoatCarousel;
