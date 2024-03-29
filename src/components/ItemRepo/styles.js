import styled from "styled-components";

export const ItemContainer = styled.div`
    margin-top: 20px;
    width: 50vw;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";

    a.visitar {
        font-size: 28px;
        color: #478be6;
        text-decoration: none;
        font-weight: 500;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }


    p {
        font-size: 18px;
        color: #717e8b;
        margin-bottom: 10px;
    }

    a.remover {
        color: #FF0000;
        margin-top: 10px;
    }

    hr {
        border-color: #717e8b;
        margin: 10px 0;
        border-style: solid;
    }
`

export const RemoveBtn = styled.button`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    color: #d42828;
    cursor: pointer;
    background-color: #373e47;
    border: 1px solid #444c56;
    border-radius: 4px;
    padding: 5px 7px;
    font-size: 16px;
    display: flex;
    font-weight: 500;

    &:hover{
        background-color: #e72525ab;
        color: #ffffffd1;
        border-color: transparent;


        span svg{
            fill: #ffffffd1;
        }
    }
    
    span{
        margin: auto;
    }

    span svg{
        fill: #8b929a;
        padding: 0px 5px;
    }



`

export const VisitHomepage = styled.button`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    cursor: pointer;
    background-color: #373e47;
    border: 1px solid #444c56;
    border-radius: 4px;
    padding: 5px 7px;
    font-size: 16px;
    display: flex;
    font-weight: 500;

    a{
        text-decoration: none;
        margin: auto;
        color: #adbac7;
    }

    &:hover{
        background-color: #3d444e;
        border: 1px solid #444c56;
        cursor: pointer;
    }

    a svg{
        fill: #8b929a;
        padding: 0px 5px;
    }

`

export const DisabledButton = styled.button`
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    color: #717e8b;
    cursor: not-allowed;
    background-color: #373e47;
    border: 1px solid #444c56;
    border-radius: 4px;
    padding: 5px 7px;
    font-size: 16px;
    display: flex;
    font-weight: 500;
    
    span{
        margin: auto;
    }

    span svg{
        fill: #717e8b;
        padding: 0px 5px;
    }

`


export const ButtonsContainer = styled.div`
    display: flex;
    margin-right: auto;
    justify-content: flex-end;
    gap: 8px;

`