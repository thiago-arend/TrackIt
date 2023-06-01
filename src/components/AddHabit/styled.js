import styled from "styled-components";

export const AddHabitContainer = styled.div`
    margin: 0 auto;
    padding: 18px 18px;
    width: 340px;
    height: 180px;
    background-color: #FFF;
    border: 1px solid #FFF;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        position: relative;
        margin-bottom: 10px;
        width: 100%;
        height: 45px;
        border-radius: 5px;
        background-color: #FFF;
        border: 1px solid #D4D4D4;

        &::placeholder {
            position: absolute;
            color: #D4D4D4;
            font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 20px;
            left: 11px;
            top: 7px;
        }
    }

    button {
        width: 84px;
        height: 35px;
        border-radius: 5px;
        background-color: #FFF;
        border: 1px solid #FFF;
        
        color: #52B6FF;
        font-family: 'Lexend Deca';
        font-size: 16px;
        font-weight: 400;

        &:nth-child(2) {
            background-color: #52B6FF;
            border: 1px solid #52B6FF;
            color: #FFF;
        }
    }

    > div {
        width: 100%;

        &:nth-child(2) {
            display: flex;
            justify-content: end;
            gap: 12px;
        }
    }
`;