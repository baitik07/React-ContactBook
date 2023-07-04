import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  return (
    <form
      className="add-contact-info"
      onSubmit={(e) => {
        e.preventDefault();

        if (!inputName.trim() || !inputSurname.trim() || !inputNumber.trim()) {
          return;
        }

        const newContact = {
          id: Date.now(),
          name: inputName,
          surname: inputSurname,
          number: inputNumber,
          completed: false,
        };

        addContact(newContact);

        setInputName("");
        setInputSurname("");
        setInputNumber("");
      }}
    >
      <input
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        type="text"
        placeholder="Add FirstName"
      />
      <input
        value={inputSurname}
        onChange={(e) => {
          setInputSurname(e.target.value);
        }}
        type="text"
        placeholder="Add SecondName"
      />
      <input
        value={inputNumber}
        onChange={(e) => {
          setInputNumber(e.target.value);
        }}
        type="number"
        placeholder="Add Number"
      />
      <br />
      <button id="add-submit">Add</button>
    </form>
  );
};

export default ContactForm;
