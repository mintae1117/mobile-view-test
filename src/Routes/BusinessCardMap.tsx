import {useLocation} from "react-router";

function BusinessCardMap() {
    const location = useLocation();
    const {latitude, longitude} = location.state;

    return(
        <div>
            <h2>Map</h2>
            <p>latitude : {latitude}</p>
            <p>longitude : {longitude}</p>
        </div>
    );
}

export default BusinessCardMap;