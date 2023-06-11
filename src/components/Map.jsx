import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from "./LocationMarker";
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    
    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                { markers }
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} onClose={() => {
                setLocationInfo(null)
            }}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 32.4279,
        lng: 53.6880
    },
    zoom: 4
}

export default Map