import { MdPersonSearch } from 'react-icons/md';
import React from "react";
import { FilterBox, Input, Text } from './Filter.styled';

export const Filter = ({ onChange, value }) => {

     return (<FilterBox>
       <Text >Find contacts by name
         <MdPersonSearch style={{ width: 25, height: 25, marginLeft: '8px'  }}/>
       </Text>
       
          <Input
            type="text"
            onChange={(e) =>onChange(e.target.value.toLowerCase()) }
            value={value}
          />
     </FilterBox>   )
}
