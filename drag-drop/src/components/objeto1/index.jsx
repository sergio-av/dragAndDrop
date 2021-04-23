import React, { useState} from "react";

import { Rnd } from "react-rnd";

const styleObjeto1 ={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
}

const Objeto1 = () =>{

    

    const [state, setState] = useState({
        width: 200,
        height: 200,
        x: 10,
        y: 10
    });

   

    return  (
        <div>
            <Rnd
                style={styleObjeto1}
                size={{ width: state.width,  height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setState({ x : d.x, y : d.y });
                    console.log('soy la x', state.x , 'soy la y', state.y)
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setState({
                      width: ref.style.width,
                      height: ref.style.height,
                      ...position
                    });
                  }}

            >
                Objeto1
            </Rnd>
        </div>
    )
}
export default Objeto1
