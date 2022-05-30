import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const LinkButton = ({ src, name }) => {

  const handleClickLink = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'velog') {
      window.open('https://velog.io/@seungyeons', '_blank');
      return;
    } else if (e.target.name === 'git') {
      window.open('https://github.com/seungyyy', '_blank');
      return;
    }
  };

  return (
    <Button className={name === 'velog' ? ' velog-btn' : ''} onClick={handleClickLink} name={name}>
      <img src={src} alt="link" name={name} />
    </Button>
  );
};

const Button = styled.button`
  width: 70px;
  margin-top: 2rem;
  padding: 0;
  object-fit: contain;
  cursor: pointer;
  &.velog-btn {
    margin-left: 4px;
    width: 40px;
  }
  ${theme.device.mobile} {
    width: 60px;
  }
`;

export default LinkButton;