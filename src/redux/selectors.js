// export const getFilter = ({ contacts }) => contacts.filter;

// export const getContacts = ({ contacts }) => contacts.items;

// export const getvisibleContacts = ({ contacts }) =>
//   contacts.items.filter(({ name }) =>
//     name.toLowerCase().includes(contacts.filter)
//   );

// import { contactsApi } from './contacts/contactsSlice';

// // export const getContacts = contactsApi.endpoints.getAllContacts.select();
// export const getFilter = ({ contacts }) => contacts.filter;

// export const getFilteredContacts = (state, contacts) => {
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(
//     contact =>
//       contact.name.toLowerCase().includes(normalizedFilter) ||
//       contact.number.includes(normalizedFilter)
//   );
// };
