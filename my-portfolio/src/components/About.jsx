import React from 'react'
import styled from 'styled-components'

const AboutDiv = styled.div`
    font-family: 'Catamaran';
    text-align: center;
    p {
        font-size: 1.7rem;
    }
`
const About = () => {
        return (
            <AboutDiv>
                <br />
                <h2>Full-Stack Developer</h2>
                <h3>Fairfax, VA</h3>
                <br />
                <p>I am a software engineer and retired Navy veteran bringing adaptability, strong communication skills, and a desire to learn and grow to all projects and teams that I am a part of.</p>
                <p>I am excited to combine my interpersonal and project management skills from the military with my technical skills in HTML, CSS, Javascript, and React to help companies across various industries succeed.</p>
                <p>Professionally and personally my aim is to always learn and move forward;</p>
            </AboutDiv>
        )
    }

export default About