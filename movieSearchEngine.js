var movieNameElement = document.getElementById("movie-name");
var SearchBtn = document.getElementById("button-addon2");
let movieContainer = document.getElementById("movie-container");
var movieStatusElement=document.getElementById("movie-status");
var loadingSpinner = document.getElementById("loading-spinner");

SearchBtn.addEventListener("click", function(){
    movieContainer.innerHTML=" ";
    //movieStatusElement.innerHTML=" ";

    loadingSpinner.style.display = 'inline-block'; // Show the spinner

    let movieName=movieNameElement.value;
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){

            loadingSpinner.style.display = 'none'; // Hide the spinner

            let result= JSON.parse(this.responseText);
            if(result.Response == "True"){
            result.Search.map((item,i)=>{
              movieContainer.innerHTML +=
              `<div class="card" style="width: 16rem;">
              <img src= ${item.Poster} class="card-img-top movie-thumbnail" alt="Image" />
              <div class="card-body">
              <div class="card-body">
                <p class="card-text"><b>Title: </b>${item.Title} </p>
                <p class="card-text"><b>Year: </b> ${item.Year}</p>
                <p class="card-text"><b>Type: </b> ${item.Type}</p>
              </div>
              </div>`
            
            })
        } 
        else if(result.Response == "False"){
            movieStatusElement.innerText = "404 Movies Not Found!";
        }
    }
    }
    xhttp.open("GET", `https://www.omdbapi.com/?apikey=45f0782a&s=${movieName}`, true);
    xhttp.send();
})