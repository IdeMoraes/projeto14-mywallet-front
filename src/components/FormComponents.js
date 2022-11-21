import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 25px;
    align-self: ${(props)=>props.alignSelf||'auto'};
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    margin-bottom: 32px;
`;
const Input = styled.input`
    background-color: white;
    padding-left: 15px;
    border-radius: 5px;
    height: 58px;
    width: 326px;
    font-size: 20px;
    ::placeholder {
        opacity: 1;
    }
`;
const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    color: white;
`;
const StyledLink = styled(Link)`
    font-weight: bold;
    font-size: 15px;
`;

export{
    Container, Form, Input, Button, StyledLink
}