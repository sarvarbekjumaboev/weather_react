import React, { useState, useEffect, useRef } from 'react'
import './App.css'


// img svg
import Sun from "../src/svg/Sun.svg"
// import icon svg
import WindSpeed from "./svg/WindSpeed.svg"
import Cloud from "./svg/Cloud.svg"
import Icon from "./svg/Icon.svg"

import Noon from "./svg/Noon.svg"

function App() {

  const [data, setData] = useState([])


  const API = "https://api.openweathermap.org/data/2.5/weather?q=andijon&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c"

  //Time
  const time = new Date()
  const timeHours = time.getHours()

  const editCard = useRef()
  console.log(editCard);

  useEffect(() => {
    fetch(API).then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  if (timeHours >= 6 && timeHours <= 19) {
    editCard?.current?.setAttribute("style", "background-color:#C9E5FF;");
  } else {
    // editCard.current.style.backgroundColor = '#1F2E54'
    editCard?.current?.setAttribute("style", "background-color:#1F2E54';");

  }




  return (

    <div>
      <div className="container">
        <div className="wrap">
          <div className="card" ref={editCard}>
            <div className="card-top">
              <div className="left">
                <img src={timeHours >= 6 && timeHours ? (
                  Noon
                ): (
                  Sun
                )} alt="" />
              </div>
              <div className="right">
                <h1>{data?.main?.temp}
                  º</h1>
                <p className='text-img'>{data?.name}</p>

              </div>
            </div>


            <div className="card-bottom">
              <div className="wind font-size">
                <img src={WindSpeed} alt="" />
                <p>{data?.wind?.speed}
                  km/h</p>
              </div>
              <div className="cloud font-size">
                <img src={Cloud} alt="" />
                <p className='font-size'>
                  {data?.wind?.gust} %</p>
              </div>
              <div className="icon font-size">
                <img src={Icon} alt="" />
                <p>{data?.sys?.type} of {data?.main?.humidity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



)

}

export default App
