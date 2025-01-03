import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import "./App.css";
import ContactForm from "./ContactForm";

function App() {
  const [contacts, setContacts] = useState([]); // Fixed typo in setContacts

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/contacts");
      const data = await response.json();
      setContacts(data.contacts);
      console.log(data.contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <>
      <ContactList contacts={contacts} />
      <ContactForm refreshContacts={fetchContacts} /> {/* Pass fetchContacts to ContactForm */}
    </>
  );
}

export default App;
