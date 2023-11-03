import React from 'react'
import "./Pagination.css"
import {GrNext, GrPrevious} from "react-icons/gr"
const Pagination = ({ totalPosts,
    postsPerPage,
    
    setCurrentPage,
    currentPage,}) => {
        let pages = [];

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pages.push(i);
        }
  return (
    <div className='pagination'>
    <p style={{marginLeft:"1rem", color:"white"}}>{currentPage} of 10</p>
    <div className='pagination-btn'>
    <button onClick={()=>{
 if(currentPage >1){
    setCurrentPage(currentPage-1);
 }
}}  className="prev"><GrPrevious/></button>
{pages.map((page, index) => {
    return (
     
       <div className="m">

        <button 
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}>
            {page}
        </button>
        </div>
      
    );
})}
<button onClick={()=>{
if(currentPage< pages.length){
    setCurrentPage(currentPage+1);
}
}} className="next"><GrNext/></button>

</div>
</div>
  )
}

export default Pagination