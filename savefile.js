import React, {useState} from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '남자 신발 추천', '남자 모자 추천']); 
  let [좋아요, 좋아요변경] = useState(0); 
  let [modal, modal변경] = useState(false); // modal 창을 켜고 닫는 스위치
  let [누른제목, 누른제목변경] = useState(0);

  function 제목여자로바꾸기(){
    let newArray = [...글제목]; 
    newArray[0] = '여자 코트 추천';
    newArray[1] = '여자 신발 추천';
    newArray[2] = '여자 모자 추천'; 
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

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div> 
      <button onClick={ 제목여자로바꾸기 }>여자</button> {/*여자버는 누르면 여자카테고리로 바뀜*/}
      <button onClick={ 제목정렬 }>정렬</button>  {/*정렬버튼 누르면 글자순으로 정렬*/}

      <div className="list"> 
        {
          글제목.map(function(글, i){
            return (
              <div>
                <h3 onClick={()=>누른제목변경(i)}> { 글 } <span onClick={()=>{ 좋아요변경(좋아요+1)}}>👍🏻</span> {좋아요}
                </h3>
                <p>4월 13일 발행</p>
                <hr/>
              </div>
            )
          })
        }
      </div>

      {/* 버튼 누르면 상세보기 페이지 열림/닫힘*/}
      <button onClick={ modal스위치 }>상세보기/닫기</button>
      { 
        modal===true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}/>
        : null 
      }
    </div>
  );
}

function Modal(props) { 
  return (  
     <>  
      <div className="modal">
        <h2>{ props.글제목[props.누른제목] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
