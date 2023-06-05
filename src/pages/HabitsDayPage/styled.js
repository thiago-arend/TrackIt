import styled from "styled-components";

export const HabitsDayContainer = styled.div`
    margin: 90px auto;
    padding: 0 18px;
    width: 340px;

    h1 {
        font-family: 'Lexend Deca';
        font-weight: 400;
        margin-bottom: 24px;
        font-size: 23px;
        color: #126BA5;
    }
`;

export const HabitContainer = styled.div`
    margin: 0 auto 16px;
    padding: 12px 18px 12px;
    width: 100%;
    height: 50px;
    background-color: ${props => props.done ? "#8FC549" : "#F79327"};
    border: 1px solid ${props => props.done ? "#E7E7E7" : "#E7E7E7"};
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 14px;
`;

export const Legenda = styled.div`
    width: 100%;
    height: 30px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    > div {
        width: 150px;

        &:nth-child(1) {
            width: 116px;
            
            div {
                ion-icon {
                    color: #8FC549;
                }
            }
        }

        &:nth-child(2) {
            
            div {
                ion-icon {
                    color: #F79327;
                }
            }
        }

        > div {
            &:nth-child(2) {
                display: flex;
                justify-content: space-between;
                align-items: center;

                font-family: "Lexend Deca";
                font-weight: 400;
                font-size: 14px;

                ion-icon {
                    width: 25px;
                    height: 25px;
                }
            }
        }
    }
`;