import React, { createContext, useContext, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { AiOutlineMail, AiOutlineCopy, AiOutlineCheck } from "react-icons/ai";
import {
  EMAIL,
  SUBJECT,
  BODY,
  gmailLink,
  outlookLink,
  yahooLink,
  mailtoLink,
} from "../utils/hire";

const ContactContext = createContext({ openContact: () => {} });

export const useContact = () => useContext(ContactContext);

export function ContactProvider({ children }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState("");
  const openContact = useCallback(() => setShow(true), []);

  const copy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <ContactContext.Provider value={{ openContact }}>
      {children}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="contact-modal"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Hire Akpan Victor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="contact-lead">
            Choose how you would like to send your message. Your email opens
            already addressed to <b>{EMAIL}</b> with a professional message
            filled in. Just click Send.
          </p>

          <div className="contact-options">
            <a
              className="contact-option"
              href={gmailLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail /> Open in Gmail
            </a>
            <a
              className="contact-option"
              href={outlookLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail /> Open in Outlook
            </a>
            <a
              className="contact-option"
              href={yahooLink}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail /> Open in Yahoo Mail
            </a>
            <a className="contact-option" href={mailtoLink}>
              <AiOutlineMail /> Use my mail app
            </a>
          </div>

          <div className="contact-copy">
            <span>Prefer another way? Copy the details:</span>
            <div className="contact-copy-row">
              <button type="button" onClick={() => copy("email", EMAIL)}>
                {copied === "email" ? <AiOutlineCheck /> : <AiOutlineCopy />}{" "}
                Copy email
              </button>
              <button
                type="button"
                onClick={() => copy("msg", `Subject: ${SUBJECT}\n\n${BODY}`)}
              >
                {copied === "msg" ? <AiOutlineCheck /> : <AiOutlineCopy />}{" "}
                Copy message
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </ContactContext.Provider>
  );
}
