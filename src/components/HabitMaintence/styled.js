import styled from "styled-components";

export const HabitMaintenceContainer = styled.div`
    position: relative;
    margin: 0 auto 16px;
    padding: 12px 18px 12px;
    width: 340px;
    height: 94px;
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

        h1, span {
            font-family: 'Lexend Deca';
            font-weight: 400;
            color: #666;
        }
        h1 {
            font-size: 20px;
        }
        span {
            font-size: 13px;
            line-height: 16px;

            // span currentSequence
            &:nth-child(1) {
                color: ${props => props.done ? "#8FC549" : "#666"};
            }
            // span highestSequence
            &:nth-child(3) {
                color: #666;
            }

            //span {
            //    color: ${props => props.done ? "#8FC549" : "#666"};
            //}
        }

        &:nth-child(2) {
            width: 69px;
            height: 69px;
            background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
            border: 1px solid ${props => props.done ? "#8FC549" : "#E7E7E7"};
            border-radius: 5px;
            padding-right: 0.3px;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }


`;