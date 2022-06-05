import axios from "axios"

let baseURL= "http://localhost:3000/"

export const trelloNode = axios.create({
    baseURL : baseURL,
    headers : {
        "Content-type" : "application/json"
    }
})