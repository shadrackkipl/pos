import React from 'react'
import './MiniCard.css'

const MiniCard = ({ title, icon, number, footerNum, variant = 'green' }) => {
  return (
    <div className={`mini-card mini-card--${variant}`}>
      <div className='mini-card-header'>
        <h3 className='mini-card-title'>{title}</h3>
        <span className={`mini-card-icon mini-card-icon--${variant}`}>{icon}</span>
      </div>

      <div className='mini-card-body'>
        <h4 className='mini-card-number'>{number}</h4>
        <p className='mini-card-footer'>
          <span className={`mini-card-trend mini-card-trend--${variant}`}>
            <span className='trend-arrow'>↗</span>
            {footerNum}%
          </span>
          {' '}than yesterday
        </p>
      </div>
    </div>
  )
}

export default MiniCard