import styled from 'styled-components';

export const MEMONOCONCONTAINER = styled.div`
    width: 400px;
    min-height: 600px;
    background: #efebe9;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    h3 {
        font-size: 25px;
        text-align: center;
        margin-bottom: 30px;
    }
    p {
        color: #999;
        opacity: 0.5;
    }
    button {
        position: absolute;
        bottom: 30px;
        right: 20px;
        width: 100px;
        border: none;
        cursor: pointer;
        background: #000;
        color: #fff;
        padding: 10px;
        border-radius: 10px;
        transition: all 0.3s;
        opacity: 0.8;
        &:hover {
            transform: scale(1.1);
            opacity: 1;
        }
    }
`;
