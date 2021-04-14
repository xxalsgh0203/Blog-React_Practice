import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, renametitle] = useState(['서울 데이트코스', '경기도 데이트코스', '강원도 데이트코스']);
  let [modal, closemodal] = useState(false);
  let [modaltitle, updatemodaltitle] = useState(0);

  function ConvertToSouthern(){
    let newArray = [...title];
    newArray[0] = '부산 데이트코스';
    newArray[1] = '대구 데이트코스';
    newArray[2] = '울산 데이트코스';
    renametitle(newArray);
  }

  function ConvertToNorthern(){
    let newArray = [...title];
    newArray[0] = '서울 데이트코스';
    newArray[1] = '경기도 데이트코스';
    newArray[2] = '강원도 데이트코스';
    renametitle(newArray);
  }

  function sortTitlebyOrder(){
    let newArray = [...title];
    newArray.sort();
    renametitle(newArray);
  }

  function ModalSwitch(){
    let switchbutton = !modal
    closemodal(switchbutton);
  }

  return(
    <div className="App">
      <div className="black-nav">
        데이트코스 추천 블로그
      </div>

      <div nav-buttons>
        <button onClick={ ConvertToSouthern }>남부</button>
        <button onClick={ ConvertToNorthern }>북부</button>
        <button onClick={ sortTitlebyOrder }>정렬</button>
      </div>

      <div className="list">
       {
         title.map(function(titles, i){
           return (
             <div>
               <h3 onClick={ ()=>updatemodaltitle(i) }> { titles } </h3>
               <p>지역내 최우수 식당</p>
               <hr></hr>
             </div>
           )
         })
       }
      </div>
      
      <button onClick={ ModalSwitch }>자세히보기/닫기</button>

      {
        modal == true
        ? <Modal title={title} modaltitle={modaltitle}/>
        : null
      }
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h2> {props.title[props.modaltitle] }</h2>
      <p>위치</p>
      <p>별점</p>
    </div>
  )
}

export default App;
