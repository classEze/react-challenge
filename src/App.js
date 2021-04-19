import BottomTab from './components/BottomTab';
import TopNav from './components/TopNav';
import {Switch, Route} from 'react-router-dom'
import Home from './home'  
import Whatever from './whatever'  

function App() {
  return (
    <>
    <header>
     <TopNav />
    </header>
    <main>
      <Switch>
      <Route exact path='/'>
         <Home />
      </Route>
      <Route exact path='/:name' component={Whatever} />
      </Switch>
    </main>
    <footer>
      <BottomTab />
    </footer>

    </>
    
    
  );
}

export default App;
