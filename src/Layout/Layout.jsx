import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = ({ children }) => {
  const [activePage, setActivePage] = useState('');

  return (
    <Wrapper>
      <Content>
        {children}
      </Content>
      <Nav>
        <Link to="/">
          <Svg
            active={activePage === 'map'}
            onClick={() => setActivePage('map')}
            width="30"
            height="26"
            viewBox="0 0 30 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M21.875 2.6875C21.875 4.0625 20.75 5.1875 19.375 5.1875C18 5.1875 16.875 4.0625 16.875 2.6875C16.875 1.3125 18 0.1875 19.375 0.1875C20.75 0.1875 21.875 1.3125 21.875 2.6875ZM0 19.5625C0 16.0625 2.75 13.3125 6.25 13.3125C9.75 13.3125 12.5 16.0625 12.5 19.5625C12.5 23.0625 9.75 25.8125 6.25 25.8125C2.75 25.8125 0 23.0625 0 19.5625ZM6.25 23.9375C3.875 23.9375 1.875 21.9375 1.875 19.5625C1.875 17.1875 3.875 15.1875 6.25 15.1875C8.625 15.1875 10.625 17.1875 10.625 19.5625C10.625 21.9375 8.625 23.9375 6.25 23.9375ZM23.875 12.0625C21.25 12.0625 19.125 11.0625 17.5 9.4375L16.5 8.4375L13.5 11.4375L16.25 14.3125V22.0625H13.75V15.8125L9.74999 12.3125C9.24999 11.9375 8.99999 11.3125 8.99999 10.5625C8.99999 9.9375 9.24999 9.3125 9.74999 8.8125L13.25 5.3125C13.625 4.8125 14.25 4.5625 15 4.5625C15.75 4.5625 16.375 4.8125 17 5.3125L19.375 7.6875C20.5 8.8125 22 9.5625 23.875 9.5625V12.0625ZM23.75 13.3125C20.25 13.3125 17.5 16.0625 17.5 19.5625C17.5 23.0625 20.25 25.8125 23.75 25.8125C27.25 25.8125 30 23.0625 30 19.5625C30 16.0625 27.25 13.3125 23.75 13.3125ZM19.375 19.5625C19.375 21.9375 21.375 23.9375 23.75 23.9375C26.125 23.9375 28.125 21.9375 28.125 19.5625C28.125 17.1875 26.125 15.1875 23.75 15.1875C21.375 15.1875 19.375 17.1875 19.375 19.5625Z" />
          </Svg>
        </Link>
        <Link to="/sight">
          <Svg
            active={activePage === 'sight'}
            onClick={() => setActivePage('sight')}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M0.75 0.75H10.75V13.25H0.75V0.75ZM23.25 0.75H13.25V8.25H23.25V0.75ZM8.25 10.75V3.25H3.25V10.75H8.25ZM20.75 5.75V3.25H15.75V5.75H20.75ZM20.75 13.25V20.75H15.75V13.25H20.75ZM8.25 20.75V18.25H3.25V20.75H8.25ZM23.25 10.75H13.25V23.25H23.25V10.75ZM0.75 15.75H10.75V23.25H0.75V15.75Z" />
          </Svg>
        </Link>
        <Link to="/information">
          <Svg
            active={activePage === 'information'}
            onClick={() => setActivePage('information')}
            width="24"
            height="28"
            viewBox="0 0 24 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M17 5.53125C17 8.29375 14.7625 10.5312 12 10.5312C9.2375 10.5312 7 8.29375 7 5.53125C7 2.76875 9.2375 0.53125 12 0.53125C14.7625 0.53125 17 2.76875 17 5.53125ZM14.5 5.53125C14.5 4.15625 13.375 3.03125 12 3.03125C10.625 3.03125 9.5 4.15625 9.5 5.53125C9.5 6.90625 10.625 8.03125 12 8.03125C13.375 8.03125 14.5 6.90625 14.5 5.53125ZM12 13.7187C9.05 10.9688 5.1 9.28125 0.75 9.28125V23.0312C5.1 23.0312 9.05 24.7187 12 27.4687C14.95 24.7312 18.9 23.0312 23.25 23.0312V9.28125C18.9 9.28125 14.95 10.9688 12 13.7187ZM12 24.2187C14.5875 22.3187 17.5875 21.1187 20.75 20.6937V12.0062C18.125 12.4812 15.6875 13.6937 13.7 15.5437L12 17.1312L10.3 15.5312C8.3125 13.6812 5.875 12.4687 3.25 11.9937V20.6812C6.4125 21.1062 9.425 22.3187 12 24.2187Z" />
          </Svg>
        </Link>
        <Link to="/settings">
          <Svg
            active={activePage === 'settings'}
            onClick={() => setActivePage('settings')}
            width="26"
            height="26"
            viewBox="0 0 26 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M22.378 13C22.378 13.425 22.3405 13.825 22.2905 14.225L24.928 16.2875C25.1655 16.475 25.228 16.8125 25.078 17.0875L22.578 21.4125C22.4655 21.6125 22.253 21.725 22.0405 21.725C21.9655 21.725 21.8905 21.7125 21.8155 21.6875L18.703 20.4375C18.053 20.925 17.353 21.35 16.5905 21.6625L16.1155 24.975C16.078 25.275 15.8155 25.5 15.503 25.5H10.503C10.1905 25.5 9.92797 25.275 9.89047 24.975L9.41547 21.6625C8.65297 21.35 7.95297 20.9375 7.30297 20.4375L4.19047 21.6875C4.12797 21.7125 4.05297 21.725 3.97797 21.725C3.75297 21.725 3.54047 21.6125 3.42797 21.4125L0.927973 17.0875C0.777973 16.8125 0.840473 16.475 1.07797 16.2875L3.71547 14.225C3.66547 13.825 3.62797 13.4125 3.62797 13C3.62797 12.5875 3.66547 12.175 3.71547 11.775L1.07797 9.7125C0.840473 9.525 0.765473 9.1875 0.927973 8.9125L3.42797 4.5875C3.54047 4.3875 3.75297 4.275 3.96547 4.275C4.04047 4.275 4.11547 4.2875 4.19047 4.3125L7.30297 5.5625C7.95297 5.075 8.65297 4.65 9.41547 4.3375L9.89047 1.025C9.92797 0.725 10.1905 0.5 10.503 0.5H15.503C15.8155 0.5 16.078 0.725 16.1155 1.025L16.5905 4.3375C17.353 4.65 18.053 5.0625 18.703 5.5625L21.8155 4.3125C21.878 4.2875 21.953 4.275 22.028 4.275C22.253 4.275 22.4655 4.3875 22.578 4.5875L25.078 8.9125C25.228 9.1875 25.1655 9.525 24.928 9.7125L22.2905 11.775C22.3405 12.175 22.378 12.575 22.378 13ZM19.878 13C19.878 12.7375 19.8655 12.475 19.8155 12.0875L19.6405 10.675L20.753 9.8L22.0905 8.7375L21.2155 7.225L19.628 7.8625L18.303 8.4L17.1655 7.525C16.6655 7.15 16.1655 6.8625 15.628 6.6375L14.303 6.1L14.103 4.6875L13.8655 3H12.128L11.878 4.6875L11.678 6.1L10.353 6.6375C9.84048 6.85 9.32798 7.15 8.79048 7.55L7.66548 8.4L6.36548 7.875L4.77798 7.2375L3.90298 8.75L5.25298 9.8L6.36548 10.675L6.19048 12.0875C6.15298 12.4625 6.12798 12.75 6.12798 13C6.12798 13.25 6.15298 13.5375 6.19048 13.925L6.36548 15.3375L5.25298 16.2125L3.90298 17.2625L4.77798 18.775L6.36548 18.1375L7.69048 17.6L8.82798 18.475C9.32798 18.85 9.82798 19.1375 10.3655 19.3625L11.6905 19.9L11.8905 21.3125L12.128 23H13.878L14.128 21.3125L14.328 19.9L15.653 19.3625C16.1655 19.15 16.678 18.85 17.2155 18.45L18.3405 17.6L19.6405 18.125L21.228 18.7625L22.103 17.25L20.753 16.2L19.6405 15.325L19.8155 13.9125C19.853 13.5375 19.878 13.2625 19.878 13ZM13.003 8C10.2405 8 8.00298 10.2375 8.00298 13C8.00298 15.7625 10.2405 18 13.003 18C15.7655 18 18.003 15.7625 18.003 13C18.003 10.2375 15.7655 8 13.003 8ZM10.503 13C10.503 14.375 11.628 15.5 13.003 15.5C14.378 15.5 15.503 14.375 15.503 13C15.503 11.625 14.378 10.5 13.003 10.5C11.628 10.5 10.503 11.625 10.503 13Z" />
          </Svg>
        </Link>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 411px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    background: #ffffff;
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
    padding: 30px 20px 15px;
    width: 100%;
`;

const Svg = styled.svg`
    ${(props) => (props.active
    ? 'fill:#0B24FB;'
    : 'fill:#BEBEBE;')}
    cursor: pointer;
    &:hover {
        fill:#0B24FB;;
    }
`;
