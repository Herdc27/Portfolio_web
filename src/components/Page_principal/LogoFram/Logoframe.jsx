import React from 'react'
import './LogoFrame.css'

const Logoframe = ({src, alt}) => {
  return (
    <div className='logoframe'>
        <img className='logo-img' src={src} alt={alt} />
    </div>
  )
}

export default Logoframe
