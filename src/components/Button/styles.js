import styled from "styled-components";

export const ButtonContainer = styled.button`

    background-color: #373e47;
    border: 1px solid #444c56;
    color: #adbac7;
    border-radius: 5px;
    font-size: 16px;

    min-height: 4vh;
    min-width: 5vw;

    margin: 10px;

    &:not(:disabled):hover {
        background-color: #3d444e;
        border: 1px solid #444c56;
        cursor: pointer;
    }

`

export const Loading = styled.div`
    height: 4px;
    --c:no-repeat linear-gradient(#6a7078 0 0);
    background: var(--c),var(--c),#2b2d30;
    background-size: 60% 100%;
    animation: l16 3s infinite;
    margin: auto 10px;
    

    @keyframes l16 {
        0%   {background-position:-150% 0,-150% 0}
        66%  {background-position: 250% 0,-150% 0}
        100% {background-position: 250% 0, 250% 0}
    }
`