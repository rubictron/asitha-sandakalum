import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {
    HomeContainer,
    Hline
} from './HomeElements'
import Navbar  from '../components/Navbar'
import Sidebar from  '../components/Sidebar'
import Header from '../components/Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
const Home = props => {

    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
       <HomeContainer> 
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Header/>
            <About />
            <Experience/>
                <Hline/>
            <Skills/>
                <Hline/>
            <Projects/>
       </HomeContainer> 
    )
}

Home.propTypes = {

}

export default Home
