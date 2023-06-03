import styled from "styled-components";

export const DaysListContainer = styled.div`
    width: 240px;
    height: 30px;

    display: flex;
    justify-content: space-between;
`;

export const StyledButton = styled.button`
    height: 30px;
    width: 30px;
    background-color: ${props => (props.isChosed) ? "#CFCFCF" : "#FFF"};
    border: 1px solid ${props => (props.isChosed) ? "#CFCFCF" : "#D4D4D4"};
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => (props.isChosed) ? "#FFF" : "#DBDBDB"};
    font-family: 'Lexend Deca';
    font-size: 20px;
`;