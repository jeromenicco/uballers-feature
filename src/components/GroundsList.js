import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import groundsData from './dataContext'

import './GroundsList.css'

const GroundsList = () => {
  useContext(groundsData)

  const dataToArr = Object.values(groundsData)
  const grounds = dataToArr[3]
  const data = Object.values(grounds)
  console.log(data);

  return (
    <div className='grounds-list-container fade-in'>
      <h1>Grounds list</h1>
      {data.map((ground) => 
        <Link to={{ pathname: `/grounds/${ground.groundId}`}}>
          <p className='ground-names'>{ground.groundName}</p>
        </Link>)}
    </div>
  )
}

export default GroundsList
