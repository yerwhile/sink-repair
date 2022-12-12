import { mainContainer } from './main.js';

const applicationState = {
    requests: [],
    authors: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (letterRequests) => {
                applicationState.requests = letterRequests
            }
        )
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}