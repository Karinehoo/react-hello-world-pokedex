import Card from './PokemonCard'
import { typeColors, typeEmojis } from '../constants'



const PokemonId = ({ pokemon }) => {
  return (
    <div>
        <Card> 

          <div style={{
            backgroundColor: "#e0e0e0",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1px",
            marginBottom: 8,
            }}>
                
            <img 
              style={{ width: "100%", height: "150px", objectFit: "contain"}}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
              alt={pokemon.name}
            />
          
          </div>

          <p style={{margin: "0 0 2px 0", fontSize: "11px", color: "gray"}}>N° {String(pokemon.id).padStart(4, "0")}</p>
          <h3 style={{margin: "0 0 8px 0", fontSize: "16px"}}>{pokemon.name}</h3>

          <span style={{
            backgroundColor: typeColors[pokemon.type],
            color: "white",
            borderRadius: 4,
            padding: "2px 8px",
            fontSize: "12px",}}>
              {pokemon.type}
          </span>

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