import React from 'react'

function Button() {
    const btnStyle = {
        width: "200px",
        backgroundColor: 'var(--basic-red)',
        padding: "19px",
        borderRadius: "100px",
        textAlign: "center",
        color: "#fff",
        cursor: "pointner",
        border: "none"
        // marginTop: "0"
    }
    return (
        <button style={btnStyle}>Comprar</button>
    )
}

export default Button