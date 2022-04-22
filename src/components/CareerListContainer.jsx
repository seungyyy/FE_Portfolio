import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import theme from '../theme';
import { FaGithub, FaLink, FaDiaspora } from 'react-icons/fa';

SwiperCore.use([Navigation, Pagination]);

const CareerListContainer = () => {
  return (
    <Container>
      <Swiper className="personal-list" spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" className="describe-img" />
            <Describe>
              <p>
                원티드 채용 플랫폼에서 진행한 'Pre-Onboarding Course frontend' 입니다. <br />
                단기간에 참가 기업의 실전 과제를 팀 과제 8개와 개인 과제 1개를 수행합니다. <br />
                모의 면접과 필요한 지식을 더 쌓으며 역량이 향상될 수 있었습니다. <br />
              </p>
              <FaDiaspora />
              <span>
                프로젝트별 슬라이드에서 참여율 / 역할 / 스택/ 깃헙 / 링크를 확인할 수 있습니다.
              </span>
            </Describe>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>충북 휴양림에서 조회 및 저장하는 서비스</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>17% (팀 인원: 6명) <span>배포</span> netify
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-08">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-08',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-08.netlify.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-08.netlify.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>로컬스토리지 데이터 조회 및 정보 검색 필터 적용</li>
                <li>로컬 스토리지 저장 데이터 없을 시 화면 구현</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>redux-toolkit</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>다중 선택 가능한 커스텀 듀얼 셀렉터</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>17% (팀 인원: 6명) <span>배포</span> github.io
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-3">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-3',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-3/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-3/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>recoil 상태 변경/적용</li>
                <li>설정 메뉴 컴포넌트 생성</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>recoil</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>병명을 검색하고 추천해주는 검색창 만들기</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>50% (팀 인원: 2명) <span>배포</span> github.io
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-1">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-1',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-10-1.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-10-1.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>리덕스 툴킷 데이터 관리</li>
                <li>RTK Query로 비동기 처리</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>redux-toolkit</li>
                <li>RTK Query</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>데이터를 시각화하여 진단검사 결과 모바일 웹페이지</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>17% (팀 인원: 6명) <span>배포</span> vercel
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-11">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-11',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-team-05-11.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-team-05-11.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>vue-chart.js 라이브러리를 이용하여 펜타곤 그래프 커스텀 하여 구현</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>vue</li>
                <li>vue-chart</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>이미지 위에 드래그하여 영역 잡아주는 페이지</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>10% (팀 인원: 4명) <span>배포</span> vercel
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05-2">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05-2',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-05-02-sigma.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-05-02-sigma.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>
                  크로스 브라우징 (메타태그, css reset 초기화, css vender prefix, <br /> react-app-polyfill 사용하여
                  ie11 버전 이용 가능)
                </li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>react-router</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>쇼핑몰 의류 검색, 조회 웹페이지</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>17% (팀 인원: 6명) <span>배포</span> vercel
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-05-01.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-05-01.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>공통 UI 컴포넌트 item 제작</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>react-router</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>게임 전적 랭킹 조회 및 검색 웹페이지</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>17% (팀 인원: 6명) <span>배포</span> vercel
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-02">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-02',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-02.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-02.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>유저 프로필 컴포넌트 구현(css 애니메이션 3개, 모달창 구현)</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>redux</li>
                <li>firebase</li>
                <li>axios</li>
                <li>react-router</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>간병인 신청하기 모바일 웹페이지</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>15% (팀 인원: 7명) <span>배포</span> vercel
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-06">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-06',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-06.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-06.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>저장된 데이터 페이지 컴포넌트 생성</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>react-router</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ContentContainer>
            <img src="./images/wanted-logo.png" alt="" />
            <Content>
              <Title>
                <h3>커스텀 폼 생성 및 저장하기</h3>
                <span className="explanation-text">원티드 프리온보딩 프론트엔드 코스</span>
                <span className="date-text">2022.02.21 - 2022.04</span>
                <p>
                  <span>참여율</span>15% (팀 인원: 7명) <span>배포</span> vercel
                </p>
                <GitLink href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-07">
                  <FaGithub
                    onClick={() => {
                      window.open(
                        'https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-07',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </GitLink>
                <Link href="https://wanted-codestates-project-05-07.vercel.app/">
                  <FaLink
                    onClick={() => {
                      window.open(
                        'https://wanted-codestates-project-05-07.vercel.app/',
                        '_blank',
                        'noopener noreferrer'
                      );
                    }}
                  />
                </Link>
              </Title>
              <SubMenu>기능/역할</SubMenu>
              <ul>
                <li>리덕스에서 데이터를 받아와서 신청 완료 페이지 화면 구현</li>
                <li>서비스 배포</li>
              </ul>
              <SubMenu>스택</SubMenu>
              <ul>
                <li>react</li>
                <li>react-router</li>
                <li>styled-components</li>
              </ul>
            </Content>
          </ContentContainer>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1100px;
  .describe-img {
    margin-top: 6rem;
    margin-right: 50px ;
  } 
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
`;

const ContentContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 5rem;
  box-sizing: border-box;
  color: ${theme.colors.black};
  img {
    max-width: 15%;
    height: 15%;
    margin: 0 100px 0 -100px;
    object-fit: contain;
  }
  ul {
    li {
      margin-left: 2rem;
      list-style: circle;
      line-height: 1.5;
    }
  }
`;

const Content = styled.div``;

const Title = styled.div`
  position: relative;
  h3 {
    margin-top: 25px;
    font-size: 2rem;
    font-family: 'SpoqaHanSansNeo-Medium';
    letter-spacing: -2px;
  }
  .explanation-text {
    position: absolute;
    left: 0;
    top: -25px;
  }
  .date-text {
    position: absolute;
    right: 0;
    top: -23px;
    font-size: 0.8rem;
  }
  p {
    margin-top: 14px;
    span {
      margin: 0 0.5rem;
      font-size: 1.2rem;
    }
    &:not(:first-of-type) {
      margin-right: 1rem;
    }
  }
`;

const GitLink = styled.a`
  position: absolute;
  top: 0.5rem;
  right: -1.9rem;
  font-size: 1.5rem;
`;

const Link = styled.a`
  position: absolute;
  top: 0.5rem;
  right: -4rem;
  font-size: 1.5rem;
`;

const SubMenu = styled.p`
  font-size: 1.2rem;
  margin: 1rem 1rem 0.2rem 0;
  font-family: 'SpoqaHanSansNeo-Medium';
`;

const Describe = styled.div`
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 50px 0 15px;
  }
  span {
    margin-left: 5px;
  }
`;
export default CareerListContainer;
