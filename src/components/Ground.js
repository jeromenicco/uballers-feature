import React, { useContext } from 'react'
import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

import groundsData from './dataContext'

import './Ground.css'

const Ground = () => {
  useContext(groundsData)
  const { id } = useParams()
  const [ground, setGround] = useState({})
  const [addToFav, setAddToFav] = useState(false)

  const handleFavorite = () => {
    setAddToFav(!addToFav)
  }

  useEffect(() => {
    const dataToArr = Object.values(groundsData)
    const grounds = dataToArr[3]
    const data = Object.values(grounds).filter(ground => ground.groundId === id)[0]
    setGround(data)

  }, [groundsData])

  return (
    <div className='ground-container fade-in'>
          <div className='wrapper1 wrapper'>
            <h1>{ground.groundName}</h1>
          </div>
          <div className='wrapper2 wrapper'>
            <h2>Location</h2>
            <p>{ground.address}</p>
          </div>
          <div className='wrapper3 wrapper'>
            <h2>Ground details</h2>
            <p>{ground.limit}</p>
            <p>{ground.basketNumber}</p>
            <p>{ground.transport}</p>
          </div>
            <input 
              className={!addToFav ? 'add' : 'is-added'}
              type='button'
              value={!addToFav ? 'Add to favorite' : `${ground.groundName} is added to your favorites`}
              onClick={handleFavorite}
            />
            <Link to='/'>
              <input 
                className='back-to-grounds'
                type='button'
                value='Back to Grounds'
              />
            </Link>
    </div>
  )
}

export default Ground
