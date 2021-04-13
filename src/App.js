import React, {useState} from 'react'; // 리액트에 있는 내장함수를 사용하겠습니다
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 신발 추천', '남자 모자 추천']);
  let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기(){
    let newArray = [...글제목]; // state 는 직접건들지 말고 deep copy 를 해야함
    newArray[0] = '여자 코드 추천';
    newArray[1] = '여자 신발 추천';
    newArray[2] = '여자 모자 추천';
    글제목변경(newArray);
  }

  function 제목정렬(){
    let newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>여자</button>
      <button onClick={ 제목정렬 }>정렬</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={()=>{좋아요변경(좋아요 + 1)}}>👍</span> {좋아요} </h3>
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
