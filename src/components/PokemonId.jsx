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
            <h3 style={{color:typeColors[pokemon.type], margin: "0 0 2px 0"}}>{typeEmojis[pokemon.type]} {pokemon.type}</h3>
            <h3 style={{margin: "0 0 8px 0"}}>{pokemon.name}</h3>
            
            <div style={{
                backgroundColor: "white",
                borderRadius: "50%",
                border: "1px solid",
                borderColor: typeColors[pokemon.type],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4px",
            }}>
                
                <img 
                    style={{ width: "100%", height: "120px", objectFit: "contain"}}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                    alt={pokemon.name}
                />
            </div>

            <div style={{display:"flex", justifyContent: "space-between", width: "80%", margin:"10px 0 0 15px" }}>
                <div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                  <p style={{margin: 0, fontSize: "12px", color: "gray"}}>HP </p>
                  <p style={{margin: 0, fontWeight: "500"}}>{pokemon.hp}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                  <p style={{margin: 0, fontSize: "12px", color: "gray"}}>Attack </p>
                  <p style={{margin: 0, fontWeight: "500"}}>{pokemon.attack}</p>
                </div>

            </div>
        </Card>
    </div>
  );
};

export default PokemonId;