
import { useState } from 'react';
import { Button, Form, Input, Label, NameInput } from "./ContactForm.styled";
import { TiUserAdd } from 'react-icons/ti';
import { useCreateContactsMutation, useFetchContactsQuery } from 'redux/contacts/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContacts, {isLoading}] = useCreateContactsMutation();
  const { data: contacts} = useFetchContactsQuery();

   const handleChange = e => {
     const {name, value} = e.currentTarget;
     switch (name) {
       case "name":
         setName(value)
         break;
       case "number":
         setNumber(value)
         break;
     
       default:
         break;
     }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       const newName = contacts.some(contact => contact.name === name);
    if (newName) {
      reset();
      return alert(`${name} is already in contacts`);
    }
    createContacts({name, number})
      reset();
    };

  const reset = () => {
      setName('')
      setNumber('')
    }
  
    return ( 
        <Form onSubmit={handleSubmit}>
          <Label>
            Name: 
            <Input
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number: 
            <NameInput
              type="tel"
              value={number}
              onChange={handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </Label>
        <Button type="submit" disabled={isLoading}>
          <TiUserAdd style={{ width: 25, height: 25,   }} />
          </Button>
        </Form>
      
    );
  
} 


