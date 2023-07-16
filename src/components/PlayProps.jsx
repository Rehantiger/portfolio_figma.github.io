import React from 'react'

const PlayProps = (props) => {
    return (
        <>
     
     
        <div>
        <h1  className="mt-24 flex flex-wrap justify-center" style={{color:"#F6490D",fontWeight: "700",fontSize:"36px"}}>{props.name}</h1>
        </div>
     
     
     
     <div className='flex justify-center  flex-wrap mt-5   '>

       <div className=' p-2 '>
     <img className="aspect-square"   src={props.imgsrc1} width="397px"   alt="" /> 
     </div>

     <div className=' p-2 '>
     <img className="aspect-square"   src={props.imgsrc2} width="397px"   alt="" /> 
     </div>

     <div className=' p-2 '>
     <img className="aspect-square"   src={props.imgsrc3} width="397px"   alt="" /> 
     </div>

     </div>


     <div className='flex justify-center  flex-wrap    '>

<div className=' p-2 '>
<img className="aspect-square"   src={props.imgsrc4} width="397px"   alt="" /> 
</div>

<div className=' p-2 '>
<img className="aspect-square"   src={props.imgsrc5} width="397px"   alt="" /> 
</div>

<div className=' p-2 '>
<img className="aspect-square"   src={props.imgsrc6} width="397px"   alt="" /> 
</div>

</div>


<div className='flex justify-center  flex-wrap   '>

<div className=' p-2 '>
<img className="aspect-square"   src={props.imgsrc7} width="397px"   alt="" /> 
</div>

<div className=' p-2 '>
<img className="aspect-square"   src={props.imgsrc8} width="397px"   alt="" /> 
</div>

<div className=' p-2 '>
<img className="aspect-square"   src={props.imgsrc9} width="397px"   alt="" /> 
</div>

</div>
<div className='ml-16'>
<img className="aspect-square"   src={props.imgsrc10} width="397px"   alt="" /> 
</div>

     
      
     
     
     
     
     
     
        </>
       )
     }

export default PlayProps