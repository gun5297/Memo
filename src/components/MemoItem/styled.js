import styled from 'styled-components';

export const MEMOITEMCONTAINER = styled.li`
    border-bottom: 1px solid #a1887f;
    font-size: 14px;
    transition: all 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    &.on {
        background-color: #8d6e63;
    }
    p {
        width: 100%;
        box-sizing: border-box;
        padding: 3px 10px;
    }
    i {
        opacity: 0;
        transition: all 0.3s;
        &:hover {
            color: #dd2c00;
        }
    }
    &:hover i {
        opacity: 1;
        padding: 3px 10px;
    }
`;
