import React, { useEffect } from "react";
// connecting the redux to react project so we con use this importing method
import { connect } from "react-redux";
import { getAllContacts,getSingleContact } from "../redux/action/contact-action";
import Edit from "./Edit";

function Contacts({ getAllContacts, contacts,getSingleContact ,contacte,editContact}) {
  console.log(editContact)
  // useEffect(() => {
  //   getAllContacts();
  // }, []); 
  return (
    <React.Fragment>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1> All Contacts</h1>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            + Add Contacts
          </button>
        </div>
        <br />
        <table className="table">
          <thead style={{ backgroundColor: "blue", color: "white" }}>
            <tr>
              <th>
                <h3>S No</h3>
              </th>
              <th>
                <h3>Name</h3>
              </th>
              <th>
                <h3>Number</h3>
              </th>
              <th>
                <h3>Email</h3>
              </th>
              <th>
                <h3>Action</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 &&
              contacts.map((contact, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.Number}</td>
                  <td>{contact.email}</td>
                  <td>
                    <button className="btn btn-info"  data-bs-toggle="modal"
                      data-bs-target="#exampleModal" onClick={()=> getSingleContact()}>Edit</button>&nbsp;
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Edit  editContact={contacte}/>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contact,
    connect:state.conttacte
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact:()=>dispatch( getSingleContact())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
