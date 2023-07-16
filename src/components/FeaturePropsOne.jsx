import React from 'react'

const FeaturePropsOne = (props) => {
  return (
   <>

<div style={{flexDirection:props.isRowReverse ? "row-reverse " : "row"}} className='flex flex-wrap mt-28  ml-60 justify-center    '>
  <div className='mr-24   '>
<img className="aspect-square"   src={props.imgsrc} width="500px"   alt="" /> 
</div>

<div className='flex flex-col  flex-wrap flex-grow w-96 '>
   <h3 className="text-2xl" style={{color:"#FAF9F0",fontWeight: "600px"}}>{props.heading1}</h3>

<h3 className="text-2xl"  style={{color:"#FAF9F0", width:"562px",fontWeight: "600"}}>{props.heading2}</h3>

<p className='mt-2' style={{color:"#FAF9F0"}}>{props.para1}</p>
<p style={{color:"#FAF9F0"}}>{props.para2}</p>
<p style={{color:"#FAF9F0"}}>{props.para3}</p>
<p style={{color:"#FAF9F0"}}>{props.para4}</p>
<p style={{color:"#FAF9F0"}}>{props.para5}</p>
   
    <div className="mt-28" >
<button style={{borderRadius: "4px",
border: "2px solid #1DCED8",
background: "#000249",color:"#1DCED8",lineHeight: "128.7%",padding: "19px 26px"}}> {props.button1}</button>
</div>


</div>

 </div>  






 
   
   </>
  )
}

export default FeaturePropsOne