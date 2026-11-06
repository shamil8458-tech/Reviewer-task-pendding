import React from 'react';
import { useState , useEffect} from 'react'

function App() {


  const [count , setCount] = useState(0)


  function hanlde1(){
    setCount(count + 1)
  }



      useEffect(() => {


      

      console.log("run one Time ")
      console.log("counter run every  change")



      return (() => {
        console.log("data is removed")
      })





  },[])

  


  return (
    <div >


    <button onClick={hanlde1}>click</button>


      <h3>{count}</h3>



 
    </div>
  )
}

export default App








// import React from 'react';
// import { useState } from 'react'
// import Child from './child.jsx'




// function App(){

//   const [count , setCount] = useState(0)
//   // const name ="shamil"


// console.log("re-render")




//   return(
//     <div>


//   <button onClick={setCount(count + 1)}>increment</button>


//     <Child name="shamil"/>
//     </div>
//   )
// }
// export default App



// const Child = React.Memo((name) => {


//   console.log("child is re-Render")
//   return(
//      <div>


//      <h3>name : {name}</h3>


//     </div>
//   )
// }) 
// export default Child













// import {useRef} from 'react'
// import React from 'react';



// function  App(){

//   const inputref = useRef()


//   function handle(){
//     inputref.current.focus()
//   }



//   return(
//     <div>


//     <input ref={inputref}/>

//     <button onClick={handle}>focus</button>
//     </div>
//   )
// }
// export default App