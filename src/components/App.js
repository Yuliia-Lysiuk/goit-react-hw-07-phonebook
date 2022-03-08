import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook, SecondTitle, Title, Box } from './App.styled';
import { Text } from './ContactList/ContactList.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useState } from 'react';

function App() {
  const { data: contacts } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  return (
    <Box>
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm />

        {contacts && contacts.length > 0 ? (
          <>
            <SecondTitle>Contacts</SecondTitle>
            <Filter onChange={setFilter} value={filter} />
            <ContactList normalizedFilter={filter} />
          </>
        ) : (
          <Text>No contacts add</Text>
        )}
      </Phonebook>
    </Box>
  );
}

export default App;
