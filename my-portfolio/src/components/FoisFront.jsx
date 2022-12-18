import React from 'react'
import fios from "../images/fault_in_our_stars.png"
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

const FiosFront = () => {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={fios} type="image/jpg" />
                        <img src={fios} alt="fault_in_our_stars" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }

export default FiosFront