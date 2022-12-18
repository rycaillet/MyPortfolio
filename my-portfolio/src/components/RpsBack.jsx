import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const BackDiv = styled.div`
  text-align: center;
`

const RpsBack = () => {
        return (
            <BackDiv>
                <Card>
                <h3>RPS</h3>
                    <p>RPS is rock, paper, scissors created with only HTML, CSS, and Javascript and keeps score of the user vs computer.</p>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, and Javascript</p>
                    <p>Live Site @<a href=""> RPS</a></p>
                </Card>
            </BackDiv>
        )
    }

export default RpsBack