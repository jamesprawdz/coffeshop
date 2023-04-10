import React, { useState, useEffect } from "react";
import axios from "axios";

function Account() {
  const [accountInfo, setAccountInfo] = useState(null);
  const [editableInfo, setEditableInfo] = useState({
    username: "",
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    axios
      .get("/account", { withCredentials: true })
      .then((response) => {
        setAccountInfo(response.data);
        setEditableInfo({
          username: response.data.username,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableInfo({ ...editableInfo, [name]: value });
  };

  const handleSave = () => {
    // Replace this with the actual API call to update the user's account information
    axios
      .put("/account", editableInfo, { withCredentials: true })
      .then((response) => {
        setAccountInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteAccount = () => {
    axios
      .delete("/account", { withCredentials: true })
      .then((response) => {
        // Handle successful account deletion, e.g., redirect to the homepage or logout
        console.log(response.data.message);
        // Replace the following line with proper navigation or logout logic
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="account">
      {accountInfo && (
        <div className="account-info">
          <h2>Account Information</h2>
          <p>Email: {accountInfo.email}</p>
          <p>
            Username:{" "}
            <input
              type="text"
              name="username"
              value={editableInfo.username}
              onChange={handleInputChange}
            />
          </p>
          <p>
            First Name:{" "}
            <input
              type="text"
              name="first_name"
              value={editableInfo.first_name}
              onChange={handleInputChange}
            />
          </p>
          <p>
            Last Name:{" "}
            <input
              type="text"
              name="last_name"
              value={editableInfo.last_name}
              onChange={handleInputChange}
            />
          </p>
        </div>
      )}

      {!accountInfo && (
        <div className="loading">
          <p>Loading account information...</p>
        </div>
      )}

      <div className="account-actions">
        <button onClick={handleDeleteAccount}>Delete Account</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Account;
