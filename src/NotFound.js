import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>NotFound</h2>
            <p>Sorry, The Page Can Not Be Found</p>
            <Link to="/">Back To The Home Page ...</Link>
        </div>
     );
}
 
export default NotFound;