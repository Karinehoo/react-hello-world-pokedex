import Card from './PokemonCard'

const typeColors = {
  Grass: "#78C850",
  Fire: "#F08030",
  Water: "#6890F0",
  Electric: "#F8D030",
  Psychic: "#F85888",
  Normal: "#A8A878",
  Dragon: "#7038F8",
  Ghost: "#9b8fc0",
  Fighting: "#C03028",
  Rock: "#B8A038",
};

const typeEmojis = {
  Grass: "🌿",
  Fire: "🔥",
  Water: "💧",
  Electric: "⚡",
  Psychic: "🔮",
  Normal: "⭐",
  Dragon: "🐉",
  Ghost: "👻",
  Fighting: "👊",
  Rock: "🪨",
};


const PokemonId = ({ pokemon }) => {
  return (
    <div>
        <Card borderColor ={typeColors[pokemon.type]}> 
            <h3 style={{ color:typeColors[pokemon.type], margin: "0 0 3px" }}>{pokemon.name}</h3>
            <p style={{ fontWeight: "bold" }}>{typeEmojis[pokemon.type]} {pokemon.type}</p>
            <img 
                style={{ width: "100%", height: "120px", objectFit: "contain"}}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                alt={pokemon.name}
            />
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <p>HP: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
            </div>
        </Card>
    </div>
  );
};

export default PokemonId;