import React from "react";
import DeleteIcon from "../assets/delete.png";

const ContactItem = ({ item, deleteContact, changeStatusContact }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ width: "50px" }}
        onChange={() => {
          changeStatusContact(item.id);
        }}
        type="checkbox"
        checked={item.completed}
      />
      <h4
        style={{ marginLeft: "25px" }}
        className={`contact ${item.completed ? "completed" : ""}`}
      >
        {item.name}
      </h4>

      <h4
        style={{ marginLeft: "25px" }}
        className={`contact ${item.completed ? "completed" : ""}`}
      >
        {item.surname}
      </h4>

      <h4
        style={{ marginLeft: "25px" }}
        className={`contact ${item.completed ? "completed" : ""}`}
      >
        {item.number}
      </h4>
      <img
        onClick={() => {
          deleteContact(item.id);
        }}
        style={{ cursor: "pointer", marginLeft: "15px" }}
        width={19}
        src={DeleteIcon}
        alt="delete"
      />
    </div>
  );
};

export default ContactItem;
