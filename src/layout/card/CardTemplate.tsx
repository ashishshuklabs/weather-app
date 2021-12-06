import React from "react";
import styled from "styled-components";
import {
  getFormattedDate,
  getFormattedTime,
  getRoundedValue,
  WeatherData,
} from "../../models/weatherData";
import i01d from "../../assets/icon/01d.png";
import i02d from "../../assets/icon/02d.png";
import i03d from "../../assets/icon/03d.png";
import i04d from "../../assets/icon/04d.png";
import i09d from "../../assets/icon/09d.png";
import i10d from "../../assets/icon/10d.png";
import i11d from "../../assets/icon/11d.png";
import i13d from "../../assets/icon/13d.png";
import i50d from "../../assets/icon/50d.png";
import i01n from "../../assets/icon/01n.png";
import i02n from "../../assets/icon/02n.png";
import i03n from "../../assets/icon/03n.png";
import i04n from "../../assets/icon/04n.png";
import i09n from "../../assets/icon/09n.png";
import i10n from "../../assets/icon/10n.png";
import i11n from "../../assets/icon/11n.png";
import i13n from "../../assets/icon/13n.png";
import i50n from "../../assets/icon/50n.png";
import { ShortTile } from "../../components/tile/ShortTile";
import { LongTile } from "../../components/tile/LongTile";
import { designVariables } from "../../styles/globalVariables";
import { CityWeatherData } from "../../state/types/searchWeatherType";
//load all images and return based on value recieved.
const getImage = (imageName: string) => {
  switch (imageName) {
    case "01d":
      return i01d;
    case "02d":
      return i02d;
    case "03d":
      return i03d;
    case "04d":
      return i04d;
    case "09d":
      return i09d;
    case "10d":
      return i10d;
    case "11d":
      return i11d;
    case "13d":
      return i13d;
    case "50d":
      return i50d;
    case "01n":
      return i01n;
    case "02n":
      return i02n;
    case "03n":
      return i03n;
    case "04n":
      return i04n;
    case "09n":
      return i09n;
    case "10n":
      return i10n;
    case "11n":
      return i11n;
    case "13n":
      return i13n;
    case "50n":
      return i50n;
    default:
      return i01d;
  }
};
interface CardData {
  weatherData: WeatherData;
  city: string;
}
export const CardTemplate = (props: CardData) => {
  const { city, weatherData } = props;

  return (
    <StyledCard>
      <div className="location-date">
        <h2 className="location">{city}</h2>
        <h4 className="date">{getFormattedDate(weatherData.current.dt)}</h4>
      </div>
      <div className="current-weather-container">
        <div className="current-weather expand">
          <div className="weather-icon shrink">
            <img
              src={`${getImage(weatherData.current.weather[0].icon)}`}
              alt=""
              className="icon"
            />
          </div>
          <div className="details shrink">
            <div className="temperature">
              {getRoundedValue(weatherData.current.temp)}
            </div>
            <div className="description">
              {weatherData.current.weather[0].description}
            </div>
          </div>
        </div>
        <div className="displace"></div>
        <div className="current-stats divide shrink">
          <div className="group-1">
            <div className="humidity common">
              <span className="value">
                {getRoundedValue(weatherData.current.humidity)}
              </span>
              <div className="text">humidity</div>
            </div>
            <div className="feels-like common">
              <span className="temperature">
                {getRoundedValue(weatherData.current.feels_like)}
              </span>
              <div className="text">feels like</div>
            </div>
            <div className="wind common">
              <span className="speed">
                {getRoundedValue(weatherData.current.wind_speed) + " mph"}
              </span>
              <div className="text">wind speed</div>
            </div>
          </div>
          <div className="group-2">
            <div className="rain common">
              <span className="percentage">
                {getRoundedValue(weatherData.current.clouds)}%
              </span>
              <div className="text">rain</div>
            </div>
            <div className="sunrise common">
              <span className="time">
                {getFormattedTime(weatherData.current.sunrise)}
              </span>
              <div className="text">sunrise</div>
            </div>
            <div className="sunset common">
              <span className="time">
                {getFormattedTime(weatherData.current.sunset)}
              </span>
              <div className="text">sunset</div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-by-hour hide">
        <div className="hour-1">
          <ShortTile
            title={getFormattedTime(weatherData.hourly[0].dt)}
            icon={`${getImage(weatherData.hourly[0].weather[0].icon)}`}
            footer={weatherData.hourly[0].temp.toString() + ""}
          />
        </div>
        <div className="hour-2">
          <ShortTile
            title={getFormattedTime(weatherData.hourly[1].dt)}
            icon={`${getImage(weatherData.hourly[1].weather[0].icon)}`}
            footer={weatherData.hourly[1].temp.toString() + ""}
          />
        </div>

        <div className="hour-3">
          <ShortTile
            title={getFormattedTime(weatherData.hourly[2].dt)}
            icon={`${getImage(weatherData.hourly[2].weather[0].icon)}`}
            footer={weatherData.hourly[2].temp.toString() + ""}
          />
        </div>
        <div className="hour-4">
          <ShortTile
            title={getFormattedTime(weatherData.hourly[3].dt)}
            icon={`${getImage(weatherData.hourly[3].weather[0].icon)}`}
            footer={weatherData.hourly[3].temp.toString() + ""}
          />
        </div>
        <div className="hour-5">
          <ShortTile
            title={getFormattedTime(weatherData.hourly[4].dt)}
            icon={`${getImage(weatherData.hourly[4].weather[0].icon)}`}
            footer={weatherData.hourly[4].temp.toString() + ""}
          />
        </div>
      </div>
      <div className="next-5-days">
        <div className="day-1">
          <LongTile
            date={weatherData.daily[0].dt}
            low={weatherData.daily[0].temp.min}
            high={weatherData.daily[0].temp.max}
            wind={weatherData.daily[0].wind_speed}
            rain={weatherData.daily[0].clouds}
            icon={`${getImage(weatherData.daily[0].weather[0].icon)}`}
          />
        </div>
        <div className="day-2">
          <LongTile
            date={weatherData.daily[1].dt}
            low={weatherData.daily[1].temp.min}
            high={weatherData.daily[1].temp.max}
            wind={weatherData.daily[1].wind_speed}
            rain={weatherData.daily[1].clouds}
            icon={`${getImage(weatherData.daily[1].weather[0].icon)}`}
          />
        </div>
        <div className="day-3">
          <LongTile
            date={weatherData.daily[2].dt}
            low={weatherData.daily[2].temp.min}
            high={weatherData.daily[2].temp.max}
            wind={weatherData.daily[2].wind_speed}
            rain={weatherData.daily[2].clouds}
            icon={`${getImage(weatherData.daily[2].weather[0].icon)}`}
          />
        </div>
        <div className="day-4">
          <LongTile
            date={weatherData.daily[3].dt}
            low={weatherData.daily[3].temp.min}
            high={weatherData.daily[3].temp.max}
            wind={weatherData.daily[3].wind_speed}
            rain={weatherData.daily[3].clouds}
            icon={`${getImage(weatherData.daily[3].weather[0].icon)}`}
          />
        </div>
        <div className="day-5">
          <LongTile
            date={weatherData.daily[4].dt}
            low={weatherData.daily[4].temp.min}
            high={weatherData.daily[4].temp.max}
            wind={weatherData.daily[4].wind_speed}
            rain={weatherData.daily[4].clouds}
            icon={`${getImage(weatherData.daily[4].weather[0].icon)}`}
          />
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  border: 1px solid ${designVariables.palette.light100};
  @media (max-width: 767px) {
    .weather-by-hour.hide {
      display: none;
    }
    .current-weather-container {
      flex-direction: column;
      justify-content: center;
      .displace {
        display: none;
      }
      .current-stats {
        position: relative;
        &.divide {
          &::after {
            position: absolute;
            content: "";
            bottom: 0;
            left: 0;
            background: ${designVariables.colorBodyText};
            width: 80%;
            height: 1px;
            margin: 0 10%;
          }
        }
      }
      .current-weather.expand {
        width: 100%;
        justify-content: center;
        margin-bottom: 1rem;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          bottom: -10%;
          left: 0;
          background: ${designVariables.colorBodyText};
          width: 80%;
          height: 1px;
          margin: 0 10%;
        }
      }
    }
    .location-date {
      align-items: center;
    }
  }
  .text {
    font-weight: 100;
    color: ${designVariables.palette.dark200};
  }
  .temperature {
    &:after {
      content: "\xB0";
      top: 0;
      left: 0;
    }
  }
  .current-weather-container {
    margin: 3rem auto;
    width: 100%;
    display: flex;
    .displace {
      width: 2px;
      min-height: 80%;
      background: ${designVariables.palette.light100};
      margin: 0 2rem;
    }
    .current-stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media (max-width: 570px) {
        &.shrink{
          font-size: .9rem;
        }
        &.shrink{
          font-size: .9rem;
        }
      }
      .group-1 {
        display: flex;
      }
      .group-2 {
        display: flex;
      }
      .common {
        color: ${designVariables.palette.light100};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 2rem 1rem;
      }
    }
    .current-weather {
      display: flex;
      width: 50%;
      justify-content: space-around;
      align-items: center;
      @media (max-width: 570px) {
        .weather-icon.shrink {
          width: 6rem;
          height: 6rem;
        }
        .details.shrink {
          .description{
            font-size: 1.15rem;
          }
          .temperature {
            font-size: 4rem;
          }
        }
      }
      .weather-icon {
        width: 7rem;
        height: 7rem;
        .icon {
          width: 100%;
          height: 100%;
        }
      }
      .details {
        color: ${designVariables.palette.light100};
        display: flex;
        flex-direction: column;
        align-items: center;
        .description {
          font-size: 1.4rem;
        }
        .temperature {
          font-size: 5rem;
          &:after {
            content: "\xB0";
            top: 0;
            left: 0;
          }
        }
      }
    }
  }

  .location-date {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${designVariables.palette.light100};
    margin: 2rem 2rem;
    .date {
      font-weight: 100;
      font-size: 1rem;
    }
  }
  .weather-by-hour {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
