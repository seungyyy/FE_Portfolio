import React, { useRef, useEffect, useState } from 'react';
import Main from '../components/Main';
import styled from 'styled-components';
import PinnedLinkList from '../components/PinnedLinkList';
import PinnedImage from '../components/PinnedImage';
import { useRecoilState, useRecoilValue } from 'recoil';
import { scrollArrowOnOffState, scrollContactOnOffState } from '../atom/atomState';
import Header from '../components/layouts/Header';
import MenuBar from '../components/layouts/MenuBar';
import theme from '../theme';
import ContactContainer from '../components/ContactContainer';


const Home = () => {
  const refs = useRef([]);
  const [isBottom, setIsBottom] = useRecoilState(scrollArrowOnOffState);
  const contactValue = useRecoilValue(scrollContactOnOffState);
  const [state, setState] = useState(false);
  const [disableScroll, setDisabledScroll] = useState(false);
  const [, setIsContanct] = useRecoilState(scrollContactOnOffState);
  
  const root = document.getElementById('root');
  
  useEffect(() => {
    if (disableScroll === false) {
      root.classList.add('stop-scrolling');
      setDisabledScroll(true);
    } 
  })

  useEffect(() => {
    if (isBottom) {
      root.classList.remove('stop-scrolling');
      setState(true);
      refs.current[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsBottom(false);
      if (contactValue) setIsContanct(true);
    }
    if (contactValue === true) {
      root.classList.remove('stop-scrolling');
      setState(true);
      setIsBottom(true);
      refs.current[1]?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isBottom, setIsBottom, state, contactValue, setIsContanct]);

  return (
    <>
      <Header />
      <Main />
      <Div ref={(el) => (refs.current[0] = el)}>
        <MenuBar />
        <section>
          <PinnedImage />
          <PinnedLinkList />
        </section>
      </Div>
      {contactValue && <ContactContainer forwarRef={(el) => (refs.current[1] = el)} />}
    </>
  );
}

const Div = styled.div`
  section {
    ${theme.common.height}
    display: flex;
    align-items: flex-end;
    &:after {
      content: '';
      clear: both;
    }
    ${theme.device.laptop} {
      flex-direction: column;
      align-items: center;
    }
  }
`;


export default Home;