import React, { useState,useRef } from "react";
import { connect } from "react-redux";
import { addContact } from "../redux/action/contact-action";

function Edit({ addContact }) {
  const [contact, setContact] = useState({
    name: "",
    number: "",
    email: "",
  });

  const handleChange = (name, value) => {
    const oldContact = { ...contact };
    oldContact[name] = value;
    setContact(oldContact);
  };

  const handleSubmit =()=> {
    addContact(contact);
    setContact(
      {
        name: "",
        number: "",
        email: "",
      })
      closeRef.current.click();
  }
  const closeRef=useRef();
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT
              </h5>
              <button 
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                aria-label="default input example"
                value={contact.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              &nbsp;&nbsp;&nbsp;
              <input
                className="form-control"
                type="text"
                placeholder="Number"
                aria-label="default input example"
                value={contact.number}
                onChange={(e) => handleChange("number", e.target.value)}
              />
              &nbsp; &nbsp; &nbsp;
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                aria-label="default input example"
                value={contact.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
