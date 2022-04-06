import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import PokemonList from './containers/PokemonList';
import NotFound from './containers/NotFound';
import Home from './containers/Home'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemonList" component={PokemonList} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
