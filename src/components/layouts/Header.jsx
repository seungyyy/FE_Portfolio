import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigation = useNavigate();

  const handleNavigate = (e) => { 
    if (e.target.tagName === 'IMG' || e.target.textContent === 'Home') {
      navigation('/');
      window.location.href = '#';
    } else if (e.target.textContent === 'Career/Project') {
      navigation('/career-project');
    } else if (e.target.textContent === 'Skills') {
      navigation('/skills');
    } 
  }

  return (
    <Headers>
      <nav>
        <div onClick={handleNavigate}>
          <img src="./images/logo.png" alt="logo" className="logo-img" />
        </div>
        <ul className="nav-list">
          <li onClick={handleNavigate}>
            <button>Home</button>
          </li>
          <li onClick={handleNavigate}>
            <button>Career/Project</button>
          </li>
          <li onClick={handleNavigate}>
            <button>Skills</button>
          </li>
        </ul>
      </nav>
    </Headers>
  );
}

const Headers = styled.header`
  padding: 2.4rem 3rem;
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
