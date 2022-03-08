
import { Button, Contact, ContactName, Dots, Item, List, Text } from './ContactList.styled';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDeleteContactsMutation, useFetchContactsQuery } from "redux/contacts/contactsSlice";

export function ContactList({normalizedFilter}) {
    const { data, error, isFetching } = useFetchContactsQuery();
    const [deleteContacts] = useDeleteContactsMutation();

    const visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))

    return (<>
        {isFetching && <p>Loading...</p>}
        {error && <p>{error.data }</p>}
        {data  && 
    <div>
           {visibleContacts.length === 0 ?
                (
                    <Text>Nothing found</Text>
            
                ) : (
                   <List>
                            {visibleContacts.map(({ id, name, number }) => 
                                <Item key={id}>
                                    <Contact>
                                        <ContactName>{name}: </ContactName>
                                        <Dots></Dots>
                                    <p>{number}</p>
                                    </Contact>
                                    <Button type="button" onClick={()=>deleteContacts(id)}>
                                        <RiDeleteBin6Line style={{ width: 20, height: 20,   }} />
                                    </Button>
                                </Item>
                            )}
                        </List >)
                   
            }
        </div>}
        </>
    )   
}
