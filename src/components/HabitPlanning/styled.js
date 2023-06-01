import styled from "styled-components";

export const HabitPlanningContainer = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 12px 18px 12px;
    width: 340px;
    height: 91px;
    background-color: #FFF;
    border: 1px solid #FFF;
    border-radius: 5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span {
            font-family: 'Lexend Deca';
            font-size: 20px;
            font-weight: 400;
            color: #666;
        }
    }

    ion-icon {
        color: #666;
        width: 24px;
        height: 26px;
        top: 6px;
        right: 6px;
        position: absolute;
    }
`;