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
  const scrollRef = useRef();
  const contactRef = useRef();
  const [isBottom, setIsBottom] = useRecoilState(scrollArrowOnOffState);
  const contactValue = useRecoilValue(scrollContactOnOffState);
  const [state, setState] = useState(false)
  const [, setIsContanct] = useRecoilState(scrollContactOnOffState);

  useEffect(() => {
    if (isBottom) {
      setState(true);
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsBottom(!isBottom);
      if (contactValue) setIsContanct(true);
    }
    if (contactValue === true) {
      setState(true);
      setIsBottom(true);
      contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [isBottom, setIsBottom, state, contactValue, setIsContanct]);

  return (
    <>
      <Header />
      <Main />
      {state && (
        <Div ref={scrollRef}>
          <MenuBar />
          <section>
            <PinnedImage />
            <PinnedLinkList />
          </section>
        </Div>
      )}
      {contactValue && <ContactContainer forwarRef={contactRef} />}
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
  }
`;

export default Home;