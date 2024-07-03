import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [queryType, setQueryType] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, queryType, message, consent });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Contact Us</h2>
        <label className="name">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className="surname">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </label>

        <label>
          Query Type
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                value="General Enquiry"
                checked={queryType === 'General Enquiry'}
                onChange={(e) => setQueryType(e.target.value)}
                required
              />
              General Enquiry
            </label>

            <label>
              <input
                type="radio"
                value="Support Request"
                checked={queryType === 'Support Request'}
                onChange={(e) => setQueryType(e.target.value)}
                required
              />

              Support Request
            </label>
          </div>
        </label>

        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          ></textarea>
        </label>

        <label>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className={styles.checkbox}
          />
          I consent to being contacted by the team *
        </label>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
