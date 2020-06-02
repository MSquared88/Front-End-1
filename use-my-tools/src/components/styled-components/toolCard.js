import styled from "styled-components";


export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
max-width: 350px;
align-items: center;
width: 300px;
border: 1px solid yellow
border-radius: 10px;
margin: 25px;
background: #252525;
color: yellow;
`

export const PriceTag = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  padding-left: 30px;
  margin-bottom: 30px;
  p {
    min-width: 75px;
    padding: 10px;
    background: yellow;
    color: black;
    font-weight: 600;
  }
`
export const ToolContent = styled.div`
  img {
    width: 200px;
    height: 200px;
    margin: auto;
    padding-bottom: 20px;
  }
  h4 {
    font-size: 1.2rem
    margin-top: 5px;
    word-wrap: break-word;
  }
`;

export const RequestButton = styled.button`
width: 10rem;
height: 3rem;
margin: 20px 0px;
color: black;
background: yellow;
border: none;
padding: 5%;
text-decoration: none;
font-size: 1.4rem;
cursor: pointer;
`

export const ToolTitle = styled.h1`
  font-size: 2rem;
`


export const FormStyle = styled.form`
  height: 200px;
  button {
    margin-left: 15px;
    border-radius: 30px;
  }
`;