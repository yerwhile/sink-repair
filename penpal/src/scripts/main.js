import { PenPal } from "./PenPal.js"
import {fetchAuthors, fetchRequests} from "./dataAccess.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchAuthors())
        .then(
            () => {
                mainContainer.innerHTML = PenPal()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)