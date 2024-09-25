import styled from 'styled-components';

export const MEMOLISTCONTAINER = styled.ul`
    width: 200px;
    min-height: 600px;
    background-color: #bcaaa4;
    position: relative;
    h3 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        padding: 15px;
    }
    button {
        position: absolute;
        bottom: 40px;
        left: 70px;
        width: 60px;
        height: 60px;
        background: #000;
        color: #fff;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }
    span {
        display: block;
        opacity: 0.5;
        text-align: center;
    }
`;
