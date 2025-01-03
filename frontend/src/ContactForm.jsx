import { useState } from "react";

const ContactForm = ({ refreshContacts }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
  
    const onSubmit = async (e) => {
      e.preventDefault(); // Prevents page reload
  
      const data = {
        firstName,
        lastName,
        email,
      };
  
      const url = "http://127.0.0.1:5000/create_contact";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      try {
        const response = await fetch(url, options);
  
        if (response.ok) {
          refreshContacts(); // Refresh contact list
          setFirstName("");
          setLastName("");
          setEmail("");
        } else {
          const errorData = await response.json();
          alert(errorData.message);
        }
      } catch (error) {
        console.error("Error creating contact:", error);
      }
    };
  
    return (
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Create Contact</button>
      </form>
    );
  };
  
  export default ContactForm;
  