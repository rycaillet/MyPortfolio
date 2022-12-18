import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import FiosBack from './FiosBack';
import FiosFront from './FoisFront';
import LostOnesFront from './LostOnesFront';
import LostOnesBack from './LostOnesBack';
import RpsFront from './RpsFront';
import RpsBack from './RpsBack';
import DonutFront from './DonutFront';
import DonutBack from './DonutBack';
import styled from 'styled-components'

const FlipCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60vw;
  p {
        font-size: 1.5vw;
        margin: .25vw;
        }
      h3 {
        font-size: 2vw;
        margin: .28vw;
      }
  @media only screen and (max-width: 750px) {
      max-width:95vw;
      
      p {
        font-size: .5rem;
        margin: 2.75px;
        }
      h3 {
        font-size: .7rem;
        margin: 3px;
      }
  }
`
const FlipCard = () => {
        return (
            <FlipCards>
                <br/>
                <p>click on image to see details</p>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <FiosFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <FiosBack />
                    </BackSide>
                </Flippy>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <LostOnesFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <LostOnesBack />
                    </BackSide>
                </Flippy>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <DonutFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <DonutBack />
                    </BackSide>
                </Flippy>
                <br/>
                <Flippy
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal"
                >
                    <FrontSide>
                        <RpsFront />
                    </FrontSide>
                    <BackSide
                        style={{
                            backgroundColor: 'rgb(239, 243, 249)',
                        }}>
                        <RpsBack />
                    </BackSide>
                </Flippy>
                <br />
            </FlipCards>
        )
    }


export default FlipCard