import React from 'react';
import { useState,useEffect } from 'react';
import "./CSS/Style.css";

const Tempapp=()=>{
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Kolkata");
    useEffect(() => {
        const fetchApi= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9cf0527bf4f1c40eaddd2d033f2e4704`
            const response=await fetch(url);
            const resJson=await response.json()
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
 return(
     <>
      <div className="box">
        <div className="inputData">
            <input type="search" className="inputFeild" value={search} onChange={(event)=>{
                setSearch(event.target.value)
            }} />
        </div>

        {!city?(<p className="errorMsg">No Data Found</p>):
        (
            <>
            <div className="info">
          <h2 className="location">
          <i className="fas fa-street-view"></i>{search}
          </h2>
          <h1 className="temp">
              {city.temp}°Cel
          </h1>
          <h3 className="tempmin_max">Max {city.temp_max}°Cel and Min {city.temp_min}°Cel</h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
            </>
        )}
      
      </div>
     </>
 )
}
export default Tempapp;
