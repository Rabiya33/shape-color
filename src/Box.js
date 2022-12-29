import React from 'react';




      const Box = ({ type= 'square', color = 'Red' }) =>{
        return(
          <div 
          style={{
            width:"100px",
            height:"100px",
            margin:"20px",
            backgroundColor:color,
            borderRadius:type,

          }}>

          </div>
        )

      } 
      
      
      /*(
        <div>{type} {color}</div>
      )  */  








export default Box;

