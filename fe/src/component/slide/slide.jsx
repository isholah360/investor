import React, { useState, useEffect } from "react";
import "./slide.css";

const Slider = () => {
  const [riskTolerance, setRiskTolerance] = useState(0); // Default value
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:8000/api/add/${riskTolerance}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [riskTolerance]);

  const handleChange = (event) => {
    setRiskTolerance(Number(event.target.value));
  };

  return (
    <>
    <div className="main-slide">
      <div className="main-slide-one">
      <div className="calibrate">
        <h2>Risk Tolerance: {riskTolerance}</h2>

        <div className="slider-wrapper">
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            value={riskTolerance}
            onChange={handleChange}
            className="slider"
          />
        </div>
      </div>

      <div>
        {loading && <p className="loading">Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          <div>
            
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <div className="out-content">
                    <div className="name-width">Nigeria Stocks:</div>
                    <div className="content-">
                      <div
                        className="two"
                        style={{ width: `${item.nigerianStocks}%` }}
                      >  <span style={{marginLeft:"1rem"}}>{item.nigerianStocks}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Foreign Stocks:</div>
                    <div className="content-">
                      <div
                        className="tri"
                        style={{ width: `${item.foreignStocks}%` }}
                      >  <span style={{marginLeft:"1rem"}}>{item.foreignStocks}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Tech Stocks:</div>
                    <div className="content-">
                      <div
                        className="four"
                        style={{ width: `${item.techStocks}%` }}
                      >   <span style={{marginLeft:"1rem"}}>{item.techStocks}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Emerging Stocks:</div>
                    <div className="content-">
                      <div
                        className="five"
                        style={{ width: `${item.emergingStocks}%` }}
                      >
                        <span style={{marginLeft:"1rem"}}>{item.emergingStocks}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Nigerian Bonds:</div>
                    <div className="content-">
                      <div
                        className="six"
                        style={{ width: `${item.nigerianBonds}%` }}
                      > <span style={{marginLeft:"1rem"}}>{item.nigerianBonds}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Foreign Bonds:</div>
                    <div className="content-">
                      <div
                        className="seven"
                        style={{ width: `${item.foreignBonds}%` }}
                      > <span style={{marginLeft:"1rem"}}>{item.foreignBonds}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Commodities:</div>
                    <div className="content-">
                      <div
                        className="eight"
                        style={{ width: `${item.commodities}%` }}
                      >  <span style={{marginLeft:"1rem"}}>{item.commodities}%</span>  </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Real Estate:</div>
                    <div className="content-">
                      <div
                        className="nine"
                        style={{ width: `${item.realEstate}%` }}
                      > <span style={{marginLeft:"1rem"}}>{item.realEstate}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">T-Bills:</div>
                    <div className="content-">
                      <div
                        className="ten"
                        style={{ width: `${item.tBills}%` }}
                      >  <span style={{marginLeft:"1rem"}}>{item.tBills}%</span> </div>
                    </div>
                  </div>
                  <div className="out-content">
                    <div className="name-width">Alternative:</div>
                    <div className="content-">
                      <div
                        className="elev"
                        style={{ width: `${item.alternative}%` }}
                      >  <span style={{marginLeft:"1rem"}}>{item.alternative}%</span> </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
      <div className="main-slide-two">
          <img src="https://d10cq78zmnjvsx.cloudfront.net/images/marketing-site/splayed-phones-with-fundrise-open-new.png" alt="" />
       </div>
    </div>
    </>
  );
};

export default Slider;
