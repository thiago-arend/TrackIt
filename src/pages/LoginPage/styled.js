import styled from "styled-components";

export const LoginContainer = styled.div`
    margin: 60px auto 60px;
    width: 303px;

    font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 180px;
        height: 178px;
    }

    div {
        &:nth-child(3) {
            margin: 5px 0;
            width: 100%;
            height: 45px;

            display: flex;
            align-items: center;
            justify-content: center;

            a {
                font-size: 14px;
                text-decoration-line: underline;
                color: #52B6FF;
            }
        }
    }
`;

export const FormContainer = styled.div`
    width: 303px;

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input {
        margin: 5px 0;
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;

        &::placeholder {
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            color: #DBDBDB;
        }
    }

    button {
        margin: 5px 0;
        width: 100%;
        height: 45px;
        background-color: #52B6FF;
        border: 1px solid #52B6FF;
        border-radius: 5px;

        text-align: center;
        color: #FFF;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
    }
`;