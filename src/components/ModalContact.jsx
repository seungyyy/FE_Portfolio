import React, { useCallback, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import theme from '../theme';

const ModalContact = (props) => {
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
  }

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
            props.isOpen(false);
            console.log('SUCCESS!', response.status, response.text);
          },
          function (error) {
            props.isOpen(false);
            console.log('FAILED...', error);
          }
        );
      }
    },
    [state.email]
  );

  return (
    <Container>
      <FormContainer>
        <div className="modal-header">
          <p className="modal-tit">Contact me</p>
          <button
            className="close-btn"
            type="button"
            onClick={() => {
              props.isOpen(false);
            }}
          ></button>
        </div>
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
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const FormContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  width: 50%;
  background: ${theme.colors.black};
  text-align: center;
  z-index: 20;
  box-sizing: border-box;
  border: 3px solid ${theme.colors.white};
  border-radius: 10px;
  .modal-header {
    position: relative;
    .modal-tit {
      margin-bottom: 3rem;
      color: ${theme.colors.white};
      font-size: 1.4rem;
      font-weight: bold;
    }
    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
      width: 18px;
      height: 18px;
      background: url('./images/delete_btn.png') no-repeat center;
      background-size: 18px;
      border: 0;
      cursor: pointer;
      padding: 1rem;
      padding-right: 5rem;
      box-sizing: border-box;
    }
  }
`;

const Form = styled.form`
  label {
    margin-right: 10px;
    color: ${theme.colors.white};
  }
  input {
    padding: 0.5rem 10px;
    width: 83%;
    background-color: ${theme.colors.white};
    box-sizing: border-box;
    margin-top: 30px;
  }
  #email {
    width: 81%;
  }
  .textarea-box {
    position: relative;
    .textarea-label {
      position: absolute;
      top: 30px;
    }
    textarea {
      padding: 0.5rem 10px;
      width: 83%;
      min-height: 100px;
      margin: 30px 0 0 42px;
      resize: none;
      ime-mode: auto;
      box-sizing: border-box;
      background-color: ${theme.colors.white};
    }
  }

  .submit-btn {
    display: block;
    width: 92%;
    margin: 40px auto 1rem;
    padding: 0.5rem 0;
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    cursor: pointer;
    box-sizing: border-box;
  }
`;

export default ModalContact;