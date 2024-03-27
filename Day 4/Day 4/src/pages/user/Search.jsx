import React, { useState } from 'react';
import video from '../assets/video.mp4';
import Navbar from '../components/Navbar/Navbar2';
import Footer from '../components/Footer/Footer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "./Search.css";
import SearchIndex from './SearchIndex'
import { Button } from '../components/ButttonElements';
import Data from './SearchIndex'
import NavBar1 from '../components/Navbar/NavBar1';


const Search = () => {
  // Function to handle price change
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  
  // Function to get today's date in the format yyyy-mm-dd
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  
  const [selectedPrice, setSelectedPrice] = useState(1000); // Initial value for the price
  const [selectedPeople,setSelectedPeople]=useState(0);
  const [selectedDestination,setSelectedDestination]=useState("jo")
  const [selectedFromDate,setSelectedFromDate]=useState(getTodayDate())
  const [selectedToDate,setSelectedToDate]=useState(getTodayDate())
  const handlePeopleChange=(event)=>
  {
    setSelectedPeople(event.target.value);
  }
  const handleFromDate=(event)=>{
    setSelectedFromDate(event.target.value);
  }
  const handleToDate=(event)=>
  {
    setSelectedToDate(event.target.value);
  }
  const handleDestination=(event)=>{
    setSelectedDestination(event.target.value);
  }
  
 

  const handleSearch = (selectDestination, selectPrice) => {
      //const results = Data.filter(entry => entry.destination.toLowerCase().includes(selectDestination.toLowerCase()) && entry.price === selectPrice);
      
      console.log(selectDestination);
  }
  return (
    <>
      <NavBar1/>
      <section className="home" style={{ position: 'relative' }}>
        <video src={video} muted autoPlay loop type="video/mp4" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
        <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="homeContent container" style={{ zIndex: 2, width: 1400, marginTop: -230 }}>
            <h1 className="homeTitle" style={{ fontSize: 70, color: 'white', fontWeight: 'bold', marginBottom: 45, fontFamily: 'inherit', marginLeft: 100, marginTop: -30 }}>Search your <br />Ride
            </h1>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', width: '90%', color: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 50 }}>
              <div className="cardDiv grid" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <div className="destinationInput" style={{ marginBottom: '20px', width: '30%', fontSize: 18 }}>
                  <label htmlFor="city">Search your destination:</label>
                  <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" placeholder='Enter name here-->' value={selectedDestination} onChange={handleDestination}style={{ marginRight: '10px', padding: 10, borderRadius: 10, fontSize: 16 }} />
                    <LocationOnIcon />
                  </div>
                </div>
                <div className="nopInput" style={{ marginBottom: '20px', width: '30%', fontSize: 18, marginLeft: 20 }}>
                  <label htmlFor="number">Number of passengers:</label>
                  <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="text" placeholder='Enter number here-->'value={selectedPeople} onChange={handlePeopleChange} style={{ marginRight: '10px', padding: 10, borderRadius: 10, fontSize: 16 }} />
                    <PeopleIcon />
                  </div>
                </div>
                <div className="fromDateInput" style={{ marginBottom: '20px', width: '30%', fontSize: 18, marginLeft: 40 }}>
                  <label htmlFor="fromdate">Search your from-date:</label>
                  <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="date" min={getTodayDate()} value={selectedFromDate} onChange={handleFromDate} style={{ marginRight: '10px', padding: 10, borderRadius: 10, fontSize: 16 }} />
                  </div>
                </div>
                <div className="toDateInput" style={{ marginBottom: '20px', width: '30%', fontSize: 18, marginLeft: 20 }}>
                  <label htmlFor="todate">Search your to-date:</label>
                  <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="date" min={selectedFromDate} value={selectedToDate} onChange={handleToDate}style={{ marginRight: '10px', padding: 10, borderRadius: 10, fontSize: 16 }} />
                  </div>
                </div>
                <div className="priceInput" style={{ marginBottom: '20px', width: '30%', fontSize: 18 }}>
                  <div className="label_total flex" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <label htmlFor="price">Select Price: ${selectedPrice}</label>
                  </div>
                  <div className="input flex" style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="range" max="5000" min="1000" value={selectedPrice} onChange={handlePriceChange} style={{ marginRight: '10px', marginTop: 20 }} />
                    <AttachMoneyIcon />
                  </div>
                </div>

              </div>
                <Button onClick={() => handleSearch(selectedDestination, selectedPrice)} >Search</Button>
            </div>
          </div>
        </div>
      </section>
      <SearchIndex destination={selectedDestination} price={selectedPrice}/>
      <Footer />
    </>
  );
};

export default Search;
