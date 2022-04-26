import React from 'react';
import Header from '../components/layouts/Header';
import styled from 'styled-components';
import theme from '../theme';
import SkillContainer from '../components/common/SkillContainer';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div className="rotate"></div>
          <motion.div initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>
            <SkillContainer title={'Frontend'} name={'frontend'} />
          </motion.div>
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex-cont"
          >
            <SkillContainer title={'Deployment'} name={'deployment'} />
            <SkillContainer title={'Design'} name={'design'} />
          </motion.div>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  ${theme.common.height}
  padding-top: 100px;
  box-sizing: border-box;
  ${theme.device.laptop} {
    height: auto;
    padding-top: 30px;
  }
`;

const Content = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding: 2rem;
  box-sizing: border-box;
  .flex-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .rotate {
    position: absolute;
    width: 100px;
    height: 100px;
    background: url('./images/Saly-43.png') no-repeat center;
    background-size: cover;
    z-index: 20;
    transform: scaleX(-1) rotate(-90deg);
    animation: moveframe 20s infinite ease-in;
    @keyframes moveframe {
      0% {
        transform: translate(-1200px, 550px) scaleX(-1) rotate(-90deg);
      }
      50% {
        transform: translate(1000px, 550px) scaleX(-1) rotate(-90deg);
      }
      51% {
        transform: translate(1000px, 550px) scaleX(-1) rotate(-45deg);
      }
      75% {
        transform: translate(500px, 550px) scaleX(-1) rotate(90deg);
      }
      76% {
        transform: translate(500px, 550px) scaleX(-1) rotate(90deg);
      }
      100% {
        transform: translate(-1200px, 550px) scaleX(-1) rotate(90deg);
      }
    }
  }
  ${theme.device.laptop} {
    flex-direction: column;
    gap: 2rem;
    .flex-cont {
      flex-direction: row;
      gap: 2rem;
    }
  }
  ${theme.device.laptop} {
    .flex-cont {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default Skills;