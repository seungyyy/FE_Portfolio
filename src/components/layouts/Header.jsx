import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const navigation = useNavigate();
  const [isOn, setIsOn] = useState(false);

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
        <ul className={isOn ? 'show-menu nav-list' : 'hidden nav-list'}>
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
        <FaBars size={35} className="menu-bar" color={theme.colors.white} onClick={() => { setIsOn(!isOn)} } />
      </nav>
    </Headers>
  );
}

const Headers = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 3rem;
    box-sizing: border-box;
    .logo-img {
      width: 50px;
      object-fit: cover;
    }
    .menu-bar {
      display: none;
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
    ${theme.device.tablet} {
      .menu-bar {
        display: block;
      }
      .nav-list.hidden {
        display: none;
      }
      .show-menu.nav-list {
        position: fixed;
        right: 40px;
        top: 82px;
        flex-direction: column;
        text-align: right;
        z-index: 30;
        li {
          margin: 0;
          padding-bottom: 10px;
          button {
            font-size: 1rem;
          }
        }
      }
    }
    ${theme.device.mobile} {
      padding: 2rem 1.8rem;
      .logo-img {
        width: 37px;
        object-fit: cover;
      }
      .menu-bar {
        width: 25px;
      }
      .show-menu.nav-list {
        right: 24px;
        font-size: 18px;
      }
    }
  }
`;

export default Header;
