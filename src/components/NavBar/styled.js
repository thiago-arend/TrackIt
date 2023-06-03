import styled from "styled-components";

export const NavBarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 2;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        margin-left: 18px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #FFF;
    }

    img {
        margin-right: 18px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;