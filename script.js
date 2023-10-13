const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9df495f1amsh20a5dca93f1e4b5p198656jsnc70997b3480d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const inputweather= (city) =>
{ 
	cityname.innerHTML = city;
 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		max_temp.innerHTML = response.max_temp
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML =  response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		wind2_speed.innerHTML = response.wind_speed


	}).catch(err => console.error(err));
}

submit.addEventListener("click", (l) =>{ 

  l.preventDefault(); // it prevents reloading of page when new value is searched/entered.
  inputweather(city.value)

})

inputweather("Kolkata")

