import React, { useRef, useEffect } from 'react';
import Main from '../components/Main';
import styled from 'styled-components';
import WorkLinkList from '../components/WorkLinkList';
import WorkImage from '../components/WorkImage';
import { useRecoilState } from 'recoil';
import { scrollArrowOnOffState } from '../atom/atomState';
import Header from '../components/layouts/Header';


const Home = () => {
  const scrollRef = useRef();
  const [isBottom, setIsBottom] = useRecoilState(scrollArrowOnOffState);

  useEffect(() => {
    if (isBottom) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsBottom(!isBottom);
      return;
    }
  }, [isBottom, setIsBottom]);
  

  return (
    <>
      <Main />
      <Div ref={scrollRef}>
        <Header />
        <section>
          <WorkImage />
          <WorkLinkList />
        </section>
      </Div>
    </>
  );
}

const Div = styled.div`
  section {
    height: calc(100vh - 6.8rem);
    display: flex;
    align-items: flex-end;
    &:after {
      content: '';
      clear: both;
    }
  }
`;

export default Home;