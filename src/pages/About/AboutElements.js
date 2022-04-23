import styled from 'styled-components'

export const AboutContainer = styled.section`
    
    background-color:#9f80ff;
    padding-top: 96px;
    padding-bottom: 66px;
    overflow: hidden;
    min-height:300px;
`

export const ProfileImg = styled.img`
width: 500px;
height: 500px;
border-radius: 100%;
margin-right:55px;


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
    font-weight: bold;
    font-style: italic;
    font-size: 5rem;
    font-variant: all-small-caps;
    color: #fff;
    margin-bottom: 12px;
    margin-top:50px;
   `
