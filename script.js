async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const result = document.getElementById("result");

  if (city === "") {
    result.innerText = "Please enter a city name";
    return;
  }

  const apiKey = "5fecae0229d28591e363e24fafb2551e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      result.innerText = "City not found or API error";
      return;
    }

    const data = await response.json();

    result.innerText =
      `City: ${data.name}\nTemperature: ${data.main.temp} °C\nWeather: ${data.weather[0].description}`;
  } catch (error) {
    console.error(error);
    result.innerText = "Error fetching weather data";
  }
}
