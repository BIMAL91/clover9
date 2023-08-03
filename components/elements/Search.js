import React, { useState } from 'react';
import Link from 'next/link';


const Search = () => {
  const [isToggled, setToggled] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/Display', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: selectedService,
          location: selectedLocation,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        console.error('Search request failed');
      }
    } catch (error) {
      console.error('Search request failed', error);
    }
  };

  return (
    <>
      <div className="container mt-70">
        <div className="text-center mt-10">
          <div className="image-search-form">
            <select value={selectedService} onChange={handleServiceChange}>
              <option value="">Service</option>
              <option value="Car Modifications">Car Modifications</option>
              <option value="Customer service">Customer service</option>
              <option value="eee">eee</option>
              {/* Add your service options */}
            </select>
            <select value={selectedLocation} onChange={handleLocationChange}>
              <option value="">Location</option>
              <option value="kannur">kannur</option>
              <option value="idukki">idukki</option>
              <option value="eee">eee</option>
              {/* Add your location options */}
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="card-row">
          {/* Display search results as Bootstrap cards */}
          {searchResults.map((result) => (
            <div key={result.id} className="card">

              <div className="card-body">
                <h5 className="card-title">{result.title}</h5>
                <img src={`/assets/uploads/${result.image}`} alt={result.title} className="card-img" />

                <Link href={`/details/${result.id}`}>
                  <button className="get-started-link icon-arrow-right ">Get Started</button>
                </Link>
              </div>
            </div>
          ))}
        </div>




      </div>
    </>
  );
};

export default Search;
