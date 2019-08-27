import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/registration">Registration form</Link>
      </li>
    </ul>
  )
}

export default Home