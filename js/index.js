var searchInput = document.getElementById("searchInput"); // mask input kolo

searchInput.addEventListener("keyup",function(){
    getWeather(searchInput.value)
}) ;

getWeather("brazil") ;


//-------------------------------- Get Weather API :- ----------------------------------------

async function getWeather(country){
    
    var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=469863d1f6cd40f8bd3223044241401&q=${country}&days=3`);

    var apiData = await apiResponse.json() ;

    displayData(apiData); // htnady 3la el display w tb3tlha l data f paramter
}


function displayData(apiData){

    var wetherInfo = apiData.forecast.forecastday ; // array shayl objects feha tfsyl kol yum mn 3 days
    var cityInfo = apiData.location.name ; // shayl value asm l madina
    var currentDay = apiData.current ; // shayl 7agt l current date lw7do


    var cartona = ""

    for(var i = 0 ; i < wetherInfo.length ; i++){

        var nextDate = new Date (wetherInfo[i].date);
        var nextDayName =  nextDate.toLocaleDateString("en-us",{weekday:"long"});
        var nextMonthDay = nextDate.getDate();
        var nextMonthName = nextDate.toLocaleDateString("en-us",{month:"long"});

        console.log(nextDate);

        cartona += `<div id = "test" class="box col-lg-3 p-0 m-0 mb-3 rounded-4 text-center">

        <div class="bg-body-secondary bg-opacity-50 rounded-top-4 d-flex justify-content-evenly box2 p-2 fw-bold">
            <p>${nextDayName}</p>
            <p>${nextMonthDay} ${nextMonthName}</p>
        </div>

        <div class="fs-3 mt-4 text-bg-dark"><p>${cityInfo.toUpperCase()}</p></div>
        <div class="mb-0"><img src="https:${wetherInfo[i].day.condition.icon}" class="w-25"></div>
        <div class="fs-1 mt-1 fw-bolder"><p>${wetherInfo[i].day.avgtemp_c}°C<p></div>
        <div><p class="fw-bolder fs-4 ">${wetherInfo[i].day.condition.text}</p></div>
        <div class="text-white pb-2">
            <span><img src="images/icon-umberella.png"> ${wetherInfo[i].day.daily_chance_of_rain}%</span>
            <span class="px-2"><img src="images/icon-wind.png"> ${wetherInfo[i].day.maxwind_kph}km/h</span>
            <span><img src="images/icon-compass.png"> ${wetherInfo[i].hour[0].wind_dir}</span>
        </div>
        
        </div>`
    }

    document.getElementById("bigCard").innerHTML = cartona ;

//----------------------------------

    var currentdate = new Date(wetherInfo[0].date);
    var monthDay = currentdate.getDate();
    var monthName = currentdate.toLocaleDateString("en-us",{month:"long"});
    var dayName = currentdate.toLocaleDateString("en-us",{weekday:"long"});

    var adjust1stCard = ` 
    
    <div class="bg-body-secondary bg-opacity-50 rounded-top-4 d-flex justify-content-evenly box2 p-2 fw-bold">
    <p>${dayName}</p>
    <p>${monthDay} ${monthName}</p>
    </div>
    <div class="fs-3 mt-4 text-white main"><p>${cityInfo.toUpperCase()}</p></div>
    <div class="mb-0"><img src="https:${currentDay.condition.icon}" class="w-25"></div>
    <div class="fs-1 mt-1 text-white fw-bolder"><p>${currentDay.temp_c}°C<p></div>
    <div><p class="fw-bolder fs-4 text-white">${currentDay.condition.text}</p></div>
    <div class="text-white fw-bold pb-2">
        <span><img src="images/icon-umberella.png"> ${wetherInfo[0].day.daily_chance_of_rain}%</span>
        <span class="px-2"><img src="images/icon-wind.png"> ${currentDay.wind_kph}km/h</span>
        <span><img src="images/icon-compass.png"> ${currentDay.wind_dir}</span>
    </div>`

    document.getElementById("test").innerHTML = adjust1stCard; // awl wa7d wa5d l ID dah f keda awl div bs f a7na tmm

}

//------------------------------------------------------




