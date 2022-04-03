


const initialContacts = {
  contact: [ { name: "Balu", number: "8184870748", email: "balu123@gmail.com", }],
  contacte : {},
};
export const contactsReducers = (state = initialContacts, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state };
    case "ADD_CONTACT": {
      let contact = [...state.contact];
      contact.push(action.payload);
      return { ...state, contact};
    };
    case "GET_SINGLE_CONTACT":
      return {...state, contacte: [action.index]};
    default:
      return state;
  }
};
