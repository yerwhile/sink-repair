import { getRequests } from "./dataAccess.js"



export const Requests = () => {
    const requests = getRequests()
    const requestToList = (requestObj) => {
        return `
        <div>
            <p>Dear ${requestObj.author}</p>
            <p>${requestObj.letter}</p>
            <p>Sincerely, ${requestObj.recipient}</p>
            <p>Sent on ${requestObj.date}</p>}
            <div class="topic_badge">${requestObj.topic}
        </div>
    `
    }
    let html = `
        <ul>
            ${
                requests.map(requestToList).join("")
            }
        </ul>
    `

    return html
}