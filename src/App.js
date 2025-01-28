import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import search1 from "./assets/search.png";
import clear from "./assets/clear.png";
import humi from "./assets/hum.png";
import wind1 from "./assets/wind.png";

// Function to get weather icon URL
const getWeatherIcon = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

const WeatherDetail = ({ icon, temp, city, country, lat, log, hum, wind }) => {
    return (
        <>
            <div className="image">
                <img src={icon} alt="Weather Icon" />
            </div>
            <div className="temp">{temp}℃</div>
            <div className="city">{city}</div>
            <div className="country">{country}</div>
            <div className="cord">
                <div>
                    <span>Latitude</span>
                    <span>{lat}</span>
                </div>
                <div>
                    <span>Longitude</span>
                    <span>{log}</span>
                </div>
            </div>
            <div className="data">
                <div className="e1">
                    <img src={humi} alt="Humidity Icon" />
                    <div className="humper">{hum}%</div>
                    <div className="text">Humidity</div>
                </div>
                <div className="e1">
                    <img src={wind1} alt="Wind Icon" />
                    <div className="humper">{wind} km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </>
    );
};

const App = () => {
    const [text, setText] = useState("chennai");
    const [icon, setIcon] = useState(clear);
    const [temp, setTemp] = useState(30);
    const [city, setCity] = useState("Chennai");
    const [country, setCountry] = useState("IN");
    const [lat, setLat] = useState(13.08);
    const [log, setLog] = useState(80.27);
    const [hum, setHum] = useState(70);
    const [wind, setWind] = useState(15);
    const [cnf, setCnf] = useState(false);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);

    const search = async () => {
        const apikey="4545d972a69d6af1a9420cffb38647e1";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apikey}&units=metric`;
        setLoad(true);
        setError(null); // Clear any previous errors
        try {
            let res = await fetch(url);
            let data = await res.json();
            if (data.cod === "404") {
                setCnf(true);
                return;
            }
            setHum(data.main.humidity);
            setWind(data.wind.speed);
            setTemp(Math.floor(data.main.temp));
            setCity(data.name);
            setCountry(data.sys.country);
            setLat(data.coord.lat);
            setLog(data.coord.lon);
            const iconCode = data.weather[0].icon;
            setIcon(getWeatherIcon(iconCode)); // Using getWeatherIcon function to fetch icon
            setCnf(false);
        } catch (error) {
            console.error(error.message);
            setError("An error occurred while fetching data.");
        } finally {
            setLoad(false);
        }
    };

    const handleCity = (e) => {
        setText(e.target.value);
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            search();
        }
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <div className="container">
            <div className="input-container">
                <input
                    type="text"
                    className="cityinput"
                    placeholder="Search city"
                    onChange={handleCity}
                    value={text}
                    onKeyDown={handleKey}
                />
                <div className="search" onClick={search}>
                    <img src={search1} alt="Search Icon" />
                </div>
            </div>
            {load && <div className="loading">Loading ...</div>}
            {!load && !cnf && !error && (
                <WeatherDetail
                    icon={icon}
                    temp={temp}
                    city={city}
                    country={country}
                    lat={lat}
                    log={log}
                    hum={hum}
                    wind={wind}
                />
            )}
            {error && <div className="error">{error}</div>}
            {cnf && <div className="citynot">City Not Found</div>}
        </div>
    );
};

export default App;
