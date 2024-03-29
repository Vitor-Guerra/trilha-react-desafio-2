import styled from "styled-components";

export const InputContainer = styled.div`

    margin: 7px;
    

    input {
        background: transparent;
        border: 1px solid #444c56;
        border-radius: 7px;
        min-width: 22vw;
        min-height: 5vh;
        padding: 0px 5px;
        color: #c4cad0;
        font-size: 20px;

        
        &:focus-visible {
            border: 1px solid #4f85ff;
            outline: blue auto 0px;
        }
    }


`