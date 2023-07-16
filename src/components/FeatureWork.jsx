import React from 'react'
import Fdata from "../constant/FData";
import FeatureProps from './FeatureProps';

const FeatureWork = () => {
 return(

<div className='flex-wrap'>

    {Fdata.map((item,id) => {
   
return (

  <FeatureProps  style={{flexDirection: item.id === 2 ? "row-reverse" : "row"}}    key={id} 
  name={item.name}
  heading1={item.heading1}
  heading2={item.heading2}
  imgsrc={item.imgsrc}
  para1={item.para1}
  para2={item.para2}
  list1={item.list1}
  list2={item.list2}
  list3={item.list3}
  button1={item.button1}
  
   />



);


  })}



</div>
 )
  
  
}

export default FeatureWork