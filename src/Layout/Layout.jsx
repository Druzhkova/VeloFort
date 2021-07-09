import styled from 'styled-components';
import {     
    bike,
    dashboard,
    localLibrary,
    settings } from '../assets'
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Content>
                {children}
            </Content>
            <Nav>
                <Link to="/"><Icon src={bike} alt="Bike" /></Link>
                <Link to="/sight"><Icon src={dashboard} alt="Dashboard" /></Link>
                <Link to="/information"><Icon src={localLibrary} alt="Local library" /></Link>
                <Link to="/settings"><Icon src={settings} alt="Settings" /></Link>
            </Nav>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 411px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background: #FAFAFA;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const Content = styled.div`
    box-sizing: border-box;
    min-height: calc(100vh - 70px);
    padding: 60px 20px 15px;
    width: 100%;
`;

const Icon = styled.img`
    cursor: pointer;
`;


