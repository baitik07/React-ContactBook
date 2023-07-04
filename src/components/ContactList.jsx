import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteContact, changeStatusContact }) => {
  return (
    <div>
      {contacts.map((item) => (
        <ContactItem
          key={item.id}
          item={item}
          deleteContact={deleteContact}
          changeStatusContact={changeStatusContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
