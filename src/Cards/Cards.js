import React from "react";
import ReactCardFlip from "react-card-flip";
import classes from '../App.module.css';
const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "400px",
    display: "inline-block"
  };
  const Card = ( project ) => {
    const [isFlipped, setIsFlipped] = React.useState(false);
    // console.log(project);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={CardStyle}
         // onMouseEnter={() => setIsFlipped((prev) => !prev)}
          className="CardFront"
        >
          <div>
          
            <h3>{project.title}</h3>
  
            <img
            width="200"
            height="200"
              key={project.id}
              src={project.src}
              alt={project.title}
            />
          <button className={classes.button} onClick={() => setIsFlipped((prev) => !prev) }>Click me for more details</button>
          </div>
        </div>
        <div
          style={CardStyle}
       //   onMouseLeave={() => setIsFlipped((prev) => !prev)}
          className="CardBack"
        >
           <p>Title: {project.title}</p>
           <p>Id: {project.id}</p> 
           <p>Rating: {project.rating}</p>
          <p>Username: {project.username}</p>
          <button className={classes.button} onClick={() => setIsFlipped((prev) => !prev) }>Click me to go back to the GIF</button>
        </div>
      </ReactCardFlip>
    );
  };

export default Card;