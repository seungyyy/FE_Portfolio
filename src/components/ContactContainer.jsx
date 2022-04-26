import React, { useCallback, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import theme from '../theme';
import MenuBar from './layouts/MenuBar';

const ContactContainer = ({ forwarRef }) => {
  const emailRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const [state, setState] = useState({
    author: '',
    email: '',
    content: '',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
      const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
      const PUBLICKEY = process.env.REACT_APP_PUBLICKEY;

      const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const inputNum = e.target.childElementCount - 1;
      const data = new FormData(e.target);
      const entries = data.entries();

      let failNum = 0;
      for (let i = 0; i < inputNum; i++) {
        const next = entries.next();
        const key = next.value[0];
        const value = next.value[1];
        if (!value) {
          failNum++;
          if (key === 'author') {
            authorRef.current.focus();
            return;
          } else if (key === 'email') {
            emailRef.current.focus();
            return;
          } else if (key === 'content') {
            contentRef.current.focus();
          }
        }
      }

      if (!reg.test(state.email)) {
        emailRef.current.focus();
        alert('이메일 형식이 올바르지 않습니다.');
        return;
      }

      if (!failNum) {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLICKEY).then(
          function (response) {
            setState({
              author: '',
              email: '',
              content: '',
            });
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            console.log('FAILED...', error);
          }
        );
      }
    },
    [state.email]
  );

  return (
    <Container ref={forwarRef}>
      <MenuBar />
      <h2>Contact</h2>
      <Content>
        <p>
          <span>Mail</span>dus3214@gmail.com
        </p>
        <Form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              name="author"
              id="name"
              ref={authorRef}
              placeholder="이름을 입력해주세요."
              value={state.author}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              name="email"
              ref={emailRef}
              id="email"
              placeholder="이메일을 입력해주세요."
              value={state.email}
              onChange={handleChangeState}
            />
          </div>
          <div className="textarea-box">
            <label htmlFor="text" className="textarea-label">
              내용
            </label>
            <textarea
              name="content"
              id="text"
              ref={contentRef}
              placeholder="내용을 입력해주세요."
              value={state.content}
              onChange={handleChangeState}
            />
          </div>
          <button type="submit" className="submit-btn">
            메일 보내기
          </button>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  h2 {
    margin: 5rem 2.4rem 2.4rem;
    padding-bottom: 0.5rem;
    font-size: 3rem;
    font-weight: bold;
    box-sizing: border-box;
    color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.white};
  }
  ${theme.device.tablet} {
    h2 {
      font-size: 2rem;
    }
  }
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
  p {
    flex: 2;
    margin-top: 50px;
    color: ${theme.colors.white};
    font-size: 1.4rem;
    span {
      margin-right: 20px;
    }
  }
  ${theme.device.tablet} {
    flex-direction: column;
    padding-top: 0;
    p {
      margin: 0;
      font-size: 1rem;
    }
  }
`;

const Form = styled.form`
  flex: 3;
  padding: 0 1rem;
  margin-top: 50px;
  box-sizing: border-box;
  label {
    margin-right: 10px;
    color: ${theme.colors.white};
  }
  input {
    width: 85%;
    margin-left: 25px;
    padding: 0.5rem 10px;
    border: none;
    color: ${theme.colors.white};
    border-bottom: 2px solid ${theme.colors.white};
    box-sizing: border-box;
    background-color: inherit;
  }
  #email {
    width: 85%;
    margin-left: 10px;
    margin-top: 30px;
  }
  .textarea-box {
    position: relative;
    .textarea-label {
      position: absolute;
      top: 35px;
    }
    textarea {
      padding: 0.5rem 10px;
      width: 85%;
      min-height: 100px;
      margin: 35px 0 0 65px;
      resize: none;
      ime-mode: auto;
      box-sizing: border-box;
    }
  }
  .submit-btn {
    display: block;
    width: 85%;
    margin: 40px 0 0 64px;
    padding: 0.8rem 0;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    cursor: pointer;
    box-sizing: border-box;
  }
  ${theme.device.tablet} {
    padding: 0;
    input {
      width: 75%;
    }
    #email {
      width: 75%;
    }
    .textarea-box {
      textarea {
        width: 75%;
      }
    }
    .submit-btn {
      width: 75%;
    }
  }
`;

export default ContactContainer;
