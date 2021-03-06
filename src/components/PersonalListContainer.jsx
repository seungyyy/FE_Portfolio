import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import theme from '../theme';
import { FaGithub, FaLink } from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination]);

const PersonalListContainer = () => {
  return (
    <Container>
      <Swiper className="personal-list" spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/link-futurama.png" alt="개인프로젝트이미지" />
            <Content>
              <Title>
                <h3>Futurama</h3>
                <span className="date-text">2021.12.24 - 2022.04.16</span>
                <p>
                  <span>Description</span>Sample APIs의 futurama api를 사용하여 만든 사이트입니다.
                </p>
                <GitLink href="https://github.com/seungyyy/futurama.com">
                  <FaGithub
                    onClick={() => {
                      window.open('https://github.com/seungyyy/futurama.com', '_blank', 'noopener noreferrer');
                    }}
                  />
                </GitLink>
                <Link href="https://futurama-com.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open('https://futurama-com.vercel.app/', '_blank', 'noopener noreferrer');
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>구현 기능</SubMenu>
              <ul>
                <li>퓨처라마 캐릭터 상세 동적 라우팅 사용하여 구현</li>
                <li>에피소드, 상품 카테고리 정렬 기능</li>
                <li>퀴즈 풀고 결과 확인 기능</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>typeScript</li>
                <li>next-js</li>
                <li>styled-components @emotion/styled</li>
                <li>axios, swr</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/link-wanted.png" alt="개인프로젝트이미지" />
            <Content>
              <Title>
                <h3>상품 리뷰 조회, 등록, 상세 웹페이지</h3>
                <span className="date-text">2022.03.21 - 2022.03.25</span>
                <p>
                  <span>Description</span>원티드 프리온보딩 프론트엔드 코스에서 진행한 개인 프로젝트입니다.
                </p>
                <GitLink href="https://github.com/seungyyy/wanted-codestates-project-9">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/seungyyy/wanted-codestates-project-9',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-9-seungyyy.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-9-seungyyy.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>구현 기능</SubMenu>
              <ul>
                <li>리뷰 리스트 무한 스크롤 및 상단 이동 스크롤 구현</li>
                <li>리뷰 리스트 정렬 시 데이터 상태 변경</li>
                <li>리뷰 상세페이지에서 댓글 입력 가능, 좋아요, 리덕스로 데이터 관리</li>
                <li>리뷰 작성시 사진 미리보기/ 업로드 가능 데이터 저장</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>redux</li>
                <li>react-router</li>
                <li>styled-components</li>
                <li>axios, swr</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/link-portfolio.png" alt="개인프로젝트이미지" />
            <Content>
              <Title>
                <h3>개인 포트폴리오 웹페이지</h3>
                <span className="date-text">2022.04.17 - 2022.04.22</span>
                <p>
                  <span>Description</span>react를 사용하여 포트폴리오를 만들었습니다.
                </p>
                <GitLink href="https://github.com/seungyyy/FE_Portfolio">
                  <FaGithub
                    onClick={() => {
                      window.open('https://github.com/seungyyy/FE_Portfolio', '_blank', 'noopener noreferrer');
                    }}
                  />
                </GitLink>
                <Link href="https://seungyeon-portfolio.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open('https://seungyeon-portfolio.vercel.app/', '_blank', 'noopener noreferrer');
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>구현 기능</SubMenu>
              <ul>
                <li>recoil를 사용하여 전역에서 필요한 상태를 효율적으로 관리</li>
                <li>메인에서 버튼 클릭시 scrollIntoView를 사용하여 아래로 이동 구현</li>
                <li>emailjs를 사용해 메일 보내기 구현</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>recoil</li>
                <li>swiper</li>
                <li>react-router</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}


const Container = styled.div`
  max-width: 1200px;
  .swiper-button-next {
    transform: rotate(270deg) translateX(50%);
    background-size: 50% auto;
    background: url('./images/svg/line-angle-down.svg') no-repeat center;
  }
  .swiper-button-prev {
    transform: rotate(90deg) translateX(-50%);
    background: url('./images/svg/line-angle-down.svg') no-repeat center;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    transform: translateY(-250%);
    background-color: ${theme.colors.black};
  }
  ${theme.device.laptop} {
    max-width: 600px;
    .swiper-button-next {
      margin-right: -15px;
      background-size: 80% auto;
    }
    .swiper-button-prev {
      margin-left: -15px;
      background-size: 80% auto;
    }
  }
  ${theme.device.tablet} {
    max-width: 500px;
  }
  ${theme.device.mobile} {
    max-width: 350px;
    min-width: 350px;
  }
`;

const ContentContainer = styled.li`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 5rem;
  box-sizing: border-box;
  color: ${theme.colors.black};
  img {
    margin-right: 2rem;
    object-fit: cover;
  }
  ul {
    li {
      margin-left: 2rem;
      list-style: circle;
      line-height: 1.5;
    }
  }
  ${theme.device.laptop} {
    flex-direction: column;
    padding: 1rem 2rem 2.5rem;
    img {
      display: none;
    }
  }
`;

const Content = styled.div`
  padding-right: 3rem;
  box-sizing: border-box;
  ${theme.device.laptop} {
    padding: 2rem;
  }
  ${theme.device.custom} {
    padding-top: 0;
  }
`;

const Title = styled.div`
  position: relative;
  h3 {
    margin-top: 25px;
    font-size: 2rem;
    font-family: 'SpoqaHanSansNeo-Medium';
    letter-spacing: -1px;
  }
  .date-text {
    position: absolute;
    top: -25px;
    left: 0;
  }
  p {
    margin-top: 14px;
    span {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
  }
  ${theme.device.laptop} {
    h3 {
      font-size: 1.4rem;
    }
    .date-text {
      font-size: 14px;
      top: -20px;
    }
    p {
      span {
        font-size: 1.1rem;
      }
    }
  }
  ${theme.device.tablet} {
    max-width: 500px;
  }
  ${theme.device.custom} {
    p {
      font-size: 16px;
      span {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }
`;

const GitLink = styled.a`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 1.2rem;
  z-index: 100;
  ${theme.device.custom} {
    top: -1.5rem;
  }
`;

const Link = styled.a`
  position: absolute;
  top: 0.5rem;
  right: -1.5rem;
  font-size: 1.2rem;
  z-index: 100;
  ${theme.device.custom} {
    top: -1.5rem;
  }
`;

const SubMenu = styled.p`
  font-size: 1.2rem;
  margin: 1rem 1rem 0.2rem 0;
  font-family: 'SpoqaHanSansNeo-Medium';
  ${theme.device.tablet} {
    font-size: 16px;
  }
`;
export default PersonalListContainer;