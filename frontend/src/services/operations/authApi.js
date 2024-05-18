import toast from "react-hot-toast";
import { apiconnector } from "../apiconnector"
import { authEndpoints } from "../apis"
import { setToken, setUser } from "../../slices/authSlice";


const {SIGNUP_API,LOGIN_API} = authEndpoints;


export function Register(firstName,lastName,email,phoneNo,password,userType,navigate){
    return async(dispatch)=>{
        try {
            const response =  await apiconnector("POST",SIGNUP_API,{
                firstName,
                lastName,
                email,
                phoneNo,
                password,
                userType
            })
            console.log("SIGNUP RESPONSE ",response);
            if(response.error){
                toast.error("Error in signing the user")
            }
            toast.success("Signup successful");
            navigate("/")
        } catch (error) {
            console.log("SIGNUP ERROR",error);
            toast.error("signup failed")
            navigate("/signup");
        }
    }
}


export function login(email,password,navigate){
    return async(dispatch)=>{
        try {
            const response = await apiconnector("POST",LOGIN_API,
                {email,password}
            )
            console.log("RESPONSE LOGIN API",response);
            if(response.error){
                toast.error("Error in login ");

            }
            toast.success("Login success");
            dispatch(setToken(response.data.token));
            localStorage.setItem("token",JSON.stringify(response.data.token));
            localStorage.setItem("user",JSON.stringify(response.data.user));

            dispatch(setUser(response.data.user));
            navigate("/");

        } catch (error) {
            console.log("LOGIN API ERROR",error);
            toast.error("Login failed");
            navigate("/login")
        }
    }
}

export function logout(navigate){
    return async(dispatch)=>{
        try {
            dispatch(setToken(null));
            dispatch(setUser(null));
            navigate("/login");

            localStorage.removeItem("token");
            localStorage.removeItem("user");
            toast.success("Logged Out");
        } catch (error) {
            console.log("error",error);
        }
    }

}