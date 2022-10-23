import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledH3 = styled.h3 `
    background: #eeeeee;
    color: #444444;
    border: solid black 3px;
    max-width: fit-content;
    display: flex;
    

    &:hover {
        transform: scale(1.2);
    }
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`



const Characters = (props) => {

    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

    return(
        <StyledDiv className="character-wrapper">
             {
        data.map(character => {
          return (
            <StyledH3>{character.name}</StyledH3>
          )
        })
      }
        </StyledDiv>
    )
}

export default Characters