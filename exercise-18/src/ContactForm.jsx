import { useState, useEffect } from "react";

const ContactForm = ({
  dispatch,
  editingContact,
  setEditingContact
}) => {

  const emptyContact = {
    id: null,
    name: "",
    email: "",
    phone: ""
  };

  const [contact, setContact] =
    useState(emptyContact);

  const [isEditing, setIsEditing] =
    useState(false);

  useEffect(() => {

    if (editingContact) {

      setContact(editingContact);

      setIsEditing(true);

    }

  }, [editingContact]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      contact.name &&
      contact.email &&
      contact.phone
    ) {

      if (isEditing) {

        dispatch({
          type: "edit",
          payload: contact
        });

        setIsEditing(false);

        setEditingContact(null);

      } else {

        dispatch({
          type: "add",
          payload: {
            ...contact,
            id: Date.now(),
            favorite: false
          }
        });
      }

      setContact(emptyContact);
    }
  };

  const handleCancelEdit = () => {

    setContact(emptyContact);

    setIsEditing(false);

    setEditingContact(null);
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3>
        {isEditing
          ? "Edit Contact"
          : "Add New Contact"}
      </h3>

      <div>
        <label>Name:</label>

        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>

        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone:</label>

        <input
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">
        {isEditing ? "Update" : "Add"}
      </button>

      {isEditing && (
        <button
          type="button"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
      )}

    </form>
  );
};

export default ContactForm;