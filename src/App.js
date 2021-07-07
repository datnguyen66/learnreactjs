import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import {Link, Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>

      <Switch>
        <Route path="/todos" component={TodoFeature}/>
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
