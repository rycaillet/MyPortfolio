import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  text-align: center;
    h3 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
`

const FiosBack = () => {
        return (
            <BackDiv>
                <Card>
                <h3>The Fault In Our Stars</h3>
                    <p>The Faults In Our Stars is a hyper-personalized, social experience bringing astrology into the 22nd century. Our aim is to create social circles revolving around zodiac signs. This website will allow you to connect to people that are compatible to your zodiac sign and at the same time rate the users based on their personalities and sign compatibility; whether good or bad, create new social circles, that will improve your work and love life.</p>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js front-end</p>
                    <p>PostgresQL database</p>
                    <p>Project Planning - Lucidchart, Trello, Draw.io</p>
                    <p>Live Site @<a href="https://starz-app.herokuapp.com/">The Fault In Our Stars</a></p>
                </Card>
            </BackDiv>
        )
    }

export default FiosBack