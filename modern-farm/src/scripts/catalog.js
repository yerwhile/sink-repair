export const catalog = (harvestedArr) => {
    let htmlString = "";
    for(const foodObj of harvestedArr) {
        htmlString += `<section class="plant">${foodObj.type}</section>`;
    }
    console.log(htmlString);
    return htmlString;
}