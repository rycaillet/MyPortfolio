import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  text-align: center;
`

const LostOnesBack = () => {
        return (
            <BackDiv>
                <Card>
                <h3>Lost Ones</h3>
                    <p> Created an app for pet enthusiasts who unfortunately have lost their pet. This app was designed with the intention of pulling a community together to help find those lost ones.</p>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js front-end</p>
                    <p>PSQL for database management</p>
                    <p>Project Planning - Trello, Lucid Chart, Draw.io</p>
                    <p>Live Site @<a href="https://find-a-pet-frontend.herokuapp.com/"> Lost Ones</a></p>
                </Card>
            </BackDiv>
        )
    }

export default LostOnesBack