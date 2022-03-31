import React, { useEffect, useRef } from 'react';
import colorTable from '../IsoBar/colorTable';
import "../IsoBar/IsoBarStyles.css"

let x = 0; 
export default function IsoBar(props) {

  //Destructoring the props 
  const {lowLabel, highLabel, titleLabel} = props;

  //reference to the canvas board
  const canvasRef = useRef(null);

  //Starting position for the gradient;

  useEffect(()=>{
    const render = () =>{
      const canvasBoard = canvasRef.current.getContext('2d');
      const IsoColor = canvasBoard.createLinearGradient(0,0,0,170);

      //Position for the gradient points
      let startPosition = 0;
      
      // IsoColor.addColorStop(startPosition, colorTable.map(x => x.forEach(y => `rgba(${y})`)));

      IsoColor.addColorStop(0, "red");
      IsoColor.addColorStop(1, "white");

      //Fill with Gradient
      canvasBoard.fillStyle =  IsoColor;
      canvasBoard.fillRect(0,0,30,149);
      
      requestAnimationFrame(render)

        // Adding the text to the canvas 
        const canvasText = canvasBoard;
        canvasText.font = "7px Poppins";
        canvasText.strokeText(titleLabel, 3, 7)
        canvasText.strokeText(lowLabel , 5, 25);
        canvasText.strokeText(highLabel , 5, 137);
        canvasText.translate(-150, -75)
  }
  render()
}
  ,[])

  return (
    <div>  
        <canvas id='canvasRef' ref={canvasRef}></canvas>
    </div>
    
  )
}


