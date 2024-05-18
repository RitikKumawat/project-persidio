import toast from "react-hot-toast";
import { apiconnector } from "../apiconnector";
import { propertyEndpoints } from "../apis";


const {ADD_PROPERTY,DELETE_PROPERTY,GET_PROPERTY,MY_PROPERTIES} = propertyEndpoints;

export function addProperty(title,
    description,
    price,
    location,
    area,
    bedrooms,
    bathrooms,
    nearbyHospitals,
    nearbyColleges,token){
        return async(dispatch)=>{
            try {
                const response = await apiconnector("POST",ADD_PROPERTY,{
                    title,
                    description,
                    price,
                    location,
                    area,
                    bedrooms,
                    bathrooms,
                    nearbyHospitals,
                    nearbyColleges,
                },{"Content-Type":"application/json","x-auth-token":`${token}`})
                console.log("RESPONSE",response)l

            } catch (error) {
              console.log("error ",error);
              toast.error(error.message);  
            }
        }
    }

