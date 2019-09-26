import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
    width: 12rem;
    background-color: #ecfffd;
    border-radius: 10px;
    height: 5rem;
    margin: 1%;
    font-size: 1.6rem;
    box-shadow: 4px 4px 4px 0px #000
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    width: 100%;
    height: 10rem;
    background-color: #76d275;
    border: 2px solid #88c399
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem
`;

const ButtonDiv = styled.div`
    display: flex;
`;

const Navigation = (props) => {

    return (
        // Navigation Links
        // Navigation Links will be styled as buttons
        // Login/Register buttons change to User Tools / Marketplace once logged in
        // Drop down user name - logout/account settings
        <TopBar className="top-bar">
            <Title>Use My Tools</Title>
            <ButtonDiv>
                
                {!localStorage.getItem('token') ? <Button><NavLink to="/login">Login</NavLink></Button> : null}
                {!localStorage.getItem('token') ? <Button><NavLink to="/register">Register</NavLink></Button> : null}
                {localStorage.getItem('token') ? <Button><NavLink to={`/marketplace/${localStorage.getItem('username')}`}>Marketplace</NavLink></Button> : null}
                {localStorage.getItem('token') ? <Button><NavLink to={`/my-tools/${localStorage.getItem('username')}`}>My Tools</NavLink></Button> : null}
                {(!localStorage.getItem('token'))
                ? <span></span>
                : <span>
                    <Button
                    onClick ={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem('username');
                    }}
                    ><NavLink to="/login">Logout</NavLink></Button>}
                  </span>
        }
            </ButtonDiv>
        </TopBar>
    );
}
export default Navigation;