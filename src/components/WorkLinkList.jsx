import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { motion } from 'framer-motion';
import { useRecoilValue, useRecoilState } from 'recoil';
import { scrollArrowOnOffState, linkNameState } from '../atom/atomState';

const WorkLinkList = () => {
  const isOn = useRecoilValue(scrollArrowOnOffState);
  const [, setLink] = useRecoilState(linkNameState);
  const [isList, setIsList] = useState(false);

  useEffect(() => {
    if (isOn) {
      if (isList === false) {
        setIsList(!isList)
      } else { 
        setIsList(isList)
        setIsList(!isList)
        setTimeout(() => {
          setIsList(true)
        }, 800)
      }
      }
  }, [isOn, isList]);

  const handleClickLinkName = (e) => {
    switch (e.target.textContent) {
      case 'Portfolio':
        return setLink('Portfolio');
      case 'Futurama':
        return setLink('Futurama');
      case '프리온보딩프론트엔드':
        return setLink('발란');
      case '청귤마켓':
        return setLink('청귤마켓');
      default:
        return;
    }
  };
  return (
    <Container>
      {isList && (
        <ul>
          <motion.li
            layout
            initial={{ opacity: 0, y: '-140%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <h3 className="pinned-title">Pinned Links</h3>
            <span>4</span>
          </motion.li>
          <motion.li
            layout
            initial={{ opacity: 0, y: '-130%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1.5, delay: 1.4 }}
            onClick={handleClickLinkName}
            className="pinned-ani"
          >
            <p>Portfolio</p>
            <span>Personal</span>
          </motion.li>
          <motion.li
            layout
            initial={{ opacity: 0, y: '-120%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1.5, delay: 1 }}
            onClick={handleClickLinkName}
            className="pinned-ani"
          >
            <p>Futurama</p>
            <span>Personal</span>
          </motion.li>
          <motion.li
            layout
            initial={{ opacity: 0, y: '-110%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1.5, delay: 0.7 }}
            onClick={handleClickLinkName}
            className="pinned-ani"
          >
            <p>프리온보딩프론트엔드</p>
            <span>Personal</span>
          </motion.li>
          <motion.li
            layout
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0' }}
            transition={{ duration: 1.5 }}
            onClick={handleClickLinkName}
            className="pinned-ani"
          >
            <p>청귤마켓</p>
            <span>Team</span>
          </motion.li>
        </ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  float: left;
  margin-bottom: 12%;
  li {
    width: 140%;
    padding: 2rem 1rem 1rem 3rem;
    border-bottom: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};
    overflow: auto;
    font-size: 1.2rem;
    cursor: pointer;
    .pinned-title {
      float: left;
      font-family: 'SpoqaHanSansNeo-Medium';
      font-size: 1.6rem;
    }
    span {
      float: right;
      font-size: 1rem;
    }
    p {
      font-size: 1.2rem;
      float: left;
    }
  }
  .pinned-ani {
    transition: all 0.5s;
    &:hover {
      background: url('./images/arrow-left.png') no-repeat left 5px bottom 20px;
      background-size: 16px contain;
    }
  }
`;

export default WorkLinkList;
