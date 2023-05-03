import React from "react";
import "./button.css";
interface ButtonType {
  title: string;
  type: string;
  onClick: () => void;
}
const Navidbutton = (props: ButtonType) => {
  const { title, type, onClick } = props; // destructuring
  return (
    <div>
      <button
        onClick={onClick}
        className={"btt" + (type === "suc" ? " success" : " defualt")}
      >
        {title}
      </button>
    </div>
  );
};
export { Navidbutton };
