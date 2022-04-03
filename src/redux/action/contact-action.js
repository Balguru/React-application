export const getAllContacts = () => {
  return { type: "GET_ALL_CONTACTS" };
};

export const addContact = (contact) => {
  return { type: "ADD_CONTACT", payload: contact };
};


export const getSingleContact = (index) => {
  return { type: "GET_SINGLE_CONTACT", index };
};
