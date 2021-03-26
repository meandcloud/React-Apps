import './App.css';
import Example1_Props from './Components/Example1_Props'
import Example2_Hello from './Components/Example2_Hello'

function App() {

  


  return (
    <div>
        {/* Example 1 */}
        {/* <Example1_Props fname="Amar" age="36" /> */}

        {/* Example2 */}
        <Example1_Props fname="Amar" age={36-6} />
        
        {/* <br />
        <Example2_Hello firstName="Amar" /> */}





    </div>
  );
}

export default App;
