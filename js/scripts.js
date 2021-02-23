console.log("Logged in");


const apiData = {
    url: "https://temtem-api.mael.tech/api/",
    type: "temtems",
    id: "113",
}
const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`


fetch(apiUrl)
    .then( (data) =>  (data.json()))
    .then( (temtem) => editHtml(temtem) )


const editHtml = (data) => {
    console.log(data)
    const html = `
        <div class= "name">${data.name}</div>
        <img src=${data.portraitWikiUrl}>
        <div class = "details">
            <span>Height: ${data.details.height.inches}</span>
            <span>Weight: ${data.details.weight.lbs}</span>
        </div>    
    `

    const temtemDiv = document.querySelector('.temtem')
    temtemDiv.innerHTML = html

}    





