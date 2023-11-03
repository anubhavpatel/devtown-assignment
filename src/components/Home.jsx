import React from 'react'
import { CiSearch } from "react-icons/ci"
import { BsChevronCompactDown } from "react-icons/bs"
import { Link } from 'react-router-dom'
import "./home.css"
import data from "../data.json"
import { useState } from "react"
import Pagination from './Pagination'
import Card from './Card'
const Navbar = () => {
  const [searchName, setSearchName] = useState('');

  const [selectedValue, setSelectedValue] = useState(""); // Initialize the state to store the selected value
  const [FilteredFruits, setFilteredFruits] = useState([]); // Initialize the state to store filtered fruits


 
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);

    // Call applyFilter with the selected value to update the filteredFruits state
    applyFilter(selectedValue);
    setCurrentPage(1);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = FilteredFruits.slice(firstPostIndex, lastPostIndex);

  const applyFilter = (value) => {
    if (value === "") {
      setFilteredFruits(data);
    } else {

      const filtered = data.filter((fruit) => fruit.title === value);
      setFilteredFruits(filtered);

    }
  };

  // Call the applyFilter function when the component mounts to display all products initially
  React.useEffect(() => {
    applyFilter(selectedValue);
  }, []);

  return (
    <>
      <div className='main-container'>


        <div className='header'>
          <div className='searchbar'>
            <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <input type="text" name="search" placeholder="Search by fruits name" autoComplete="off" onChange={(e) => setSearchName(e.target.value)}
              />
              <CiSearch size={30} />
            </form>
          </div>


          <Link className='rel' >Relevance <BsChevronCompactDown /></Link>
          <Link className='brands'>Cart <BsChevronCompactDown /></Link>

        </div>

      </div>

      <div style={{ display: "flex", marginTop: "1rem", justifyContent:"center"}}>
        <form action="/action_page.php">
          <label for="fruits">Choose a fruit:</label>

          <select name="fruits" id="fruits" onChange={handleDropdownChange}>
            <option value="">All</option>
            <option value="Apple">Apple</option>   ``
            <option value="Banana">Banana</option>
            <option value="Grapes">Grapes</option>
            <option value="Gwava">Gwava</option>
            <option value="Lychee">Lychee</option>
            <option value="Mango">Mango</option>
            <option value="Papaya">Papaya</option>
            <option value="Pomegranate">Pomegranate</option>
          </select>

        </form>

        {/* <form action="/action_page.php">
          <label for="cars">Short by Prices:</label>
          <select name="cars" id="cars">
            <option value="htl">High to low</option>   ``
            <option value="lth">Low to high </option>   ``
          </select>

      
        </form> */}
      </div>
      <div className='data-fetch'>
        {
          currentPosts.filter(i => {
            if (searchName === '') {
              return i;
            } else if (i.title.toLowerCase().includes(searchName.toLowerCase())) {
              return i;
            }


          }).map((data) => {

            return (
              <Card
                key={data.id}
                title={data.title}
                image={data.image}
                year={data.start_production}
                price={data.price}
                description={data.description}
              />

            )

          })


        }
      </div>

      <Pagination totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
    </>
  )
}

export default Navbar