import React from "react";
import CardItem from "./CardItem";

export default function CardList({ data, ...props }) {
  return (
    <div className="flex flex-col gap-10 box-shadown rounded-lg w-[615px] p-[20px] container-1">
      <CardItem data={data}></CardItem>
    </div>
  );
}
