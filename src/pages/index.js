import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Navbar  from '../components/Navbar'
import Sidebar from  '../components/Sidebar'
import Header from '../components/Header'
import About from './About'
import Skills from './Skills'
const Home = props => {

    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Header/>
            <About />
            <Skills/>
        </div>
    )
}

Home.propTypes = {

}

export default Home
