import React, { useState, Fragment } from "react";
import "./RoomAllocation.scss";
import CustomInputNumber from "../customInputNumber/CustomInputNumber";

RoomAllocation.defaultProps = {
  guest: 10,
  room: 3,
};

export default function RoomAllocation(props) {
  const { guest, room } = props;

  const cards = Array.from({ length: room }, (_, index) => index);

  const Card = () => {
    const [guestNum, setguestNum] = useState(1);

    return (
      <div className="card">
        <h3 className="guest_per_room">房間: {guestNum} 人</h3>
        <div className="guest_counter">
          <div className="role">
            <div className="text">大人</div>
            <div className="annotation">年齡 20+</div>
          </div>
          <CustomInputNumber min={1} value={1} />
        </div>
        <div className="guest_counter">
          <div className="role">
            <div className="text">小孩</div>
          </div>
          <CustomInputNumber />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>
        住客人數：{guest} 人 / {room} 房
      </h1>
      <div className="callout">尚未分配人數：</div>
      <div className="card_group">
        {cards.map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
