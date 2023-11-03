import React from 'react'
import "./Card.css"
import {GoPeople} from "react-icons/go"
import {PiGasPump,PiHeart} from "react-icons/pi"
import {IoSpeedometerOutline} from "react-icons/io5"
import {MdOutlineMotionPhotosAuto} from "react-icons/md"

const Card = ({title,image,year,price,description}) => {
  return (

    
    <div className='card-container'>

      <div className='car-image'>
      <img src={image}></img>
      </div>
      <div className='content'>
        <div className='c1'>
           <h2>{title}</h2>
            <div className='year'>{year}Rs</div>
        </div>
        <div className='c2'>
        <h6>Descriptoin</h6>
        <p style={{fontSize:"14px"}}>{description}</p>
        </div>
        <hr />
        <div className='c3'>
          <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
          <h5>{price}Rs</h5><p>/kg</p>
          </div>
            <div className='c31'>
                <div style={{ backgroundColor:"#cb202e44",color:"#cb202d", display:"flex", justifyContent: "center", 
                alignItems: "center",borderRadius:"0.5rem", height:"2rem", width:"2rem",marginRight:"5px" }}><PiHeart size={20}/></div>
                <button>Order now</button>
            </div>
        </div>
      </div>
      
    </div>
   
  )
}

export default Card