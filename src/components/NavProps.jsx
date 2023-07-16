import React from 'react'
import img1 from "../images/behance.png"
import img2 from "../images/instagram.png"
import img3 from "../images/linkedin.png"
import img4 from "../images/twitter.png"

const NavProps = (props) => {
  return (
   <>

<ul className='flex justify-center items-center '>
  
    <li style={{color:"#F6490D",padding:"24px", }}>{props.name1}</li>
    <li style={{color:"#FAF9F0" }} >{props.name}</li>
 </ul>
 
 <div style={{color:"#FAF9F0" }} className="absolute top-52 inset-x-16">
  <h6 className="text-lg">{props.head}</h6>
  <h1 style={{fontFamily:"Montserrat;"}} className="text-4xl font-semibold">{props.heading}</h1>
  <p className="text-2xl">{props.para}</p>

 <div className='flex flex-wrap justify-center mt-3  '>
  <img style={{width:" 39.635px",height: "39.635px",padding:"3px"}}  src={img1}   alt="twitter" />
  <img style={{width:" 39.635px",height: "39.635px",padding:"3px"}}  src={img2} alt="linkedin" />
  <img style={{width:" 39.635px",height: "39.635px",padding:"3px"}}  src={img3} alt="instagram" />
  <img style={{width:" 39.635px",height: "39.635px",padding:"3px"}}  src={img4} alt="behance" />
 </div>


 </div>
 
 
   </>
  )
}

export default NavProps