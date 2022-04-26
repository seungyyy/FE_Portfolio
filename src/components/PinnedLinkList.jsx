import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { motion } from 'framer-motion';
import { useRecoilValue, useRecoilState } from 'recoil';
import { scrollArrowOnOffState, linkNameState } from '../atom/atomState';

const PinnedLinkList = () => {
  const isOn = useRecoilValue(scrollArrowOnOffState);
  const [, setLink] = useRecoilState(linkNameState);
  const [isList, setIsList] = useState(false);

  useEffect(() => {
    if (isOn) {
      if (isList === false) {
        setIsList(!isList);
      } else {
        setIsList(isList);
        setIsList(!isList);
        setTimeout(() => {
          setIsList(true);
        }, 800);
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
            initial={{ opacity: 0, y: '-150%' }}
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
            <img src="./images/svg/angle-double-left.svg" alt="" />
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
            <img src="./images/svg/angle-double-left.svg" alt="" className="img-hidden" />
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
            <img src="./images/svg/angle-double-left.svg" alt="" className="img-hidden" />
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
            <img src="./images/svg/angle-double-left.svg" alt="" className="img-hidden" />
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
    width: 150%;
    padding: 2rem 2rem 2rem 3rem;
    border-bottom: 2px solid ${theme.colors.white};
    color: ${theme.colors.white};
    overflow: auto;
    box-sizing: border-box;
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
      font-size: 1.3rem;
      float: left;
    }
  }
  .pinned-ani {
    position: relative;
    &:hover {
      img {
        opacity: 1;
      }
    }
    img {
      position: absolute;
      width: 50px;
      left: 0;
      top: 20%;
      opacity: 0;
    }
  }
  ${theme.device.tablet} {
    float: none;
    li {
      width: 350px;
      padding: 1.5rem;
      .pinned-title {
        font-size: 1.1rem;
      }
      span {
        font-size: 0.7rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
    .pinned-ani {
      img {
        display: none;
      }
    }
  }
`;

export default PinnedLinkList;
