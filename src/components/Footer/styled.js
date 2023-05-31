import styled from "styled-components";

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFF;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: #52B6FF;
        margin: 0 18px;
    }
`;

export const TodayContainer = styled.div`
    position: relative;
    margin-bottom: 45px;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;
`