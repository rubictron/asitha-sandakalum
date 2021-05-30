import styled from 'styled-components'
import {Link} from 'react-scroll'

export const ButtonS = styled(Link)`
    border-radius:50px;
    background : ${({primary}) => primary ? "#1a75ff":"#010606" };
    white-space:norwap;
    padding: ${({big}) => big ? '14px 48px': '12px 38px'};
    color:#fff;
    font-size:${({big}) => big ? '20px': '16px'};
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.2s ease-in-out;

    &:hover{
        transition:all 0.2s ease-in-out;
        background : ${({primary}) => primary ? "#000":"#1a75ff" };
}
`

