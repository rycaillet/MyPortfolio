import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProfileImage = styled.img`
    width: 5.5em;
    height: 7em;
    border-radius: 50%;
    box-shadow: 3px 3px 3px 3px #888888;
    transition: all .6s;
    &:hover {
        border-radius: 5%;
        transform: scale(1.5);
    }
    `

const NavDiv = styled.div`
    display: flex;
    justify-content: space-around;
        a {
        font-size: 2rem;
        color: black;
        font-weight: bold;
        text-decoration: all .4s;
        text-decoration: none;
        &:focus, &:hover {
            text-decoration: none;
            color: rgb(245, 11, 11);
            transform: scale(1.3);
            }
        }
        `

const HeaderDiv = styled.div`
    // background-image: url('https://images.pexels.com/photos/920534/pexels-photo-920534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    // background-size:cover;
    // background-position: center;
    // background-repeat: no-repeat;
    padding: 2rem;
    text-align: center;
    font-family: 'Special Elite', cursive;
    color: black;
    box-shadow: 0px 3px 6px 4px #d3d3d3;
    `

const ProfileTitle = styled.h1`
    color: black;
    font-weight: bold;
    margin: 2rem;
`
const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all .4s;
`

const Header = () => {
        return (
            <HeaderDiv>
                <Link to="/">
                    <ProfileImage src={require('../images/profile-image.png')} alt='Ryan Caillet' />
                </Link>
                <ProfileTitle>Ryan Caillet</ProfileTitle>
                <NavDiv>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <a href="https://docs.google.com/document/d/1BVheOtQURd8vlKFbA-f6J-KpkG182psTl7vApkunKLM/edit?usp=sharing" rel="noopener noreferrer" target="_blank">Resume</a>
                </NavDiv>
            </HeaderDiv>
        )
    }

export default Header