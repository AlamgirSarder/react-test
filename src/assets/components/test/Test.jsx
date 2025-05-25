import React, { useState } from 'react'

const Test = () => {

    const [show,setShow] = useState(false);


      function actives(){
        setShow(!show)
      }

  return (
    <div>

      <button onClick={actives} className='bg-red-500 px-4 py-5 rounded-[10px] ml-[50px]'>Click Me</button>


            {
              show && (
                <div className='border inline-block ml-[40px]'>
                  <h1>Welcome to Bangladesh</h1>
                </div>
              )
            }


    </div>
  )
}

export default Test