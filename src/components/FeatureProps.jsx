import React from 'react'

const FeatureProps = (props) => {
  return (
   <>


   <div>
   <h1  className="mt-24 flex flex-wrap justify-center" style={{color:"#F6490D",fontWeight: "700",fontSize:"36px"}}>{props.name}</h1>
   </div>



<div style={{flexDirection:props.isRowReverse ? "row-reverse " : "row"}} className='flex flex-wrap  ml-60 justify-center mt-10   '>
  <div className='mr-24  '>
<img className="aspect-square" style={{display:"flex",}}  src={props.imgsrc} width="500px"   alt="" /> 
</div>

<div className='flex flex-col flex-wrap flex-grow w-96 '>
   <h3 className="text-2xl" style={{color:"#FAF9F0",fontWeight: "600px"}}>{props.heading1}</h3>

<h3 className="text-2xl"  style={{color:"#FAF9F0", width:"562px",fontWeight: "600"}}>{props.heading2}</h3>

<p className='' style={{color:"#FAF9F0"}}>{props.para1}</p>
<p style={{color:"#FAF9F0"}}>{props.para2}</p>
   
    <ul className=' mt-5 ml-3 list-disc   '>
        <li className="" style={{color:"#FAF9F0"}} >{props.list1}</li>
        <li style={{color:"#FAF9F0"}}>{props.list2}</li>
        <li style={{color:"#FAF9F0"}}>{props.list3}</li>
    </ul> 

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

export default FeatureProps