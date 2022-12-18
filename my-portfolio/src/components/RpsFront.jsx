import React from 'react'
import RPS from '../images/rps.png'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

const RpsFront = () => {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={RPS} type="image/jp2" />
                        <img src={RPS} alt="Rock Paper Scissors" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }

export default RpsFront