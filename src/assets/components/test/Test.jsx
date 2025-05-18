import React, { useState } from 'react'

const Test = () => {


const [user, setUser] = useState("Alamgir Sarder");


const change = ()=>{
    setUser(<ul><li>Sameer</li></ul>)
}


  return (
    <div>

            <h1>{user}</h1>
            <button onClick={change}>Change</button>

    </div>
  )
}

export default Test