import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setcity] = useState("");
    let [error, seterror] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "75441cd70d4efb01a15009891528ed75";
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: jsonResponse.name,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                weather: jsonResponse.weather[0].description
            }
console.log(result.city);
            return result;

        } catch (err) {
            throw err;
        }
    };
    let styles = { color: "black" };

    let handleInput = (event) => {

        setcity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();

            setcity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            seterror(false);
        }
        catch {
            seterror(true);
        }


    }
    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleInput}
                />
                <br></br> <br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists</p>}

                <br />

            </form>
        </div>
    )
}
