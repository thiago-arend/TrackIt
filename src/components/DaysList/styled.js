import styled from "styled-components";

export const DaysListContainer = styled.div`
    width: 226px;
    height: 30px;

    display: flex;
    justify-content: space-between;

    button {
        height: 30px;
        width: 30px;
        background-color: #FFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        color: #DBDBDB;
        font-family: 'Lexend Deca';
        font-size: 20px;

        &:disabled {
            background-color: #CFCFCF;
            border: 1px solid #CFCFCF;
            color: #FFF;
        }
    }
`;