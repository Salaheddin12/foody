import React from 'react';
import styled from 'styled-components'

export default () => {
    return (
        <>
            <Search/>
            <Button>Search</Button>
        </>
    );
};

const Button =styled.button`
background-color:   #52be80;
font-size:25px;
padding:5px 15px;
border:none;
border-radius:0 25px 25px 0;
cursor:pointer;
color: #ecf0f1  ;
margin-top:4rem;
letter-spacing:2px;
&:hover{
background-color:  #27ae60;
color:#ecf0f1 ;
}
`;

const Search = styled.input`
    color: #1b2631 ;
letter-spacing:2px;
    width:300px;
    font-size:25px;
    border:none;
    border-radius:25px 0 0 25px;
    padding:5px 15px
`;
