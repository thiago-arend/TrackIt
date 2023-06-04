import styled from "styled-components";

export const TodayContainer = styled.div`
    margin: 90px auto;
    width: fit-content;
`;

export const DateContainer = styled.div`
    height: 50px;
    width: 340px;
    margin-bottom: 24px;

    h1, span {
        font-family: 'Lexend Deca';
        font-weight: 400;
    }
    h1 {
        font-size: 23px;
        color: #126BA5;
    }
    span {
        color: ${props => props.alteraSpan ? "#8FC549" : "#BABABA"};
        font-size: 18px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;