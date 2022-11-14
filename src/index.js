//1 and 2
let weather ={
    temp:20,
    humidity:90
};
console.log(weather);

//3
console.log(weather.temp);
console.log(weather.humidity);

//4
weather.windSpeed = 3.4;
console.log(weather.windSpeed);

//5
console.log(weather["windSpeed"]);
console.log(weather["temp"]);
console.log(weather["humidity"]);

//6
let forecast = [
    {
      day: "Monday",
      temp: 20
    },
    {
      day: "Tuesday",
      temp: 22
    },
    {
      day: "Wednesday",
      temp: 21
    },
    {
      day: "Thursday",
      temp: 19
    },
    {
      day: "Friday",
      temp: 20
    }
  ];
  console.log(forecast);