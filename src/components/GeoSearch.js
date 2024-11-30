import { useEffect, useState } from "react";
import '../resources/geo.css';

// USE THIS API TO FIND GEOLOCATION

// EXAMPLE
// https://nominatim.openstreetmap.org/search.php?q=8610+kihnu&format=jsonv2

// FORM
// https://nominatim.openstreetmap.org/search?{{params}}

function GeoSearch(props) {
    const [refreshTrigger, setRefreshTrigger] = useState(0)
    const [formData, setFormData] = useState({location : ""})

    console.log(formData)

    function handleChange(e) {
        const {name, value} = e.target
        setFormData({[name] : value})
    }

    useEffect(deriveLocation, [refreshTrigger])

    function deriveLocation() {
        if (formData.location === "") {return}
        /// INPUT DATA FORMATTING AND API CALL
        let location = formData.location.replace(" ", "+")
        console.log(location)

        /// REMOVE ALL VALUES FROM THE FORM
    }

    function findLocation(e) {
        e.preventDefault()
        setRefreshTrigger(prev => prev +1)
    }

    return (
        <div className="fullscreen row justify-content-center">
            <div className="pop-up-box row">
                <div className="col-12">
                    <h3 className="text-center txt-underline font-weight-bold">Search</h3>
                </div>
                <form className="col-12" onSubmit={findLocation}>
                    <div className="form-group">
                        <label htmlFor="location">Search Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" placeholder="Enter Location" />
                        <small className="form-text text-muted">Enter a street address, city, or zip code.</small>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GeoSearch;