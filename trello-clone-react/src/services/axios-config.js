import axios from "axios"

let baseUrl = "http://localhost:3000"

export const trelloNode = axios.create({
    url : baseUrl,
    headers : {
        "Content-type" : "application/json"
    }
})