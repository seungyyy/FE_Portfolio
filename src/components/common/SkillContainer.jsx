import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const SkillContainer = ({title, name}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {name === 'frontend' && (
        <div className="skill-cont">
          <img src="./images/html-img.png" alt="html" />
          <img src="./images/css-img.png" alt="html" />
          <img src="./images/js-img.png" alt="javascript" />
          <img src="./images/react-img.png" alt="react" />
          <img src="./images/redux-img.png" alt="redux" />
          <img src="./images/typescript-img.png" alt="typescript" />
          <img src="./images/nextjs-img.png" alt="nextjs" />
          <img src="./images/sass-img.png" alt="sass" />
        </div>
      )}
      {name === 'deployment' && (
        <div className="skill-cont">
          <img src="./images/netlify-img.png" alt="netlify" />
          <img src="./images/vercel-img.png" alt="vercel" />
        </div>
      )}
      {name === 'design' && (
        <div className="skill-cont">
          <img src="./images/figma-img.png" alt="figma" />
          <img src="./images/photoshop-img.png" alt="photoshop" />
        </div>
      )}
    </Container>
  );
}

const Container = styled.article`
  background-color: ${theme.colors.mauve};
  border-radius: 15px;
  h2 {
    display: inline-block;
    font-size: 2rem;
    padding: 1.5rem 0 0.3rem 3rem;
    border-bottom: 3px solid ${theme.colors.black};
    color: ${theme.colors.black};
  }
  .skill-cont {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem;
    box-sizing: border-box;
    img {
      width: 100px;
      aspect-ratio: 1 / 1;
      object-fit: contain;
    }
  }
`;


export default SkillContainer;