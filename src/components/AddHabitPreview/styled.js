import styled from "styled-components";

export const AddHabitPreviewContainer = styled.div`
    width: 100%;
    height: 90px;
    margin-top: 70px;

    display: flex;
    justify-content: space-between;;
    align-items: center;

    span {
        margin-left: 18px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 23px;
        color: #126BA5
    }

    button {
        margin-right: 18px;
        background-color: #52B6FF;
        border: 1px solid #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        padding: 0px;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 27px;
        color: #FFF;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;