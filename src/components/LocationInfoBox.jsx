import { Icon } from '@iconify/react'

const LocationInfoBox = ({ info, onClose }) => {
    return (
        <div className="location-info" >
            <div className='location-info-header'>
                <h2>Event Location Info</h2>
                <Icon icon="eva:close-fill" className="clock-time-two-outline" onClick={onClose} />
            </div>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
