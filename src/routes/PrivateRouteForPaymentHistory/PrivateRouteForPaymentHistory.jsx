import { Navigate } from "react-router-dom";


const PrivateRouteForPaymentHistory = ({children}) => {

    const user = true;
    if(user){
return children;
    }

    return <Navigate to="/login"></Navigate>

    
};

export default PrivateRouteForPaymentHistory;