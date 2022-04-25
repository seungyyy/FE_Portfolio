import React from 'react';
import MenuBar from './layouts/MenuBar';
import styled from 'styled-components';

const ContactContainer = ({ forwarRef }) => {
  return (
    <div ref={forwarRef}>
      <MenuBar />
      <Content></Content>
    </div>
  );
};

const Content = styled.section`

`;

export default ContactContainer;