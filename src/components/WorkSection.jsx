import React, { useState } from 'react';
import theme from '../theme';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorkSection = () => {
  const [isChoice, setIsChoice] = useState({
    isPersonal: false,
    isTeam: false,
    isCareer: false,
  });

  const handleClickArticle = (e) => { 
    e.preventDefault();
    if (e.target.id === 'personal' || e.target.alt === '개인 작업 이미지' || e.target.textContent === 'Personal') {
      setIsChoice({
        ...isChoice,
        isPersonal: true,
      });
    } else if (e.target.id === 'team' || e.target.alt === '팀 작업 이미지' || e.target.textContent === 'Team') {
      setIsChoice({
        ...isChoice,
        isTeam: true,
      });
    } else if (e.target.id === 'career' || e.target.alt === '업무 이미지' || e.target.textContent === 'Career') {
      setIsChoice({
        ...isChoice,
        isCareer: true,
      });
    }
  }
  console.log(isChoice)
  return (
    <Section>
      <article className="">
        <motion.article
          onClick={handleClickArticle}
          id="personal"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="personal-article project-article"
        >
          <img
            src="./images/Saly-12.png"
            alt="개인 작업 이미지"
            onClick={handleClickArticle}
            className={isChoice.isPersonal ? 'hidden' : ''}
          />
          <h2 className={isChoice.isPersonal ? 'title-smail' : 'title'}>Personal</h2>
          {isChoice.isPersonal && <ul className="">Personal</ul>}
        </motion.article>
        <motion.article
          onClick={handleClickArticle}
          id="team"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="team-article project-article"
        >
          <img
            src="./images/Saly-31.png"
            alt="팀 작업 이미지"
            onClick={handleClickArticle}
            className={isChoice.isTeam ? 'hidden' : ''}
          />
          <h2 className={isChoice.isTeam ? 'title-smail' : 'title'}>Team</h2>
          {!isChoice.isTeam && <div className=""></div>}
        </motion.article>
      </article>
      <article className="carrer-article">
        <motion.article
          onClick={handleClickArticle}
          id="career"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="career-article project-article"
        >
          <img
            src="./images/Saly-19.png"
            alt="업무 이미지"
            onClick={handleClickArticle}
            className={isChoice.isCareer ? 'hidden' : ''}
          />
          <h2 className={isChoice.isCareer ? 'title-smail' : 'title'}>Career</h2>
          {isChoice.isCareer &&
            <ul className="">
              <li>
              </li>
            </ul>
          }
        </motion.article>
      </article>
    </Section>
  );
}

const Section = styled.section`
  ${theme.common.height}
  display: flex;
  justify-content: center;
  color: ${theme.colors.white};
  .project-article,
  .carrer-article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2.5rem 0 2.5rem 3rem;
    border-radius: 2rem;
    cursor: pointer;
    h2 {
      font-size: 10rem;
      font-family: 'SpoqaHanSansNeo-Medium';
      text-shadow: 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5,
        -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5,
        -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5;
    }
    img {
      width: 41.5%;
      object-fit: cover;
    }
  }
  .personal-article,
  .team-article,
  .career-article {
    position: relative;
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .hidden {
      display: none;
    }
    .title-smail {
      font-size: 2rem;
      text-shadow: none;
      padding-bottom: .3rem;
      border-bottom: 3px solid ${theme.colors.white};
      box-sizing: border-box;
    }
  }
  .personal-article {
    background-color: #d0b1bf;
  }
  .team-article {
    background-color: #827ed8;
  }
  .career-article {
    margin: -0.5rem 3rem 0 0;
    background-color: #568eb2;
    img {
      width: 87.5%;
      object-fit: cover;
    }
  }
`;

export default WorkSection;