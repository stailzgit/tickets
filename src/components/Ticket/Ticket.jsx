import React from "react";
import "./Ticket.css";
import TURKISH_AIRPLANE from "../../assets/turkish-airlines.png";
import AIRPLANE_STOPS from "../../assets/air-arrow.png";
import { stops_word } from "../../utils/stops_word";
import { priceByCource } from "../../utils/priceByCource";

const Ticket = ({ ticket, currency }) => {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price
  } = ticket;

  return (
    <div className="ticket">
      <div className="ticket__buy">
        <div className="ticket__logo">
          <img src={TURKISH_AIRPLANE} alt="" />
        </div>

        <button className="ticket__buy-btn">
          <p>Купить</p>
          <p>За {priceByCource(price, currency)}</p>
        </button>
      </div>

      <div className="ticket__info">
        <div className="ticket__time">
          <div className="ticket__time-item">{departure_time}</div>
          <div className="ticket__stops">
            <div className="ticket__stops-text">{stops_word(stops)}</div>
            <div className="ticket__stops-img">
              <img src={AIRPLANE_STOPS} alt="" />
            </div>
          </div>
          <div className="ticket__time-item">{arrival_time}</div>
        </div>

        <div className="ticket__station">
          <div className="ticket__station-item">
            {origin}, {origin_name}
          </div>
          <div className="ticket__station-item">
            {destination}, {destination_name}
          </div>
        </div>

        <div className="ticket__date">
          <div className="ticket__date-item">{departure_date}</div>
          <div className="ticket__date-item">{arrival_date}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
