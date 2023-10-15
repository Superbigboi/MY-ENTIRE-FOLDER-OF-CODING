// let text = '{"employees":['
//     +'{"firstName":"John", "lastName":"Doe"},'
//     +'{"firstName":"Anna", "lastName":"Smith"},'
//     +'{"firstName":"Peter", "lastName":"Jones"}]}'

//  const staff = JSON.parse(text);
//  console.log(staff.employees[0].lastName)

 let API_KEY = "5c153425fc7a9cc8dc8d0a56a667c50c";

 const getWeatherData = (city) =>{
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const Full_URL = `${url}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherpromise = fetch(Full_URL);
    return weatherpromise.then((response) =>{
        return response.JSON();
    })
 }

 const searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city).then((res)=>{
        showWeatherData(res);
    }).catch((error)=>{
        console.log(error);
        console.log('something when wrong');
    })
 }
