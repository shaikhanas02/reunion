import React, { useState } from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import "./App.css" ;

const initialDataFilter1 = [
  {
    id: 1,
    name: 'Newyork',
    location: 'Newyork',
    date: 'In a week',
    price: 100 ,
    type: '3Beds',
    image: require('./images/rent1.jpg'),
  },
  {
    id: 2,
    name: 'Mumbai',
    location: 'Mumbai',
    date: 'In a week',
    price: 200 ,
    type: '2Beds',
    image: require('./images/rent2.jpg'),
  },
  {
    id: 3,
    name: 'Los Angeles',
    location: 'Los Angeles',
    date: 'In a week',
    price: 300 ,
    type: '1Bed',
    image: require('./images/rent3.jpg'),
  },
  {
    id: 4,
    name: 'Tokyo',
    location: 'Tokyo',
    date: 'In a week',
    price: 400,  
      type: '3Beds',
    image: require('./images/rent4.jpg'),
  }, 
  {
    id: 5,
    name: 'Munich',
    location: 'Munich',
    date: 'In a week',
    price: 500,
    type: '2Beds',
    image: require('./images/rent5.jpg'),
  },
  {
    id: 6,
    name: 'Toronto',
    location: 'Toronto',
    date: 'In 2 weeks',
    price: 100,  
      type: '1Bed',
    image: require('./images/buy1.jpg'),
  },
  {
    id: 7,
    name: 'Denver',
    location: 'Denver',
    date: 'In 2 weeks',
    price: 200,
    type: '3Beds',
    image: require('./images/buy2.jpg'),
  }, 
    {
      id: 8,
      name: 'Berlin',
      location: 'Berlin',
      date: 'In 2 weeks',
      price: 300,
      type: '2Beds',
      image: require('./images/buy3.jpg'),
    }, {
      id: 9,
      name: 'Nairobi',
      location: 'Nairobi',
      date: 'In 2 weeks',
      price: 400,
      type: '1Bed',
      image: require('./images/buy4.jpg'),
    },  {
      id: 10,
      name: 'Rio de Janerio',
      location: 'Rio de Janerio',
      date: 'In 2 weeks',
      price: 500,
      type: '3Beds',
      image: require('./images/buy5.jpg'),
    },  {
      id: 11,
      name: 'Helsinki',
      location: 'helsinki',
      date: 'In 3 weeks',
      price: 100,
      type: '2Bed',
      image: require('./images/sell1.jpg'),
    },{
      id: 12,
      name: 'Shanghai',
      location: 'Shanghai',
      date: 'In 3 weeks',
      price: 200,
      type: '1Bed',
      image: require('./images/sell2.jpg'),
    },{
      id: 13,
      name: 'Wuhan',
      location: 'Wuhan',
      date: 'In 3 weeks',
      price: 300,
      type: '3Bed',
      image: require('./images/sell3.jpg'),
    },{
      id: 14,
      name: 'Ghatkopar',
      location: 'Ghatkopar',
      date: 'In 3 weeks',
      price: 400,
      type: '2Bed',
      image: require('./images/sell4.jpg'),
    },{
      id: 15,
      name: 'Dombivili',
      location: 'Dombivili', 
      date: 'In 3 weeks',
      price: 500,
      type: '1Bed',
      image: require('./images/sell5.jpg'),
    },
  // Add more data items for Filter 1
]; 

