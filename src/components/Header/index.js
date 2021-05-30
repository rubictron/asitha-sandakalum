import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Video from '../../videos/background_video.mp4'
import {
HeaderContainer,
HeaderBg,
VideoBg,
HeaderBtnWrapper,
HeaderP,
HeaderH1,
HederContent,
ArrowForward,
ArrowRight
} from './HeaderElements'
import {ButtonS} from '../Button/ButtonElements'

const Header = props => {

    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeaderContainer id="home">
            <HeaderBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeaderBg>
            <HederContent>
                <HeaderH1>Asitha Sandakalum</HeaderH1>
                <HeaderP>
                    I am a Full Stack Developer.Graduate from University Of Ruhuna Srilanka.

                </HeaderP>
                <HeaderBtnWrapper>
                    <ButtonS 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        to="resume"
                        primary='true'>
                        Get Start {hover ? <ArrowForward/> :<ArrowRight/>}
                    </ButtonS> 
                </HeaderBtnWrapper>
            </HederContent>
        </HeaderContainer>
    )
}

Header.propTypes = {

}

export default Header
