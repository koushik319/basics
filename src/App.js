//import logo from './logo.svg';
import './App.css';
//import Test from './components/Test';
import Testarrow from './components/Testarrow';
import Testclass from './components/Testclass'
import Hello from './components/Hello';
import Demoprop from './components/Demoprop';
import Demoprops1 from './components/Demoprops1'
import Childprop from './Childprop';
import Classprop from './Classprop';
import Stateexp from './components/Stateexp'
import Counter from './components/Counter';
//import Destructprops from "./components/Destructprops"
import Destructclassprop from './components/Destructclassprop';
//import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent'
import ParentComponent1 from './components/ParentComponent1';
import Renderif from './components/Renderif';
import Elementvar from './components/Elementvar';
import Ternary from './components/Ternary';
import Shortcircuit from './components/Shortcircuit';
import Namelist from './Namelist';
import Indexaskey from './components/Indexaskey';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import  './Style.css'
import styles from './Styling.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifecycleA';
import Lifecycleupdate from './components/Lifecycleupdate'
import Fragmentdemo from './components/Fragmentdemo';
import Table from './components/Table';
import ParentComponent2 from './components/ParentComponent2';
import Refsdemo from './components/Refsdemo';
import Focusinput from './components/Focusinput';
import Portaldemo from './components/Portaldemo';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';
import Clickcounter from './components/Clickcounter';
import Hovercounter from './components/Hovercounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Count from './components/Count';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
function App() {
  return (
    <div className='App'>
      <UserProvider value="Nani">
      <ComponentC/>
      </UserProvider>
    </div>
  );
}

export default App;
