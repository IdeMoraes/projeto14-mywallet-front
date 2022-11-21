import styled from "styled-components";

const Title = styled.h2`
    width: 326px;
    font-weight: bold;
    font-size: 26px;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    margin-top: 25px;
`;
const EntriesListContainer = styled.div`
    width: 326px;
    min-height: 446px;
    background-color: white;
`;
const EntriesOptions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 326px;
`;
const EntryOption = styled.div`
width: 155px;
height: 114px;
background-color: #A328D6;
color: white;
font-size: 17px;
font-weight: bold;
border-radius:  5px;
box-sizing: border-box;
padding-top: 65 px;
margin-top: 13px;
`;
const Entry = styled.div`
display: flex;
justify-content: space-between;
width: 326px;
`;
const CreatedAt = styled.div`
font-size: 16px;
color: #C6C6C6;
`;
const Description = styled.div`
font-size: 16px;
color: black;
`;
const Amount = styled.div`
font-size: 16px;
color: ${props => props.entry ? "green" : "red"};
`;

export {
    Title,
    EntriesListContainer,
    EntriesOptions,
    EntryOption,
    Entry,
    CreatedAt,
    Description,
    Amount
}