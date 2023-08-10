import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const data = [
  {
    id: 1,
    title: 'Plan Management',
    description: 'Alliance Plan Management Services',
    location: 'Elford Street, Clifton Beach, QLD 4879',
    imageUrl: '/assets/imgs/page/services/1/p.png',
    link: '/page-service-4/'
  },
  {
    id: 2,
    title: 'Plan Management',
    description: '(Ppm) Program Plan Management',
    location: 'Kingston Heights, Kingston Beach, TAS 7050',
    imageUrl: '/assets/imgs/page/services/1/planmanagement2.png',
    link: '/page-service-5/'
  },
  {
    id: 3,
    title: 'Household tasks',
    description: 'Lawn.Com.Au',
    location: 'New England Highway, Toowoomba City, QLD 4350',
    imageUrl: '/assets/imgs/page/services/1/gardening.jpg',
    link: '/page-service-6/'
  },
  {
    id: 4,
    title: 'Daily Personal Activities',
    description: 'Cramli Australia Pty Ltd',
    location: 'Unit 1, 385 Mcclelland Drive, Langwarrin, VIC 3910',
    imageUrl: '/assets/imgs/page/services/1/PersonalActivities.jpg',
    link: '/page-service-1/'
  },
 
  
];

const SearchFilter = () => {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleServiceChange = (event) => {
    setService(event.target.value);
    filterData(event.target.value, location);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    filterData(service, event.target.value);
  };

  const filterData = (selectedService, selectedLocation) => {
    const filtered = data.filter(item => {
      if (selectedService && item.title !== selectedService) {
        return false;
      }
      if (selectedLocation && item.location !== selectedLocation) {
        return false;
      }
      return true;
    });

    setFilteredData(filtered);
  };

  const handleSearch = () => {
    const filtered = data.filter(item => {
      if (service && item.title !== service) {
        return false;
      }
      if (location && item.location !== location) {
        return false;
      }
      return true;
    });

    if (service || location) {
      setFilteredData(filtered);
    } else {
   
      setFilteredData(data);
    }
  };

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const selectStyles = {
    margin: '10px',
    padding: '15px 50px',
    borderRadius: '50px',
    width: '300px',
  };

  const buttonStyles = {
    margin: '10px',
    padding: '15px 50px',
    borderRadius: '50px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
  };

  const cardContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', 
    maxWidth: '1200px',
    margin: '0 auto', 
  };
  
  const cardContainerStylesCentered = {
    ...cardContainerStyles,
    justifyContent: 'center', 
  };

  const cardStyles = {
    flexBasis: '100%', 
    maxWidth: '300px', 
    border: '1px solid #ccc',
    padding: '16px',
    marginBottom: '20px',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  const largeScreenCardStyles = {
    flexBasis: windowWidth >= 768 ? 'calc(25% - 20px)' : 'calc(100% - 20px)',
    maxWidth: windowWidth >= 768 ? '300px' : '100%',
  };

  const imageStyles = {
    width: '100%',
    height: '200px',
  };

  const titleStyles = {
    fontSize: '13px',
    fontWeight: 'lightweight',
  };

  const linkStyles = {
    display: 'block',
    marginTop: '10px',
    color: '#101828',
    backgroundColor: '#ffffff',
    padding: '10px',
    textDecoration: 'none',
    borderRadius: '8px',
    width: '100%',
    border: '2px solid black',
  };

  return (
    <div>
      <div className="text-center mt-50" style={formStyles}>
        <div className="imagesearchform">
          <select  value={service} onChange={handleServiceChange} style={selectStyles}>
            <option value="">Service</option>
            <option value="Plan Management">Plan Management</option>
            <option value="Household tasks">Household tasks</option>
            <option value="Daily Personal Activities">Daily Personal Activities</option>
            {/* Add your service options */}
          </select>
          <select value={location} onChange={handleLocationChange} style={selectStyles}>
            <option value="">Location</option>
            <option value="Elford Street, Clifton Beach, QLD 4879">Elford Street, Clifton Beach, QLD 4879</option>
            <option value="Kingston Heights, Kingston Beach, TAS 7050">Kingston Heights, Kingston Beach, TAS 7050</option>
            <option value="New England Highway, Toowoomba City, QLD 4350">New England Highway, Toowoomba City, QLD 4350</option>
            <option value="Unit 1, 385 Mcclelland Drive, Langwarrin, VIC 3910">Unit 1, 385 Mcclelland Drive, Langwarrin, VIC 3910</option>
            {/* Add your location options */}
          </select>
          <button onClick={handleSearch} style={buttonStyles}>Search</button>
        </div>
      </div>
      <div className="card-container" style={windowWidth >= 768 ? cardContainerStyles : cardContainerStylesCentered}>
    {filteredData.map(item => (
      <div
        className="card"
        key={item.id}
        style={{ ...cardStyles, ...(windowWidth >= 768 ? largeScreenCardStyles : {}) }}
      >
             <h3 style={titleStyles}>{item.description}</h3>
            <img src={item.imageUrl} alt={item.title} style={imageStyles} />
           
            <Link href={item.link}>
              <div style={linkStyles} className='icon-arrow-right'>Get Started</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
