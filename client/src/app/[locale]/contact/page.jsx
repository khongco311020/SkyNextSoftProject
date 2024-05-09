"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { useState } from "react";
import axios from "axios";
import Googlemap from "./Googlemap";
import { BsBuilding } from "react-icons/bs";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phone || !message) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5555/contact", {
        fullname: fullName,
        email: email,
        phone: phone,
        message: message,
      });
      setSentSuccess(true);
      setShowForm(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            width={600}
            height={400}
            className={styles.img}
          />
        </div>
        <div className={styles.formContainer}>
          {sentSuccess && (
            <div className={styles.successMessage}>
              Message sent successfully!
            </div>
          )}
          {!sentSuccess && (
            <form onSubmit={handleSubmit} className={styles.form}>
              {errorMessage && (
                <div className={styles.errorMessage}>{errorMessage}</div>
              )}
              <input
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                type="text"
                id="fullname"
                placeholder="Full Name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                type="text"
                placeholder="Email Address"
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                id="phone"
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.contactName}>
          <h3 style={{ textDecoration: "underline" }}>
            Công Ty cổ phần SkyNextSoft
          </h3>
          <div className={styles.dflex}>
            <BsBuilding />
            <p>Số 7, Dãy 2, Ngõ 651 Minh Khai, Hai Bà Trưng, Hà Nội</p>
          </div>
          <div className={styles.dflex}>
            <BsBuilding />
            <p>Skynextsoft@gmail.com</p>
          </div>
          <div className={styles.dflex}>
            <BsBuilding />
            <p>0388-666-888</p>
          </div>
        </div>
        <div style={{ width: "500px" }}>
          <Googlemap />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
