import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import FlipCard from './components/FlipCard'
import About from './components/About'

const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-size: 1.15em;
`

const Body = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <AppDiv>
      <Router>
        <Header />
        <Body>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<FlipCard />} />
          </Routes>
        </Body>
        <Footer />
      </Router>
    </AppDiv>
  )
}

export default App
