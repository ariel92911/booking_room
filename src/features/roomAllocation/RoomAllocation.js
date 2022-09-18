import React, { useState, Fragment } from "react";
import "./RoomAllocation.scss";
import CustomInputNumber from "../customInputNumber/CustomInputNumber";

RoomAllocation.defaultProps = {
  guest: 10,
  room: 3,
};

export default function RoomAllocation(props) {
  const { guest, room } = props;

  const cards = Array.from({ length: room }, (_, index) => {
    return { id: index, adult: 1, child: 0 };
  });

  const [bookingData, setBookingData] = useState(cards);

  function getaAssignedGuest(arr) {
    var sum = 0;
    arr.forEach(function (element) {
      sum += element.adult + element.child;
    });
    return sum;
  }

  const handleBookingData = (event, id, role) => {
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);
    console.log("id: ", id);
    console.log("role: ", role);
  };

  let assigned = getaAssignedGuest(bookingData);

  const Card = (props) => {
    const { roomData } = props;

    return (
      <div className="card">
        <h3 className="guest_per_room">
          房間: {roomData.adult + roomData.child} 人
        </h3>
        <div className="guest_counter">
          <div className="role">
            <div className="text">大人</div>
            <div className="annotation">年齡 20+</div>
          </div>
          <CustomInputNumber
            min={1}
            value={roomData.adult}
            onChange={(event) => {
              handleBookingData(event, roomData.id, "adult");
            }}
          />
        </div>
        <div className="guest_counter">
          <div className="role">
            <div className="text">小孩</div>
          </div>
          <CustomInputNumber
            value={roomData.child}
            onChange={(event) => {
              handleBookingData(event, roomData.id, "child");
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>
        住客人數：{guest} 人 / {room} 房
      </h1>
      <div className="callout">尚未分配人數：{guest - assigned} 人</div>
      <div className="card_group">
        {cards.map((item, index) => (
          <Card key={index} roomData={item} />
        ))}
      </div>
    </div>
  );
}
