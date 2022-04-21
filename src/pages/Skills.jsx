import React from 'react';
import Header from '../components/layouts/Header';
import styled from 'styled-components';
import theme from '../theme';

const Skills = () => {
  return (
    <>
      <Header />
      <Section>
        <article>
          <h2>Personal</h2>
        </article>
        <article>
          <h2>Team</h2>
        </article>
      </Section>
    </>
  );
}

const Section = styled.section`
  ${theme.common.height}
  color: ${theme.colors.white};
`;



export default Skills;