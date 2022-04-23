import React, { useRef, useEffect, useState } from 'react';
import Main from '../components/Main';
import styled from 'styled-components';
import PinnedLinkList from '../components/PinnedLinkList';
import PinnedImage from '../components/PinnedImage';
import { useRecoilState } from 'recoil';
import { scrollArrowOnOffState} from '../atom/atomState';
import Header from '../components/layouts/Header';
import MenuBar from '../components/layouts/MenuBar';
import theme from '../theme';

const Home = () => {
  const scrollRef = useRef();
  const [isBottom, setIsBottom] = useRecoilState(scrollArrowOnOffState);
  const [nextState, setNextState] = useState(false);

  useEffect(() => {
    if (isBottom) {
      setNextState(true);
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsBottom(!isBottom);
    }
  }, [isBottom, setIsBottom]);

  return (
    <>
      <Header />
      <Main />
      {nextState && <Div ref={scrollRef}>
        <MenuBar />
        <section>
          <PinnedImage />
          <PinnedLinkList />
        </section>
      </Div>}
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