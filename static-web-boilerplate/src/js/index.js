// require('../../node_modules/mdbootstrap/css/bootstrap.min.css');
// require('../../node_modules/mdbootstrap/css/mdb.min.css')
// require("./style.css");

const topRated = document.getElementById("top");
const url = "https://developers.zomato.com/api/v2.1/collections?city_id=280&count=5";
let myheaders = {
"user-key": "6735af4836826fc3fd3ac0aa8a760fdd "
}
console.log("Hello just outside func");
getTopPicks();
function getTopPicks() {
    console.log("Hello just inside func");
  fetch(url,{
  method: 'GET',
  headers: myheaders
  })
  .then((resp) => resp.json())
  .then(function(data){
    let restos = data.collections; // Get the results
  return restos.map(function(collection) { // Map through the results and for each run the code below
    console.log("Hello");
   var div = document.createElement("div"), // Create the elements we need
    img = document.createElement('img'),
   cardBody = document.createElement('div'),
   h5 = document.createElement('h5'),
   p = document.createElement('p');
   var a = document.createElement('a');
  div.className = "collection card";
  img.className = "card-img-top";
  cardBody.className = "card-body d-flex flex-column";
  h5.className = "card-title";
  p.className = "card-text";
  a.className = "btn btn-indigo mt-auto";
  img.src = collection.collection.image_url; // Add the source of the image to be the src of the img element
  h5.innerHTML = `${collection.collection.title}` ;
  p.innerHTML = `${collection.collection.description}`;
  a.textContent = "Add" // Make the HTML of our span to be the first and last name of our author
  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  cardBody.appendChild(a);
  div.appendChild(img);
  div.appendChild(cardBody);
  topRated.appendChild(div);
  })
  })
}


window.search = function(){
  let searchHeaders = {
  "user-key": "291c16dfc1f62b9c11fee14ca67ad025"
  }
    const form = document.getElementById('searchForm');
      const searchItem = document.getElementById("search_item");
      console.log(searchItem);
      $( "#search_item" ).empty();
      const url1 = "https://developers.zomato.com/api/v2.1/search?q="+form.value;
      fetch(url1,{
      method: 'GET',
      headers: searchHeaders
      })
      .then((resp) => resp.json())
      .then(function(data){
        let restos = data.restaurants; // Get the results
        console.log(restos);
      return restos.map(function(restaurants) { // Map through the results and for each run the code below
       var div = document.createElement("div");
       var div1 = document.createElement('div');
       // Create the elements we need
        var img = document.createElement('img');
       var cardBody = document.createElement('div');
      var h5 = document.createElement('h5');
       var p = document.createElement('p');
       var a = document.createElement('a');

      div.className = "col-lg-3 col-md-6 mb-5";
      div1.className = "card  h-100 restaurants";

      // div.className = "search card";
      img.className = "card-img-top";
      cardBody.className = "card-body d-flex flex-column";
      h5.className = "card-title";
      p.className = "card-text";
      a.className = "btn btn-indigo mt-auto";
      img.src = restaurants.restaurant.featured_image; // Add the source of the image to be the src of the img element
      h5.innerHTML = `${restaurants.restaurant.name}` ;
      p.innerHTML = `${restaurants.restaurant.cuisines}`;
      a.textContent = "ADD" // Make the HTML of our span to be the first and last name of our author
      cardBody.appendChild(img);
      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(a);

      div1.appendChild(cardBody);
      div.appendChild(div1);
      searchItem.appendChild(div);
      })
    })
  }


  const myCollection = document.getElementById("topCollection");
  //const view = document.getElementById('viewButton')
  const url2 = "https://developers.zomato.com/api/v2.1/collections?city_id=280&count=4";
  let collHeader = {
  "user-key": "291c16dfc1f62b9c11fee14ca67ad025"
  }
  fetch(url2,{
  method: 'GET',
  headers: collHeader
  })
  .then((resp) => resp.json())
  .then(function(data){
    let restos = data.collections; // Get the results
    console.log(restos);
  return restos.map(function(collection) { // Map through the results and for each run the code below
   var div = document.createElement('div');
   var div1 = document.createElement('div');
   // Create the elements we need
   var img = document.createElement('img');
  var cardBody = document.createElement('div');
   var h5 = document.createElement('h5');
   var p = document.createElement('p');
   var button1 = document.createElement('button');
   var button2 = document.createElement('button');
  // button1 = document.getElementById('viewButton')
  //button = button2.appendChild(button1);
  //button.type = "button";


  div.className = "col-lg-3 col-md-6 mb-5";
  div1.className = "card  h-100 restaurants";

  // div.className = "search card";
  img.className = "card-img-top";
  cardBody.className = "card-body d-flex flex-column";
  h5.className = "card-title";
  p.className = "card-text";
  button1.className = "btn btn-indigo mt-auto";
  button2.className = "btn btn-indigo mt-auto"
  // button.data-toggle = "modal";
  // button.data-target = "#centralModalFluid"
  img.src = collection.collection.image_url; // Add the source of the image to be the src of the img element
  h5.innerHTML = `${collection.collection.title}` ;
  p.innerHTML = `${collection.collection.description}`;
  button1.textContent = "View All" // Make the HTML of our span to be the first and last name of our author
  button2.textContent = "Delete"
  cardBody.appendChild(img);
  cardBody.appendChild(h5);
  cardBody.appendChild(p);
  cardBody.appendChild(button1);
  cardBody.appendChild(button2);

  div1.appendChild(cardBody);
  div.appendChild(div1);
  myCollection.appendChild(div);
  })
})
