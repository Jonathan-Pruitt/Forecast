import { useEffect, useState } from "react";

// USE THIS API TO FIND GEOLOCATION

// EXAMPLE
// https://nominatim.openstreetmap.org/search.php?q=8610+kihnu&format=jsonv2

// FORM
// https://nominatim.openstreetmap.org/search?{{params}}

function GeoSearch() {
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    useEffect(deriveLocation, [refreshTrigger])

    function deriveLocation() {
        console.log('spotted')
    }

    function findLocation() {
        setRefreshTrigger(prev => prev +1)
    }

    return (
        <div>
            <button onClick={findLocation}>Click ME!</button>
        </div>
    )
}

export default GeoSearch;