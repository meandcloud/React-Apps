import './App.css';
import Example1_Props from './Components/Example1_Props'
import CourseList from './Components/Example2_Obj/CourseList';
import Products from './Components/Example2_Obj/Products';


function App() {


  return (
    <div>


        <div>
          <Example1_Props 
          roll={12345}
          fname="Amar" 
          lname="Shabbir"
          course="Cloud Native and Mobile Computing"
          email="amarsaudagar1@gmail.com"
          age={40 - 4}
          />
        </div>

        <CourseList />


        <Products />

    </div>
  );
}

export default App;