const initialDataFilter2 = [
  {
    id: 1,
    name: 'Toronto',
    location: 'Toronto',
    date: 'In a week',
    price: 100,
    type: '3Bed',
    image: require('./images/buy1.jpg'),
  },
  {
    id: 2,
    name: 'Denver',
    location: 'Denver',
    date: 'In a week',
    price: 200,
    type: '2Bed',
    image: require('./images/buy2.jpg'),
  }, 
    {
      id: 3,
      name: 'Berlin',
      location: 'Berlin',
      date: 'In a week',
      price: 300,
      type: '1Bed',
      image: require('./images/buy3.jpg'),
    }, {
      id: 4,
      name: 'Nairobi',
      location: 'Nairobi',
      date: 'In a week',
      price: 400,
      type: '3Bed',
      image: require('./images/buy4.jpg'),
    },  {
      id: 5,
      name: 'Rio de Janerio',
      location: 'Rio de Janerio',
      date: 'In a week',
      price: 500,
      type: '2Bed',
      image: require('./images/buy5.jpg'),
    },  {
      id: 6,
      name: 'Helsinki',
      location: 'helsinki',
      date: 'In 2 weeks',
      price: 100,
      type: '1Bed',
      image: require('./images/sell1.jpg'),
    },{
      id: 7,
      name: 'Shanghai',
      location: 'Shanghai',
      date: 'In 2 weeks',
      price: 200,
      type: '3Beds',
      image: require('./images/sell2.jpg'),
    },{
      id: 8,
      name: 'Wuhan',
      location: 'Wuhan',
      date: 'In 2 weeks',
      price: 300,
      type: '2Beds',
      image: require('./images/sell3.jpg'),
    },{
      id: 9,
      name: 'Ghatkopar',
      location: 'Ghatkopar',
      date: 'In 2 weeks',
      price: 400,
      type: '1Bed',
      image: require('./images/sell4.jpg'),
    },{
      id: 10,
      name: 'Dombivili',
      location: 'Dombivili', 
      date: 'In 2 weeks',
      price: 500,
      type: '3Beds',
      image: require('./images/sell5.jpg'),
    },  {
      id: 11,
      name: 'Newyork',
      location: 'Newyork',
      date: 'In 3 weeks',
      price: 100,
      type: '2Beds',
      image: require('./images/rent1.jpg'),
    },
    {
      id: 12,
      name: 'Mumbai',
      location: 'Mumbai',
      date: 'In 3 weeks',
      price: 200,
      type: '1Bed',
      image: require('./images/rent2.jpg'),
    },
    {
      id: 13,
      name: 'Los Angeles',
      location: 'Los Angeles',
      date: 'In 3 weeks',
      price: 300,
      type: '3Beds',
      image: require('./images/rent3.jpg'),
    },
    {
      id: 14,
      name: 'Tokyo',
      location: 'Tokyo',
      date: 'In 3 weeks',
      price: 400,
      type: '2Beds',
      image: require('./images/rent4.jpg'),
    }, 
    {
      id: 15,
      name: 'Munich',
      location: 'Munich',
      date: 'In 3 weeks',
      price: 500,
      type: '1Bed', 
      image: require('./images/rent5.jpg'),
    },
  // Add more data items for Filter 2
];

