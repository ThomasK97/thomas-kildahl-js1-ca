//Her er fetchen for details siden    

function fetchData(){
  fetch("https://temtem-api.mael.tech/api/temtems")
    .then(Response =>{
      return Response.json();
    })
    .then(data => {
      console.log(data);
      const html = data.map(temtems =>{
        return `
        <div class="temtems">
          <p><img src="${temtems.portraitWikiUrl}" alt="${temtems.name}"/></p>
          <p> Name: ${temtems.name}</p>
          <p> Number: ${temtems.number}</p>
          <p> Type: ${temtems.types}</p>

        </div>
        `;  
      })
      .join("");
      console.log(html);
      document.querySelector("#allTems").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
      console.log(error);  
    });  
}

fetchData();



//Her er fetchen for index siden


function fetchData2(){
    fetch("https://temtem-api.mael.tech/api/temtems")
      .then(Response =>{
        return Response.json();
      })
      .then(data => {
        console.log(data);
        const html = data.map(temtems =>{
          return `
          <div class="temtems">
            
            <p> Name: ${temtems.name}</p>
            <p> Number: ${temtems.number}</p>
    
  
          </div>
          `;  
        })
        .join("");
        console.log(html);
        document.querySelector("#allTemsName").insertAdjacentHTML("afterbegin", html);
      })
      .catch(error => {
        console.log(error);  
      });  
  }
  
  fetchData2();