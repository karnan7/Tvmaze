import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Shows from './Shows';
import { Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';

const Home = ({shows, setShows}) => {


    const fetchDetails = async () => {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
        console.log(response)
        
        const {data} = response
        

        const allShows = data.map((series) => ({
            name:series.show?.name,
            picture:series.show?.image?.original,
            rating: series.show?.rating?.average,
            summary: series.show?.summary,
            language: series.show?.language,
            genres: series.show?.genres,
            premiered: series.show?.premiered,
            id:series.show?.id,
        }))
        setShows(allShows);
    }

    useEffect(() => {
        fetchDetails()
    },[])

  return (
    <Container>
        <h2>Available Shows</h2>
        <Content>
            {shows.map((show) => (
                <Col key={show.id}>
                    <Link to={`/details/` +show.id}>
                        <Shows shows={show} />
                    </Link>
                </Col>
            ))}
        </Content>
    </Container>
  )
}

export default Home;

const Container = styled.div`
    min-height: calc(130vh - 90px);
    background: #101423;
    padding:10px 40px;
    overflow-x: hidden;
    color: #fff;
    
`
const Content = styled.div`
    margin-top: 25px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    @media(max-width:1328px){
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media(max-width:960px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media(max-width:768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media(max-width:500px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
`



    
