// import export 해주는 걸 어떤 이름으로 사용할건지(export이름과 사용하기를 권장) from 파일 경로
// import MyComponent from './MyComponent'
import Type from './Type'
import Say from './Say'

function App() {
   // const name = 'react'
   // return <div className="react">{name}</div>
   return (
      <>
         {/* <MyComponent name="하서" job="강사" forNumber={1}>
            맑음

            const func = (a, b) => {
               return a + b
               }

               return   
               <Type str="react"
            num={200}
            bool={1 == 1}
            arr={[0, 1, 2]}
            json={{ react: '리액트', time: 2 }}
            func={func} />

         </MyComponent> */}

         <Type
            str="react"
            num={200}
            bool={1 == 1}
            arr={[0, 1, 2]}
            json={{ react: '리액트', time: 2 }}
            func={(a, b) => {
               return a + b
            }}
         />
      </>
   )
}

export default App
