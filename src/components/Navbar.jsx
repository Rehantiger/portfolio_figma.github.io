import React from 'react'
import data from "../constant/Data";
import NavProps from './NavProps';
const Navbar = () => {
  return (
   <>
 

     <ul className='flex justify-center mt-3 ml-34 flex-wrap'>
        {data.map((item) => {
            const {id,name1,name,} = item
        return(  
       <NavProps  key={id}  name1={name1} name={name} 

        />
                
        )
        })}
        </ul>
        
        <ul className='text-center '>
          {data.map((item) => {
            const {head,heading,para} = item
         return  <NavProps head={head} heading={heading} para={para}  />
          })}
        </ul>


   </>
  )
}

export default Navbar