import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Phonebook, SecondTitle, Title, Box } from './App.styled';
import { Text } from './ContactList/ContactList.styled';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useState } from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';

function App() {
  const { data: contacts } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');
  const [theme, setTheme] = useState(true);

  return (
    <Box themeColor={theme}>
      <button type="button" onClick={() => setTheme(!theme)}>
        {theme ? <BsSunFill /> : <BsMoonStarsFill />}
      </button>
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
