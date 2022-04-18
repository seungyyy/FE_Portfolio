import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const Header = () => {
  return (
    <Headers>
      <nav>
        <div>
          <img src='./images/logo.png' alt='logo' className="logo-img"/>
          <></>
        </div>
        <ul className="nav-list">
          <li><button>Home</button></li>
          <li><button>Works</button></li>
          <li><button>Skills</button></li>
          <li><button>Resume</button></li>
        </ul>
      </nav>
    </Headers>
  );
}

const Headers = styled.header`
  padding: 2.4rem;
  box-sizing: border-box;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-img {
      width: 50px;
      object-fit: cover;
    }
    .nav-list {
      display: flex;
      li {
        margin-right: 0;
        &:not(:first-child) {
          margin-left: 5rem;
        }
      }
      button {
        color: ${theme.colors.white};
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
  }
`;

export default Header;
