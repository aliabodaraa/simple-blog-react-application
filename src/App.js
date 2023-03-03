
import Navbar from './Navbar';
import Home from './Home';

const handleClick=(e)=>{
	console.log(e.target);
}
const handleClickWithParam=(name,e)=>{
	console.log(name,e.target);
}
function App() {

  return (
    <div className="App">
        <Navbar/>
        <button onClick={handleClick}>click me1</button>
        <button onClick={(e)=>handleClickWithParam("param",e) }>click me2</button>

        <div className="content">
          <Home/>
        </div>
    </div>
  );
}

export default App;
