import styled from 'styled-components'

export const Input = styled.input`
display:inline-block;
margin: auto;
    padding: 5px;
    border-radius: 10px;
    width: 40%;
    :hover{
        
        border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf;

    }
`
export const Text = styled.p`
display: flex;
    text-align: center;
    justify-content:center;
    font-size: 20px;
    margin: 0;
    margin-bottom: 15px;
    padding:0;
`
export const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
    
`