import React from 'react'
import { useState ,useEffect} from 'react';
import Andrewcomponent from './components/Andrewcomponent'
import './App.css'
const App = () => {
  const [count, setCount] = useState(1);
  const [counts,setCounts]=useState([0])
  const [objs,setObjs]=useState({0:0});
  const [flag,setFlag]=useState(false);
  const [result,setResult]=useState([]);
  function handleClick() {
    let obj1=objs
    obj1[count]=-1
    setObjs({...obj1})
    setCount(count+ 1);
    setCounts([...counts,count])
    console.log(objs,counts)
  }
  var final=[]
  const handlesubmit=()=>{
    setObjs({...objs})
    final=[objs]
    console.log(final)
    setFlag(!flag)
    console.log(result)
  }
useEffect(() => {
  handlesubmit()
}, [])

  return (
    <div className='main-conatiner'>
      <div id='container'>
      <div className='sub'>{counts.map((ele,idx)=>(
      <div className='counters'> <h3 className='counterss'>Counter {ele+1}</h3><Andrewcomponent key={idx} setObjs={setObjs} ele={ele} objs={objs}/></div>)
      )}
      <button className='btn' onClick={handleClick}>ADD</button>
      </div>
      <div className='sub1'>
        <button className='btn'  onClick={handlesubmit} >Submit</button>
        
      </div>
      <div className='results-container'>
      {!flag 
      ? (counts.map((ele,idx)=>( <div className='result-text' key={idx}><h3 className='res-text'>Counter {ele+1}</h3><div className='result-output'>{objs[ele]+1}</div></div>))):<div ></div>
      }
</div>
</div>
      </div>
  )
}

export default App