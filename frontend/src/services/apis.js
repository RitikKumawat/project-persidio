const BASE_URL = "https://localhost:4000/api"

export  const authEndpoints={
    SIGNUP_API: BASE_URL + "/users/register",
    LOGIN_API: BASE_URL + "/users/login"
}

export const propertyEndpoints={
    ADD_PROPERTY: BASE_URL + "/properties/",
    DELETE_PROPERTY: BASE_URL + "/properties/:id",
    GET_PROPERTY: BASE_URL + "/properties/",
    MY_PROPERTIES:BASE_URL + "/properties/my-properties"
}