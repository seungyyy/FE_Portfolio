import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import ModalContact from './ModalContact';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {isOpen && <ModalContact isOpen={setIsOpen} />}
      <h1 className="main-tit">Hello, I'm an Front-end Developer.</h1>
      <p className="main-txt">
        안녕하세요. 프론트엔드 개발자 이승연입니다. <br />
        배포를 통한 사용자 피드백과 비즈니스적 관점에서 고객 UI/UX에 대해 한번 더 생각하는 개발자입니다. <br />
        서버 api와 연결해 사이트 배포 경험을 통해서 설계와 협업에 대해 배울 수 있었습니다. <br />
        서비스에 대해 생각하고 몰입하여 디테일한 것도 놓치지 않는 개발자입니다.
      </p>
      <ul className="about-list">
        <li>
          <button onClick={() => { setIsOpen(!isOpen)} } className="contact-btn">Contact me</button>
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10rem;
  padding: 2.4rem;
  box-sizing: border-box;
  .main-tit {
    font-size: 3rem;
    font-weight: bold;
    color: ${theme.colors.white};
  }
  .main-txt {
    margin-top: 10px;
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${theme.colors.white};
  }
  .about-list {
    margin-top: 2rem;
    .contact-btn {
      padding: 0.7rem 1rem;
      color: ${theme.colors.white};
      font-size: 1rem;
      border-radius: 3px;
      cursor: pointer;
      background: linear-gradient(-45deg, #fcd900, #eb606e, #0052cd, #5b5cfe);
      animation: gradientBackground 13s ease infinite;
      background-size: 400% 400%;
      @keyframes gradientBackground {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  }
`;

export default Main;