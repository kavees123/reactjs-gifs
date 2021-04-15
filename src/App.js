
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import classes from './App.module.css';
import Cards from '../src/Cards/Cards';
import ScrollButton from './Scrollbutton/ScrollButton';
function App() {
  const [gifs, setGifLinks] = useState([])
  const [rating,setrating] = useState("g");
  const [rating_change,setrating_change] = useState(false);
  const [limit,setlimit] = useState(3);
  const [limit_change,setlimit_change] = useState(false);
  const [showbutton, setshowbutton]= useState(true);
   useEffect(() => {
    //console.log("the rating is " + rating)
          fetchdata();
          if(limit >= 50){
            setshowbutton(false);
          }
    }, [rating_change,limit_change])
   
   
  

   const  fetchdata = () => {
      let url = "https://api.giphy.com/v1/stickers/trending?api_key=KOcz4hSduhvMzZH77D08FFxotEhYrfvn&limit="+limit+"&rating="+rating;

      fetch(url)
          .then(response => response.json())
          .then(gifLinks => {
     //       console.log(gifLinks.data);
             setGifLinks(gifLinks.data )
            
          })
    }

 
    const  ratingchange = (element) => {
      console.log("The value from the drop down is " + element);
      setrating(element);
      setrating_change(!rating_change);
      
     
    }
    const change_limit = () => {
      setlimit(limit + 3);
      
      setlimit_change(!limit_change);
    }
    const change_rating = () => {
    //  window.location.reload();
      setrating_change(!rating_change);
      
    }
  return (
    <div style={{textAlign: "center"}}>

 {/*  <div >
        <input type="text" value={limit} onChange={(e) =>setlimit(e.target.value) } />
      </div> */}
    <br></br>
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Change Rating</button>
      <div className={classes.dropdowncontent}>
      <a href="#"value="G" onClick={element => ratingchange('g')}>G</a>
      <a href="#"value="PG" onClick={element => ratingchange('pg')}>PG</a>
      <a href="#"value="pg-13" onClick={element => ratingchange('pg-13')}>PG-13</a>
      <a href="#"value="r" onClick={element => ratingchange('r')}>R</a>
      </div>
    </div>
      {/* <select onChange={element => ratingchange(element)} >
    <option value="g">G</option>
    <option value="pg">PG</option>
    <option value="pg-13">PG-13</option>
    <option value="r">R</option>
  </select> */}
  <br></br>
{/*   <button onClick={change_rating}>Change Rating</button> */}
      {gifs.map(gif => (
        <Fade top key={gif.id}>
        <div>
          
           
            {/* <img
              key={gif.id}
              src={gif.images.fixed_width_small.url}
              alt={gif.title}
            /> */}
            <Cards title={gif.title} id={gif.id} src={gif.images.fixed_width_small.url} rating={gif.rating} username={gif.username} ></Cards>
            </div>
            </Fade>
          ))}
     { showbutton? <button className={classes.button} onClick={change_limit}>Show More</button> : null}
     <ScrollButton></ScrollButton>
    </div>
  );
}

export default App;