// const initialDataFilter3 = [
//     {
//       id: 1,
//       name: 'Helsinki',
//       location: 'helsinki',
//       date: 'In a week',
//       price: 500,
//       type: 'Type Z',
//       image: require('./images/sell1.jpg'),
//     },{
//       id: 2,
//       name: 'Shanghai',
//       location: 'Shanghai',
//       date: 'In a week',
//       price: 100,
//       type: 'Type Z',
//       image: require('./images/sell2.jpg'),
//     },{
//       id: 3,
//       name: 'Wuhan',
//       location: 'Wuhan',
//       date: 'In a week',
//       price: 200,
//       type: 'Type Z',
//       image: require('./images/sell3.jpg'),
//     },{
//       id: 4,
//       name: 'Ghatkopar',
//       location: 'Ghatkopar',
//       date: 'In a week',
//       price: 300,
//       type: 'Type Z',
//       image: require('./images/sell4.jpg'),
//     },{
//       id: 5,
//       name: 'Dombivili',
//       location: 'Dombivili', 
//       date: 'In a week',
//       price: 400,
//       type: 'Type Z',
//       image: require('./images/sell5.jpg'),
//     },
//     {
//       id: 6,
//       name: 'Toronto',
//       location: 'Toronto',
//       date: 'In 2 weeks',
//       price: 500,
//       type: 'Type Z',
//       image: require('./images/buy1.jpg'),
//     },
//     {
//       id: 7,
//       name: 'Denver',
//       location: 'Denver',
//       date: 'In 2 weeks',
//       price: 100,
//       type: 'Type Z',
//       image: require('./images/buy2.jpg'),
//     }, 
//       {
//         id: 8,
//         name: 'Berlin',
//         location: 'Berlin',
//         date: 'In 2 weeks',
//         price: 200,
//         type: 'Type Z',
//         image: require('./images/buy3.jpg'),
//       }, {
//         id: 9,
//         name: 'Nairobi',
//         location: 'Nairobi',
//         date: 'In 2 weeks',
//         price: 400,
//         type: 'Type Z',
//         image: require('./images/buy4.jpg'),
//       },  {
//         id: 10,
//         name: 'Rio de Janerio',
//         location: 'Rio de Janerio',
//         date: 'In 2 weeks',
//         price: 300,
//         type: 'Type Z',
//         image: require('./images/buy5.jpg'),
//       }, {
//         id: 11,
//         name: 'Newyork',
//         location: 'Newyork',
//         date: 'In 3 weeks',
//         price: 400,
//         type: '3Beds',
//         image: require('./images/rent1.jpg'),
//       },
//       {
//         id: 12,
//         name: 'Mumbai',
//         location: 'Mumbai',
//         date: 'In 3 weeks',
//         price: 500,
//         type: '3Beds',
//         image: require('./images/rent2.jpg'),
//       },
//       {
//         id: 13,
//         name: 'Los Angeles',
//         location: 'Los Angeles',
//         date: 'In 3 weeks',
//         price: 100,
//         type: '3Beds',
//         image: require('./images/rent3.jpg'),
//       },
//       {
//         id: 14,
//         name: 'Tokyo',
//         location: 'Tokyo',
//         date: 'In 3 weeks',
//         price: 200,
//         type: '3Beds',
//         image: require('./images/rent4.jpg'),
//       }, 
//       {
//         id: 15,
//         name: 'Munich',
//         location: 'Munich',
//         date: 'In 3 weeks',
//         price: 300,
//         type: '3Beds',
//         image: require('./images/rent5.jpg'),
//       }, 
//     // Add more data items for Filter 3
//   ];

