import React from 'react'
import PlayProps from './PlayProps';
import PData from '../constant/PData';

const PlayGround = () => {
    return(

        <div className='flex-wrap'>
        
            {PData.map((item,id) => {
           
        return (
        
          <PlayProps    key={id} 
          name={item.name}
          imgsrc1={item.imgsrc1}
          imgsrc2={item.imgsrc2}
          imgsrc3={item.imgsrc3}
          imgsrc4={item.imgsrc4}
          imgsrc5={item.imgsrc5}
          imgsrc6={item.imgsrc6}
          imgsrc7={item.imgsrc7}
          imgsrc8={item.imgsrc8}
          imgsrc9={item.imgsrc9}
          imgsrc10={item.imgsrc10}
          
           />
        
        
        
        );
        
        
          })}
        
        
        
        </div>
         )
          
          
        }
    
    
    

export default PlayGround