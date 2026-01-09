import {KgButton} from "./KgButton"; //for non default export
import KgButton2 from "./KgButton"; //for default export
import Hello from "./Hello";
import RandomNumber from "./RandomNumber";
import "bootstrap/dist/css/bootstrap.min.css"
function App (){
  return <>
    <h1 className="text-bold">Hello World !</h1>
    <Hello></Hello>
    <RandomNumber></RandomNumber> <br></br>
  </>
}

export default App;