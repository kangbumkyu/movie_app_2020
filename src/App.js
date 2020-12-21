import PropTypes from "prop-types"

const foods = ["Gogi", "bread", "Chocolate"]

function Food({fav}) {
  
  return <h3>I like {fav}</h3>
}

Food.propTypes = {
  fav: PropTypes.string.isRequired
}

function App() {
  
  return (
    <div className="App">
      {foods.map(function(item, index) { 
        return <Food key={index} fav={item} />
      })
      }
    </div>
  );
}

export default App;
