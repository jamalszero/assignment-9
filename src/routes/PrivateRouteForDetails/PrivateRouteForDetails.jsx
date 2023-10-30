
import { Navigate } from "react-router-dom";

const PrivateRouteForDetails = ({children}) => {
    const user = true;
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;

    
};

export default PrivateRouteForDetails;