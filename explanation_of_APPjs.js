import React, {useState} from 'react'; // 리액트에 있는 useState 라는 내장함수를 사용하겠습니다
import './App.css';

function App() {
  // 변수 대신의 데이터 저장공간인 state 사용
  //자주 바뀌는, 중요한 데이터들은 변수 말고 state 로 저장해서 사용하자. state 를 사용하면 웹이 app 처럼 동작하게 할 수 있다.
  // state 는 변경하면 HTML 이 자동으로 rendering 되지만 그냥 변수에 저장하면 데이터가 바뀌어도 재 rendering 이 되지 않는다.
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 신발 추천', '남자 모자 추천']); // useState 는 [a,b]를 반환. a:state 데이터 b:state데이터 변경함수
  let [좋아요, 좋아요변경] = useState(0); 
  let [modal, modal변경] = useState(false); // modal 창을 켜고 닫는 스위치
  // React 에서 클릭시 등장하는 UI 만드는법:
  // 1. UI 가 보임/안보임 정보를 state 로 저장해둠
  // 2. 그리고 if 문을 이용해 state 가 true 일때 UI 를 보여줌

  function 제목여자로바꾸기(){
    let newArray = [...글제목]; // state 는 직접건들지 말고 deep copy 를 해야함
    newArray[0] = '여자 코드 추천';
    newArray[1] = '여자 신발 추천';
    newArray[2] = '여자 모자 추천'; //글제목[2] = ... 로 직접 변경할 수 없음
    글제목변경(newArray);
  }

  function 제목정렬(){
    let newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }

  function modal스위치(){
    let swit = !modal;
    modal변경(swit);
  }

  // {변수명} : 데이터 바인딩. 데이터를 HTMl 에 꽂아 넣는것
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div> 
      <button onClick={ 제목여자로바꾸기 }>여자</button> 
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
      
      {/* 버튼 누르면 상세보기 페이지 열림/닫힘*/}
      <button onClick={ modal스위치 }>상세보기/닫기</button>
      { // jsx에 변수명 넣고 싶으면 {변수명} 하듯이 자바스크립트 표현식을 넣고싶으면 {} 를 사용해야 한다.
        modal===true // if 조건문 사용할수 없음. 대신 삼항연산자 사용
        ? <Modal />
        : null // 텅빈 HTML 이라는 뜻
      }
    </div>
  );
}

// component 로 만들어야 할것들 : 1. 반복출현하는 HTML 덩어리들 2. 자주변경되는 HTML UI 들

function Modal() { // component 이름은 항상 대문자로 시작, return() 안에 있는건 태그 하나로 묶어야함
  return (  //의미 없는 div 사용하기 싫으면 <></> fragment 사용
     <>  
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
