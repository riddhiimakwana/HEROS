const access_token = "2480561542077684";

const api_url = "https://superheroapi.com/api/"+access_token;

driver();

async function driver(){
    const id = extractId();
    const data = await getInfo(id);
    renderPage(data);
}

// Handling the click events


//Extracting ID from url
function extractId(){
    const url = location.search;
    return url.substring(url.indexOf('=')+1);
}

// Function to call the API
async function getInfo(id){
    let response = await fetch(api_url+id);
    if(response.ok){
        var jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    }
    else{
        alert("HTTP-Error: ",response.status);
    }
}


function renderPage(data){
    document.getElementById('data-container').name = data.id;

    // Setting image of the hero
  var image = document.getElementById('image');
   image.firstElementChild.src = `${data.image.url}`;

    // Setting the fav icon
    var favs = JSON.parse(localStorage.getItem('superheroFavs'));
    if(favs.indexOf(data.id) != -1){
        image.lastElementChild.src = favTrue;
    }
    else{
        image.lastElementChild.src = favFalse;
    }


    // Powerstats
    var combat = document.getElementsByClassName('combat');
    combat[0].innerHTML = `${data.powerstats.combat}`;
    combat[0].style = `width: ${data.powerstats.combat}%;`;
    renderPage(data);

    var durability = document.getElementsByClassName('durability');
    durability[0].innerHTML = `${data.powerstats.durability}`;
    durability[0].style = `width: ${data.powerstats.durability}%;`;

    var intelligence = document.getElementsByClassName('intelligence');
    intelligence[0].innerHTML = `${data.powerstats.intelligence}`;
    intelligence[0].style = `width: ${data.powerstats.intelligence}%;`;

    var power = document.getElementsByClassName('power');
    power[0].innerHTML = `${data.powerstats.power}`;
    power[0].style = `width: ${data.powerstats.power}%;`;

    var speed = document.getElementsByClassName('speed');
    speed[0].innerHTML = `${data.powerstats.speed}`;
    speed[0].style = `width: ${data.powerstats.speed}%;`;

    var strength = document.getElementsByClassName('strength');
    strength[0].innerHTML = `${data.powerstats.strength}`;
    strength[0].style = `width: ${data.powerstats.strength}%;`;

    // Appearance
    document.getElementById('appearance').innerHTML = makePresentable(data.appearance);
    // Biography
    document.getElementById('biography').innerHTML = makePresentable(data.biography);
    // Occupation
    document.getElementById('occupation').innerHTML = makePresentable(data.work);
    // Connections
    document.getElementById('connections').innerHTML = makePresentable(data.connections);
}

// Converting JSON objects to paragraph
function makePresentable(jsonData){
    var str='';
    for (var key in jsonData){
        str +=
            '<p><b>'+key.charAt(0).toUpperCase()+key.slice(1) +'</b> : '+ jsonData[key]+ '</p>';
    }
    return str;
}

// For changing visibility of alert box
function customAlert(type, message){
    var element = document.getElementsByClassName(type);
    element[0].innerHTML = message;
    element[0].style.visibility = "visible"
    setTimeout(() => {
        element[0].style.visibility = "hidden";
    }, 1500);
}

