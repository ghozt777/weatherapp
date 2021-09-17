import { useState, useEffect } from "react";
import { Buttons } from "./Buttons";
import { Location } from "./Location";

export const Handler = ({ setWeatherData , setUnits}) => {
  const [loginCredentials, setLoginCredentials] = useState({
    location: "New York",
    units: "metric",
    apiKey: String(process.env.REACT_APP_APIKEY)
  });
  const apiK = loginCredentials.apiKey;
  const local = loginCredentials.location;
  const unit = loginCredentials.units;

  
  useEffect(() => {
    (async() => {
        if(apiK!==''){
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${local}&units=${unit}&appid=${apiK}`;
         const response = await fetch(url);
         const data = await response.json();
         if(data.cod===200){
         const date_sunrise = new Date(data.sys.sunrise * 1000);
         const date_sunset = new Date(data.sys.sunset * 1000);
     
         await setWeatherData((oldData) => {
           return {
             ...oldData,
             ...data,
             str_sunrise: date_sunrise.toLocaleString("en-US"),
             str_sunset: date_sunset.toLocaleString("en-US"),
             apikStatus:'success'
           };
         });}
         
         else if(data.cod===401){
           setWeatherData((oldData) =>{
             return{
               ...oldData,
               ...data,
               apikStatus:'auth_err'
             }
           })
         }
         
         
         
         else{
           setWeatherData((oldData) =>{
             return{
               ...oldData,
               ...data
             }
           })
         }
          switch(unit)
         {
           case 'metric':
             setUnits((oldData) => {
               return{
                 ...oldData,
                 temperature: '℃',
                 speed: 'm/s',
               }
             })
             break
           case 'standard':
             setUnits((oldData) => {
               return{
                 ...oldData,
                 temperature: 'K',
                 speed: 'm/s',
               }
             })
             break
           case 'imperial':
             setUnits((oldData) => {
               return{
                 ...oldData,
                 temperature: '℉',
                 speed: 'mph',
               }
             })
             break
             default:
               break
     
         }}
    })()
  }, [loginCredentials.location, loginCredentials.units,loginCredentials.apiKey,apiK,local,setUnits,setWeatherData,unit]);

  return (
    <>
      <Location setLogin={setLoginCredentials} />
      <Buttons setButton={setLoginCredentials} />
    </>
  );
};
