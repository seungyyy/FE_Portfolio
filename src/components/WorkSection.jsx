import React, { useState } from 'react';
import theme from '../theme';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CareerListContainer from './CareerListContainer';
import TeamListContainer from './TeamListContainer';
import PersonalListContainer from './PersonalListContainer';

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
      if (isChoice.isCareer === true || isChoice.isTeam === true) {
        setIsChoice({
          isPersonal: true,
          isTeam: false,
          isCareer: false,
        });
      }
    } else if (e.target.id === 'team' || e.target.alt === '팀 작업 이미지' || e.target.textContent === 'Team') {
      setIsChoice({
        ...isChoice,
        isTeam: true,
      });
      if (isChoice.isPersonal === true || isChoice.isCareer === true) {
        setIsChoice({
          isTeam: true,
          isPersonal: false,
          isCareer: false,
        });
      }
    } else if (e.target.id === 'career' || e.target.alt === '업무 이미지' || e.target.textContent === 'Career') {
      setIsChoice({
        ...isChoice,
        isCareer: true,
      });
      if (isChoice.isPersonal === true || isChoice.isTeam === true) {
        setIsChoice({
          isCareer: true,
          isTeam: false,
          isPersonal: false,
        });
      }
    }
  }

  return (
    <Section>
      <article>
        <motion.article
          onClick={handleClickArticle}
          id="personal"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={`${
            isChoice.isTeam
              ? ' personal-article-sm personal-article project-article'
              : 'personal-article project-article'
          }`}
        >
          <img
            src="./images/Saly-12.png"
            alt="개인 작업 이미지"
            onClick={handleClickArticle}
            className={isChoice.isPersonal ? 'hidden' : ''}
          />
          <h2 className={isChoice.isPersonal ? 'title-smail' : 'title'}>Personal</h2>
          {isChoice.isPersonal && <PersonalListContainer />}
        </motion.article>
        <motion.article
          onClick={handleClickArticle}
          id="team"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className={`${
            isChoice.isPersonal ? ' team-article-sm team-article project-article' : 'team-article project-article'
          }`}
        >
          <img
            src="./images/Saly-31.png"
            alt="팀 작업 이미지"
            onClick={handleClickArticle}
            className={isChoice.isTeam ? 'hidden' : ''}
          />
          <h2 className={isChoice.isTeam ? 'title-smail' : 'title'}>Team</h2>
          {isChoice.isTeam && <TeamListContainer />}
        </motion.article>
      </article>
      <article>
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
          {isChoice.isCareer && <CareerListContainer />}
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
      ${theme.common.textShadow}
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
      flex: none;
      margin-right: auto;
      font-size: 2rem;
      text-shadow: none;
      padding: 1.5rem 0 0.3rem 3rem;
      border-bottom: 3px solid ${theme.colors.black};
      color: ${theme.colors.black};
      box-sizing: border-box;
    }
  }
  .personal-article {
    background-color: #d0b1bf;
  }
  .team-article {
    background-color: #827ed8;
  }
  .team-article-sm,
  .personal-article-sm {
    width: 35%;
    object-fit: cover;
    h2 {
      font-size: 5rem;
    }
  }
  .career-article {
    background-color: #568eb2;
    margin: 2.5rem 3rem 2.5rem 3rem;
    img {
      width: 90.5%;
      object-fit: cover;
    }
  }
  ${theme.device.laptop} {
    height: auto;
    flex-direction: column;
    .project-article,
    .carrer-article {
      flex-direction: column;
      margin-right: 3rem;
      h2 {
        font-size: 3rem;
      }
      img {
        width: 25%;
        object-fit: cover;
      }
    }
  }
`;

export default WorkSection;