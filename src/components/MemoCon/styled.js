import styled from 'styled-components';

export const MEMOCONCONTAINER = styled.div`
    width: 400px;
    min-height: 600px;
    background: #efebe9;
    padding: 30px;
    box-sizing: border-box;
    position: relative;
    h3 {
    }
    input {
        width: 100%;
        &:nth-child(1) {
            font-size: 30px;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border: none;
            border-bottom: 1px solid #3e2723;
            background: rgba(0, 0, 0, 0);
            outline: none;
        }
        &:nth-child(2) {
            border: none;
            background: rgba(0, 0, 0, 0);
            outline: none;
        }
    }
    span {
        display: block;
        position: absolute;
        right: 20px;
        bottom: 30px;
    }
`;
