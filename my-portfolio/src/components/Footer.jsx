import React from 'react'
import styled from 'styled-components'
import linkedinIcon from '../images/linkedin-logo.png'
import githubIcon from '../images/github-logo.png'
import mailIcon from '../images/email-logo.png'

const FooterDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: white;
  box-shadow:0px -3px 6px 4px #d3d3d3;
  text-align: center;
  max-height: 10rem;
  position: relative;
  bottom: 0;
  width: 100%;
  a img {
  transition: all .4s;
  height: 32px;
  width: 32px;
  border-radius: 5px;
}
a img:hover {
  transform: scale(1.3);
}
`;

const IconList = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 50%;
  margin: 0 auto;
`

const Footer = () => {
        return (
            <FooterDiv>
                <IconList>
                    <a className="icon" href="https://github.com/rycaillet"><img src={githubIcon} alt="GitHub" /></a>
                    <a className="icon" href="https://www.linkedin.com/in/ryan-caillet/"><img src={linkedinIcon} alt="LinkedIn" /></a>
                    <a className="icon" href="mailto:ryancaillet1995@gmail.com"><img src={mailIcon}
                        alt="rycaillet@aol.com" /></a>
                </IconList>
                <br />
                <div className="row" id="copyright" style={{ margin: 0 }}>
                    <div className="col-lg-12">
                        <p className="small">©2022 Ryan Caillet</p>
                    </div>
                </div>
            </FooterDiv>
        )
    }

export default Footer