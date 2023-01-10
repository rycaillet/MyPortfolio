import React from 'react'
import LostOnes from '../images/Lost_Ones_Home_Page.png'
import LostOnesAlt from '../images/Lost_Ones_Page.png'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'

const FrontDiv = styled.div`
  img {
      max-width: 100%;
  }
`

const LostOnesFront = () => {
        return (
            <FrontDiv>
                <Card>
                    <picture>
                        <source srcSet={LostOnes} type="image/jp2" />
                        <img src={LostOnes} alt="Lost Ones" />
                    </picture>
                </Card>
            </FrontDiv>
        )
    }

export default LostOnesFront