const App = () => {
  const [originalData, setOriginalData] = useState(initialDataFilter1);
  const [data, setData] = useState(originalData);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [parentFilter, setParentFilter] = useState('Filter1');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (category, value) => {
    switch (category) {
      case 'location':
        setSelectedLocation(value);
        break;
      case 'date':
        setSelectedDate(value);
        break;
      case 'price':
        setSelectedPrice(value);
        break;
      case 'type':
        setSelectedType(value);
        break;
      default:
        break;
    }
  };

  const handleParentFilterChange = (filterValue) => {
    setParentFilter(filterValue);
    setSelectedLocation('All');
  setSelectedDate('All');
  setSelectedPrice('All');
  setSelectedType('All');
    // Set the data array based on the selected parent filter
    if (filterValue === 'Filter1') {
      setData(initialDataFilter1);
      setOriginalData(initialDataFilter1);
    } else if (filterValue === 'Filter2') {
      setData(initialDataFilter2);
      setOriginalData(initialDataFilter2);
    }
    //  else if (filterValue === 'Filter3') {
    //   setData(initialDataFilter3);
    //   setOriginalData(initialDataFilter3);
    // }
  };

  const applyFilters = () => {
    let filteredData = parentFilter === 'Filter1' ? initialDataFilter1 : parentFilter === 'Filter2' ? initialDataFilter2 : [];



    // Apply child filter logic here
    if (selectedLocation !== 'All') {
      filteredData = filteredData.filter((item) => item.location === selectedLocation);
    }
    if (selectedDate !== 'All') {
      filteredData = filteredData.filter((item) => item.date === selectedDate);
    }
    if (selectedPrice !== 'All') {
      const selectedPriceNumber = parseInt(selectedPrice); // Convert selectedPrice to a number
      filteredData = filteredData.filter((item) => item.price === selectedPriceNumber);
    }
    if (selectedType !== 'All') {
      filteredData = filteredData.filter((item) => item.type === selectedType);
    }

    setData(filteredData);
  };

  const resetFilters = () => {
    setSelectedLocation('All');
    setSelectedDate('All');
    setSelectedPrice('All');
    setSelectedType('All');
    // Reset data to the initial data of the selected parent filter
    if (parentFilter === 'Filter1') {
      setData(initialDataFilter1);
    } else if (parentFilter === 'Filter2') {
      setData(initialDataFilter2);
    }
    //  else if (parentFilter === 'Filter3') {
    //     setData(initialDataFilter3);
    //   }
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    // Apply search filtering logic here
    // For example, filter data based on name containing the search term
    const filteredData = originalData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setData(filteredData);
  };
  const getDynamicHeading = () => {
    switch (parentFilter) {
      case 'Filter1':
        return 'Shop properties to Rent';
      case 'Filter2':
        return 'Shop properties to Buy';
     
      default:
        return 'Dynamic Heading';
    }
  };
  return (
    <div>
      <div>
       
      <Header onParentFilterChange={handleParentFilterChange} />
      <SearchBar title={getDynamicHeading()} onSearchChange={handleSearchChange} />
        {/* Child Filters */}
      <div className='container'>
        <div className='filters-container'>
        <label>
          Location :
          <select value={selectedLocation} onChange={(e) => handleFilterChange('location', e.target.value)}>
            <option value="All">All</option>
            <option value="Newyork">Newyork</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Toronto">Toronto</option>
            <option value="Dombivili">Dombivili</option>
            <option value="Munich">Munich</option>
            <option value="Denver">Denver</option>
            <option value="Rio de Janerio">Rio de Janerio</option>
            <option value="Berlin">Berlin</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Helsinki">Helsinki</option>
            <option value="Shangai">Shanghai</option>
            <option value="Wuhan">Wuhan</option>
            <option value="Ghatkopar">Ghatkopar</option>
            {/* Add location options */}
          </select>
        </label>
        <label>
          When :
          <select value={selectedDate} onChange={(e) => handleFilterChange('date', e.target.value)}>
            <option value="All">All</option>
            <option value="In a week">In a week</option>
            <option value="In 2 weeks">In 2 weeks</option>
            <option value="In 3 weeks">In 3 weeks</option>

            {/* Add date options */}
          </select>
        </label>
        <label>
          Price :
          <select value={selectedPrice} onChange={(e) => handleFilterChange('price', e.target.value)}>
            <option value="All">All</option>
            <option value="100">$100/month</option>
            <option value="200">$200/month</option>
            <option value="300">$300/month</option>
            <option value="400">$400/month</option>
            <option value="500">$500/month</option>

            {/* Add price options */}
          </select>
        </label>
        <label>
          Type : 
          <select value={selectedType} onChange={(e) => handleFilterChange('type', e.target.value)}>
            <option value="All">All</option>
            <option value="1Bed">1Bed</option>
            <option value="2Beds">2Beds</option>
            <option value="3Beds">3Beds</option>

            {/* Add type options */}
          </select>
        </label>
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={resetFilters}>Reset Filters</button>
        </div>
      </div>
      <div className="data-cards-container" style={{display: 'flex'}}>
        {/* Render Data Cards */}
        {data.map((item) => (
          <div className='data-card' key={item.id} >
            {/* <h3>{item.name}</h3> */}
            <img src={item.image} alt={`Image for ${item.name}`} />
            <p className='price'>{`$${item.price}`}</p>
            <p className='location'>{item.location}</p>
            <p>{item.date}</p>
            <p>{item.type}</p>
          </div>
        ))}
        </div>  
      </div>
    </div>
  );
};

export default App;
