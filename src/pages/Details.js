import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Booking from './Booking';


const Details = ({ shows }) => {

    const[modalOpen, setModalOpen] = useState(false);
    const { id } = useParams(); 
    const selectedShow = shows.find((s) => s.id === parseInt(id));

  if (!selectedShow) {
    return <div>Show not found</div>;
  }

  const styles ={
    bgStyle:{
        opacity: modalOpen? '0.3': '1'
    }
  }

  return (
    <Container>
            <Background style={styles.bgStyle}>
                <img src={selectedShow.picture} alt={selectedShow.name}/>
            </Background>
            <div style={styles.bgStyle}> 
                <Title>{selectedShow.name}</Title>
                <SubTitle>{selectedShow.language} . {selectedShow.premiered} . {selectedShow.genres}</SubTitle>
                <Description>{selectedShow.summary}</Description>
                <BookButton
                onClick={()=> {setModalOpen(true)}}
                >Book</BookButton>
            </div>
        <Booking modalOpen={modalOpen} setModalOpen={setModalOpen} shows={shows}/>
    </Container>
  );
};

export default Details;


const Container = styled.div`
    min-height: calc(100vh - 90px);
    background: #101423;
    padding:10px 40px;
    display: flex;
    justify-content: space-around;
    color: #f5f5f5;
    position: relative;

    @media (max-width: 1328px) {
        flex-direction: column;
    } 
`
const Background = styled.div`
    width: 800px;
    height: 800px;
    box-shadow: 0px 0px 23px 8px #000000;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1328px) {
        width: 600px;
        height: 600px;
    } 
    @media (max-width: 768px) {
        width: 500px;
        height: 500px;
    } 
`
const Title = styled.h1`
    -webkit-text-stroke: 5px #84DE02;
    color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 75px;
    margin-top: 90px;
    word-spacing: 15px;

    @media (max-width: 768px) {
        margin-top: 60px;
        font-size: 60px;
    }
    @media (max-width: 1328px) {
        margin-top: 70px;
        font-size: 65px;
    }
`
const SubTitle = styled.span`
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 13px;
    }
    @media (max-width: 1328px) {
        font-size: 15px;
    }
`

const Description = styled.p`
    margin:30px 0px 110px 0px;
    font-size: 20px;
    line-height: 1.4;
    max-width: 760px;

    @media (max-width: 768px) {
        font-size: 15px;
        margin:30px 0px 60px 0px;
    }
    @media (max-width: 1328px) {
        font-size: 17px;
        margin:30px 0px 80px 0px;
    }
`
const BookButton = styled.button`
    border: 2px solid #fff;
    border-radius:5px;
    background-color: transparent;
    color: #84DE02;
    padding: 10px 200px;
    font-size:20px;
    font-weight: bold;
    letter-spacing:3px;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: rgb(24, 30, 52);
    }

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 10px 150px;
    }
    @media (max-width: 1328px) {
        font-size: 18px;
        padding: 10px 170px;
    }
    
`





