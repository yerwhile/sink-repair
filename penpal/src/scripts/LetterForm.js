import { sendRequest, getAuthors } from "./dataAccess.js";

export const LetterForm = () => {
    const authors = getAuthors();
    
    let html = `
    <div class="field">
        <label class="label" for="letterAuthor">Author</label>
        <select name="letterAuthor" id="authors__dropdown">
            <option value="">Choose Author</option>
            ${authors.map(
                author => {
                    return `<option name="author_option" value="${author.id}">${author.name} ${author.email}</option>`
                }
            ).join("")}
        </select>
    </div>
    <div class ="field">
        <label class="label" for="letterBody">Letter</label>
        <input type="text" name="letterBody" />
    </div>
    <div class="field" id="topics_field">
            <label class="label" for="letterTopic">Topics</label>
        <div id="topics_options">
                <input type="checkbox" id="topic1" name="topic1" value="Business">
                <label for="topic1"> Business</label>
                <input type="checkbox" id="topic2" name="topic2" value="Friendly">
                <label for="topic2"> Friendly</label>
                <input type="checkbox" id="topic3" name="topic3" value="Family">
                <label for="topic3"> Family</label>
                <input type="checkbox" id="topic4" name="topic4" value="Congratulations">
                <label for="topic4"> Congratulations</label>
                <input type="checkbox" id="topic5" name="topic5" value="Condolences">
                <label for="topic5"> Condolences</label>
        </div>
    </div>
    <div class="field">
        <label class="label" for="letterRecipient">Recipient</label>
        <select name="letterRecipient" id="recipients__dropdown">
            <option value="">Choose Topic</option>
            ${authors.map(
                author => {
                    return `<option name="${author.name}" value="${author.id}">${author.name} ${author.email}</option>`
                }
            ).join("")}
        </select>

    <button class="button" id="submitRequest">Submit Request</button>`
    return html;
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const letterAuthor = document.getElementById('authors__dropdown').value
        const letterBody = document.querySelector("input[name='letterBody']").value
        //const letterTopic = document.querySelector("input[name='topic_option']").value
        const letterRecipient = document.getElementById('recipients__dropdown').value

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: letterAuthor,
            letter: letterBody,
            //topic: letterTopic,
            recipient: letterRecipient,
            date: Date()
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI);
    }
})

