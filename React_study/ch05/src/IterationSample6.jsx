import React, { useState } from 'react'

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChange = (e) => setInputText(e.target.value)

   // 사용자가 input에 입력한 값을 names state에 추가하는 함수
   const onClick = () => {
      // concat() : 두개 이상의 배열을 합치는 함수
      const nextNames = names.concat({
         id: nextId,
         text: inputText,
      })

      setNames(nextNames)
      setNextId(nextId + 1)
      setInputText('')
   }

   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)
      setNames(nextNames)

      /*
      3번째 리스트 더블 클릭시
     nextNames = [ 
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' }
      { id: 4, text: '바람' }]
      */
   }

   const nameList = names.map((name) => (
      <li
         key={name.id}
         onDoubleClick={() => {
            onRemove(name.id)
         }}
      >
         {name.text}
      </li>
   ))

   return (
      <>
         <input value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
