import styled from 'styled-components'

export const Text = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`

export const Button = styled.button`
font-size: 16px;
    padding: 2px; 
    border: none;
    background-color: inherit;
   
    :hover{
        color: #470c3aaf;
        cursor: pointer;
        transform: scale(1.2);
        /* border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf; */
    }
`

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ContactName = styled.p`
    
    font-size: 18px;
    font-weight: 700;
`

export const Contact= styled.div`
     display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 320px;
`

export const List = styled.ul`
    
    padding: 0;
`

export const Dots = styled.span`
   display: block;
  flex-grow: 1;
  border-bottom: thin dashed #1b1b1b;
  float: left;
  display: block;
  height: 15px;
  margin: 0 7px 0 5px;
`