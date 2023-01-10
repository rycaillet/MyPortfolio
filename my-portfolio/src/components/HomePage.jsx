import React from 'react'
import styled from 'styled-components'
import './homepage.css'
import { useNavigate } from 'react-router-dom'

const HomeDiv = styled.div`
    font-family: 'Catamaran';
    text-align: center;
    p {
        font-size: 1.7rem;
    }
`
const HomePage = () => {
    const navigate = useNavigate()
        return (
            <HomeDiv>
                <header id="showcase">
                <br />
                    <h1 className='text' id="header">
                        Welcome To My Portfolio!
                    </h1>
                    <br />
                    <p className='text' id="p-text">Click on the about me button to learn more</p>
                <button id="read-me-button" onClick={() => navigate('/about')}>About me</button>
                </header>
            </HomeDiv>
        )
    }

export default HomePage