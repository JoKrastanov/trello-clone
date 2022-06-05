import React from 'react'
import "../stylesheets/CardSettingsPopup.css"

function CardSettingsPopup(props) {
  return (
    <div className='card-settings-popup' onClick={props.togglePopup}>
        <div className='popup-form'>
            <button className='cancel-button popup-x-button' onClick={props.togglePopup}>X</button>
        </div>
    </div>
  )
}

export default CardSettingsPopup