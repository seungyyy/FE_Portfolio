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
              <button className="nav-list-button">Home</button>
            </li>
            <li onClick={handleNavigate} className={isMenu ? '' : 'menu-hidden'}>
              <button className="nav-list-button">Career/Project</button>
            </li>
            <li onClick={handleNavigate} className={isMenu ? '' : 'menu-hidden'}>
              <button className="nav-list-button">Skills</button>
            </li>
          </ul>
        </div>
      </nav>
    </Headers>
  );
};

const Headers = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.4rem 3rem;
    box-sizing: border-box;
  }
  .logo-img {
    width: 50px;
    object-fit: cover;
  }
  .menu-bar {
    width: 55px;
    padding: 0;
    object-fit: cover;
  }
  .menu-hidden {
    display: none;
  }
  .nav-list-button {
    color: ${theme.colors.white};
    font-size: 1.4rem;
    line-height: 1.5;
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
  ${theme.device.mobile} {
    nav {
      padding: 2rem 1.8rem;
      .logo-img {
        width: 37px;
        object-fit: cover;
      }
      .menu-bar svg {
        width: 25px;
      }
      .nav-column-list {
        margin-top: 8px;
        .nav-list-button {
          margin-right: 36px;
          font-size: 18px;
          line-height: 1;
        }
      }
    }
  }
`;

export default MenuBar;
