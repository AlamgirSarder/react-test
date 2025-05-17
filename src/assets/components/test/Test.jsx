
import React, { useEffect } from 'react'





function Test(){

  
    return(
        <>
                {
                    [1,2,3,4,5,6].map((item,index)=>(
                        <h1 key={index}>
                            {item}
                        </h1>
                    ))
                }
        </>
    )
}


export default Test;