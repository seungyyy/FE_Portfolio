import React, { useRef, useState, useEffect } from 'react';
import Main from '../components/Main';
import styled from 'styled-components';
import MenuComponents from '../components/MenuComponents';


const Home = () => {
  const scrollRef = useRef();
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => { 
    if (isBottom) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsBottom(!isBottom)
      return;
    }
  }, [isBottom])
  

  return (
    <>
      <Main isBottom={setIsBottom} />
      <Div ref={scrollRef}>
        <MenuComponents />
      </Div>
    </>
  );
}

const Div = styled.div`
  height: 100vh;
`;

export default Home;