import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { linkNameState } from '../atom/atomState';
import styled from 'styled-components';

const linkList = [
  {
    name: 'Portfolio',
    url: 'https://github.com/seungyyy/FE_Portfolio',
    img: './images/link-portfolio.png',
  },
  {
    name: 'Futurama',
    url: 'https://futurama-com.vercel.app/',
    img: './images/link-futurama.png',
  },
  {
    name: '발란',
    url: 'https://wanted-codestates-project-9-seungyyy.vercel.app/',
    img: './images/link-wanted.png',
  },
  {
    name: '청귤마켓',
    url: 'http://chungyul.shop/',
    img: './images/link-snsproject.png',
  },
];

const PinnedImage = () => {
  const link = useRecoilValue(linkNameState);
  const [isOn, setIsOn] = useState(false);
  const [state, setState] = useState({
    img: '',
    url: '',
  });

  useEffect(() => {
    let text = '';
    if (link.length > 0) {
      setState({
        url: linkList.filter((el) => el.name === link)[0].url,
        img: linkList.filter((el) => el.name === link)[0].img,
      });
    }
    if (text !== link) {
      text = link;
      setIsOn(true);
      setTimeout(() => {
        setIsOn(false);
      }, 100);
    }
  }, [link]);

  return (
    <ImgContainer
      onClick={() => {
        window.location.href = state.url;
      }}
    >
      {!state.img && <img src="./images/img-substitute.png" alt="대체 이미지" className="sub-img" />}
      {state.img && <img src={state.img} alt="링크 이미지" data-ison={isOn} />}
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  float: left;
  width: 65%;
  height: 80%;
  margin-right: 50px;
  cursor: pointer;
  img {
    border-radius: 0 40px 0 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity ease;
    &[data-ison="true"] {
    animation: visible 3s;
    @keyframes visible {
      0% {
        opacity: 0
      } 100% {
        opacity: 1
      }
    }
  }
  }
  .sub-img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    opacity: 1;
  }
  
`;

export default PinnedImage;