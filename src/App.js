import BottomTab from './components/BottomTab';
import TopNav from './components/TopNav';
import {route,Switch} from 'react-router-dom'
import Home from './home'  

function App() {
  return (
    <>
    <header>
     <TopNav />
    </header>
    
    <main>
      <Switch>
      <route path='/'>
         <Home />
      </route>
      <route path='/:name'>
         <Home />
      </route>
      </Switch>
    </main>

    <footer>
      <BottomTab />
    </footer>

    </>
    
    
  );
}

export default App;
