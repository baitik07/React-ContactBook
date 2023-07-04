import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: "Baitik",
      surname: "Azamatov",
      number: "0554500005",
      completed: false,
    },
  ]);

  function addContact(contact) {
    setContact([...contacts, contact]);
  }

  function deleteContact(id) {
    const newArr = contacts.filter((item) => item.id !== id);
    setContact(newArr);
  }

  function changeStatusContact(id) {
    const newArr = contacts.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setContact(newArr);
  }

  return (
    <div className="App">
      <h1>Number of contacts: {contacts.length}</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        changeStatusContact={changeStatusContact}
        deleteContact={deleteContact}
        contacts={contacts}
      />
    </div>
  );
}

export default App;
