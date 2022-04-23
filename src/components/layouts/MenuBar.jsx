import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const MenuBar = () => {
  const navigation = useNavigate();
  const [isMenu, setIsMenu] = useState(false);

  const handleNavigate = (e) => {
    if (e.target.tagName === 'IMG' || e.target.textContent === 'Home') {
      navigation('/');
      window.location.href = '#';
    } else if (e.target.textContent === 'Career/Project') {
      navigation('/career-project');
    } else if (e.target.textContent === 'Skills') {
      navigation('/skills');
    } else if (e.target.textContent === 'Resume') {
      console.log('resume');
    }
  };

  return (
    <Headers>
      <nav className={isMenu ? 'menu-column' : ''}>
        <div onClick={handleNavigate}>
          <img src="./images/logo.png" alt="logo" className="logo-img" />
        </div>
        <div>
          <button
            onClick={() => {
              setIsMenu(!isMenu);
            }}
            className="menu-bar"
          >
            <FaBars size={35} />
          </button>
          <ul className={isMenu ? 'nav-column-list' : 'nav-list'}>
            <li onClick={handleNavigate} className={isMenu ? '' : 'menu-hidden'}>
              <button>Home</button>
            </li>
            <li onClick={handleNavigate} className={isMenu ? '' : 'menu-hidden'}>
              <button>Career/Project</button>
            </li>
            <li onClick={handleNavigate} className={isMenu ? '' : 'menu-hidden'}>
              <button>Skills</button>
            </li>
            <li onClick={handleNavigate} className={isMenu ? '' : 'menu-hidden'}>
              <button>Resume</button>
            </li>
          </ul>
        </div>
      </nav>
    </Headers>
  );
};

const Headers = styled.header`
  padding: 2.4rem 3rem;
  box-sizing: border-box;
  nav {
    display: flex;
    justify-content: space-between;
  }
  .logo-img {
    width: 50px;
    object-fit: cover;
  }
  .menu-bar {
    width: 55px;
    object-fit: cover;
  }
  .menu-hidden {
    display: none;
  } 
  button {
    color: ${theme.colors.white};
    cursor: pointer;
  }
  .menu-column {
    position: relative;
    .nav-column-list {
      position: absolute;
      text-align: right;
      top: 70px;
      right: 0;
      z-index: 20;
      li {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default MenuBar;
