// nav바랑 main.jsx랑 footer까지 전부 합친 파일로 만들 예정
// main 요소는 components/main/main.jsx에 추가하기
import React from 'react';
import Main from '../components/main/main';
import Footer from '../components/footer/footer';

const Mainpage = () => {
  return (
    <>
        <Main />
        <Footer />
    </>
  );
};

export default Mainpage;
