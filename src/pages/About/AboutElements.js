import styled from 'styled-components'

export const AboutContainer = styled.section`
    background: #141452;
    padding-top: 96px;
    padding-bottom: 66px;
    overflow: hidden;
    min-height:300px;
`

export const ProfileImg = styled.img`
width: 200px;
height: 200px;
border-radius: 100%;


@media screen and (max-width:768px){
    width: 250px;
    height: 250px;
}

`

export const AboutProfile = styled.div`
    padding:25px;
    display:flex;

    justify-content:flex-end;

@media screen and (max-width:768px){
    justify-content:center;
}

`

export const AboutContent = styled.p`
    line-height: 30px;
    color: #ccc;
`


export const AboutTitle = styled.h1`
    font: 22px/30px 'opensans-bold', sans-serif;
    color: #fff;
    margin-bottom: 12px;
   `