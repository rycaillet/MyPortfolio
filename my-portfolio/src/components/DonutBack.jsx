import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  text-align: center;
`

const DonutBack = () => {
        return (
            <BackDiv>
                <Card>
                <h3>Donut App</h3>
                    <p> Donut App is an app that allows the user to see donut shops around Fairfax, VA and can also see donuts that are sold in that shop. Full CRUD operations are performed on the donuts in each shop.</p>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Node.js with Express</p>
                    <p>React.js front-end</p>
                    <p>MongoDB with Mongoose for database management</p>
                    <p>Project Planning - Trello, Lucid Chart, Draw.io</p>
                    <p>Github <a href="https://github.com/rycaillet/Donut-App"> Donut App</a></p>
                </Card>
            </BackDiv>
        )
    }

export default DonutBack