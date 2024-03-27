import React from 'react'
import img from '../assets/boatimg.jpg'
import { Button } from '../components/ButttonElements';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export const Data = [
    { id: 1, destination: 'Hawaii', Cruise_id: 'CR001', description: 'Explore the beautiful islands of Hawaii. Enjoy snorkeling in crystal-clear waters, hiking to breathtaking viewpoints, and relaxing on stunning beaches.', price: 1000 },
    { id: 2, destination: 'Caribbean', Cruise_id: 'CR002', description: 'Sail through the turquoise waters of the Caribbean Sea. Experience vibrant cultures, visit historic landmarks, and indulge in delicious Caribbean cuisine.', price: 1100 },
    { id: 3, destination: 'Mediterranean', Cruise_id: 'CR003', description: 'Discover the rich history and culture of the Mediterranean region. Explore ancient ruins, stroll through charming villages, and savor Mediterranean cuisine.', price: 1200 },
    { id: 4, destination: 'Alaska', Cruise_id: 'CR004', description: 'Experience the stunning glaciers and wildlife of Alaska. Witness majestic whales, awe-inspiring glaciers, and breathtaking landscapes.', price: 1300 },
    { id: 5, destination: 'Norwegian Fjords', Cruise_id: 'CR005', description: 'Marvel at the breathtaking scenery of the Norwegian Fjords. Cruise past towering cliffs, cascading waterfalls, and picturesque villages.', price: 1400 },
    { id: 6, destination: 'Greek Islands', Cruise_id: 'CR006', description: 'Indulge in the charm and beauty of the Greek Islands. Explore ancient ruins, swim in crystal-clear waters, and experience vibrant nightlife.', price: 1500 },
    { id: 7, destination: 'Galapagos Islands', Cruise_id: 'CR007', description: 'Encounter unique wildlife and landscapes in the Galapagos Islands. Snorkel with sea lions, observe giant tortoises, and explore volcanic landscapes.', price: 1600 },
    { id: 8, destination: 'Baltic Sea', Cruise_id: 'CR008', description: 'Explore the historic cities and picturesque coastlines of the Baltic Sea. Visit grand palaces, stroll through charming cobblestone streets, and sample local cuisine.', price: 1700 },
    { id: 9, destination: 'South Pacific', Cruise_id: 'CR009', description: 'Relax on pristine beaches and snorkel in crystal-clear waters of the South Pacific. Discover vibrant coral reefs, swim with tropical fish, and experience island hospitality.', price: 1800 },
    { id: 10, destination: 'New Zealand', Cruise_id: 'CR010', description: 'Experience the stunning beauty and adventure of New Zealand. Explore majestic fjords, hike through lush forests, and encounter unique wildlife.', price: 1900 },
    { id: 11, destination: 'Antarctica', Cruise_id: 'CR011', description: 'Embark on an expedition to the icy wilderness of Antarctica. Witness towering icebergs, encounter penguins and seals, and explore remote research stations.', price: 2000 },
    { id: 12, destination: 'Egypt', Cruise_id: 'CR012', description: 'Discover ancient wonders along the Nile River and in the deserts of Egypt. Visit iconic landmarks, explore ancient temples, and cruise the legendary Nile.', price: 2100 }
];



const SearchIndex = () => {
  return (
    <section className='main container section'>
        <div className="secTitle">
            <h3 className="title" style={{fontFamily:'inherit', fontSize:30,marginLeft:600}}>
                Most booked cruises
            </h3>
        </div>
        <div className='seeContent grid'>
          
              
                    return (
                        <div className="destinationContainer" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' ,color:'#007791'}}>
                        {Data.map(({ id, destination, Cruise_id, price, description }) => (
  <div key={id} className="singleDestination" style={{ width: '30%', marginBottom: '20px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
      <div className="imageDiv">
          <img src={img} alt={description} style={{ width: '70%', height: 'auto', alignItems: 'center', marginLeft: 60 }} />
      </div>
      <div className="cardTitle">
          <h3 className="destination" style={{ fontSize: 20 }}> <FmdGoodIcon /> {destination}</h3>
      </div>
      <div className="cardInfo">
          <div className="fees flex">
              <div className="price">
                  <h5>Price per head: ${price}</h5>
              </div>
          </div>
          <h4 className="description">{description}</h4>
          <Button className='button flex' to='/booked'>
              Book now!
          </Button>
      </div>
  </div>
))}

</div>

                    
                    )
        
        </div>
    </section>
  )
}

export default SearchIndex
