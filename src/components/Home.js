import React from 'react';




 const Home = (props) => {
  return (
    <section id="top" className="App-home">
    <div className="contain">
     <div className="info">
      <div className="blue-box"></div>
       <h1>{props.author}</h1>
       <p>Full-Stack Web Developer</p>
       <a href="/" >Latest Works</a>
      </div> 
      <div className="img">
       <div className="bkground-img"></div>
      </div>
      </div>
    </section>
  )
}



export default Home;
