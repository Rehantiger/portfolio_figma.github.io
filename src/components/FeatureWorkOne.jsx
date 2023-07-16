import React from 'react'
import FeaturePropsOne from "../components/FeaturePropsOne";
import FdataOne from "../constant/FdataOne";




const FeatureWorkOne = () => {

  return(

    <div className='flex-wrap'>
    
        {FdataOne.map((item,id) => {
       
    return (
    
      <FeaturePropsOne  style={{flexDirection: item.id === 2 ? "row-reverse" : "row"}}    key={id} 
      heading1={item.heading1}
      heading2={item.heading2}
      imgsrc={item.imgsrc}
      para1={item.para1}
      para2={item.para2}
      para3={item.para3}
      para4={item.para4}
      para5={item.para5}
      button1={item.button1}
      
       />
    
    
    
    );
    
    
      })}
    
    
    
    </div>
     )
      
      
    }



   

    





  
 
  

export default FeatureWorkOne