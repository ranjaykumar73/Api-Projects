
  //     let APIkey = "c0ea8759"
  //    let url = `http://www.omdbapi.com/?s=${name}&APIkey=c0ea8759`
  //let movie_div = document.getElementById('card')
  //    http://www.omdbapi.com/?i=tt3896198&apikey=c0ea8759
    
  async function searchMovies() {
    let name = document.getElementById("searchBar").value;
    let response = await fetch(
      `http://www.omdbapi.com/?s=${name}&apikey=c0ea8759`
    );
    let data = await response.json();
    //console.log(data);
    return data.Search;
  }
   let mainDiv=document.getElementById('card')

  async function showMovies() {
    mainDiv.innerHTML = null;
    let showData = await searchMovies();
    console.log(showData);

    showData.map(function (movie) {
      let poster = document.createElement("div");
      let img = document.createElement("img");
      img.src = movie.Poster;
      
      let tiltle = document.createElement("p");
      tiltle.innerHTML = movie.Title;

      poster.append(img, tiltle);
      mainDiv.append(poster);
    });
    // console.log(showData)
  }

  function firstdiv(){

  }
  firstdiv()