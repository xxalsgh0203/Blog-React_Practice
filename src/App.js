import React, {useState} from 'react'; // 리액트에 있는 내장함수를 사용하겠습니다
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 신발 추천', '남자 팬티 추천']);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { 글제목[0] } </h3>
        <p>4월 13일 발행</p>
        <hr/>
        <h3> { 글제목[1] } </h3>
        <p>4월 13일 발행</p>
        <hr/>
        <h3> { 글제목[2] } </h3>
        <p>4월 13일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
