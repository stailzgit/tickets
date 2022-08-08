import React from "react";
import CheckBox from "../../CheckBox/CheckBox";
import "./Transfers.css";

const Transfers = (props) => {
  const { isAllStops, setIsAllStops, stopsChecks, setStopsChecks, stopsOnly } = props;

  const transfers = [
    { text: "Без пересадок", stops: 0 },
    { text: "1 пересадка", stops: 1 },
    { text: "2 пересадки", stops: 2 },
    { text: "3 пересадки", stops: 3 }
  ];

  const onToggleCheck = (indexStops) => {
    //заменить checked чекбокса по индексу
    setStopsChecks((prev) =>
      prev.map((item, index) => (index === indexStops ? !item : item))
    );
  };

  const onToggleAllStops = () => setIsAllStops((prev) => !prev);

  const transferItemStyle = `transfer__item ${
    isAllStops ? "transfer__item--disabled" : ""
  }`;

  return (
    <div className="transfers__wrap">
      <h2 className="transfers__title"> Количество пересадок</h2>

      <div className="transfers__list">
        <div className="transfer__item">
          <CheckBox
            id={`checkbox all`}
            label="Все"
            checked={isAllStops}
            onChange={onToggleAllStops}
          />
        </div>

        {transfers.map(({ text, stops }) => (
          <div className={transferItemStyle} key={stops}>
            <CheckBox
              id={`checkbox ${stops}`}
              label={text}
              disabled={isAllStops}
              checked={stopsChecks[stops]}
              onChange={() => onToggleCheck(stops)}
            />
            <button className="transfer__btn" onClick={() => stopsOnly(stops)}>
              ТОЛЬКО
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transfers;
