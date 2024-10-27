import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox" 
import { useState } from "react"
export default function WeatherApp(){
     let[weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feels_like:41.24,
        humidity:17,
        pressure:1000,
        temp:42.05,
        temp_max:42.05,
        temp_min:42.05,
        weather: "dust"
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
return (
    <div>
        <h2 style={{color:"black"}}>Weather App by Anas</h2>
<SearchBox updateInfo={updateInfo} />
<br /><br />
<InfoBox info={weatherInfo}/>

    </div>
)
}