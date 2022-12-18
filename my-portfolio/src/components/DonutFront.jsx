import React from 'react'
import DonutApp from '../images/donut-app.png'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

const DonutFront = () => {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={DonutApp} type="image/jp2" />
                        <img src={DonutApp} alt="Donut App" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }

export default DonutFront