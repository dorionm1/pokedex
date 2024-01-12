import './App.css';

const pokemon = [
{id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
{id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
{id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
{id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
{id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
{id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
{id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
{id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
]

const Header = () => {
  return (
    <h1 id="header">Pokedex</h1>
  )
}

const Pokecard = (props) => {
  return (
    <div id="card">
      <p id="topText">{props.name}</p>
      <img id="image" src={props.image} alt="Pokemon"></img>
      <p id="type">Type: {props.type}</p>
      <p id="exp">EXP: {props.exp}</p>
    </div>
  );
}

const Pokedex = () => {
  return (
    <div id="container">
      <ul id="pokeList">
        { pokemon.map(p => <li><Pokecard name={p.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} type={p.type} exp={p.base_experience}/></li>)}
      </ul>
    </div>
  );
}

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Pokedex/>
    </div>
  );
}

export default App;
