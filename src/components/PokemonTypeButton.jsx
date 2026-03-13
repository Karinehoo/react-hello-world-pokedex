import { useState } from 'react'


import { typeColors, typeEmojis } from '../constants'

const FilterButton = ({type, onSelect}) => {
    const [hovered, setHovered] = useState(false)

    return (
    <button 
        onClick={() => onSelect(type)}
        onMouseEnter={()=> setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
            backgroundColor: typeColors[type]+"33",
            color: "black",
            borderRadius: 4,
            padding: "2px 8px",
            fontSize: "16px",
            cursor: "pointer",
            border: "None",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s ease",
    }}
>
    {type}
</button>
    )
}

export default FilterButton;