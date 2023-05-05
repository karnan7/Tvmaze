import React from 'react'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa'

const Shows = ({shows}) => {
  return (
    <Content>
        <Wrap>
            <img src={shows.picture}/>
            <div>
                <h1>{shows.name}</h1>
                <h3><FaStar style={{color:'yellow'}}/>{shows.rating}</h3>
            </div>
            
        </Wrap>
    </Content>
  )
}

export default Shows;

const Content = styled.div`
    cursor: pointer;
`
const Wrap = styled.div`
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img{
        width: 100%;
        height: 80%;
        object-fit: cover;
        z-index: 999;
    }

    &:hover{
        transform: scale(1.07);
        border: 3px solid rgba(249, 249, 249, 0.8);
    }
    div{
        z-index: 9;
        display:grid;
        padding-top: 5px;
        place-content: center;

        h1{
            color: #a6a6a6;
        }
        h3{
            margin-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

        }
    }
`

