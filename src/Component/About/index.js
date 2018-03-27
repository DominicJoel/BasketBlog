//Dependencies
import React, { Component } from 'react';

class About extends Component{
    render(){
        return ( 
           
            <div id="about">
         <nav class="navbar navbar-expand-lg navbar-inverse  fixed-top" id="mainNav" >
            <div class="container">
              <a class="navbar-brand" href="index.html">Basket's Blog</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fa fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive" >
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href='/About'>About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Login">Login</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/SignIn">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

            <div className="row">
                 <div className="col-lg-8 col-md-10 mx-auto">
                       <h1> About </h1>
                       <hr/>
                        <p className ="p">El baloncesto es uno de los deportes más practicados del mundo, con más de 450 millones de jugadores en 2013. Se juegan numerosas ligas y campeonatos en el mundo entero, sobre todo en Europa y más recientemente en Asia, donde el deporte ha despuntado en el siglo XXI. Las mujeres representan una buena parte de los practicantes, a pesar de una exposición menor en los medios del baloncesto femenino. Se han desarrollado algunas variantes, como el baloncesto en silla de ruedas para deportistas discapacitados, el streetball y el baloncesto 3x3.</p>
                        <p className ="p">James Naismith, un profesor canadiense de educación física, inventó el baloncesto en 1891 en la YMCA de Springfield, Massachusetts, Estados Unidos. El deporte ganó rápidamente popularidad y se expandió por las universidades y colegios norteamericanos a principios del siglo XX. La Federación Internacional de Baloncesto (FIBA) surgió en 1932 y el deporte debutó en los Juegos Olímpicos de verano en 1936. En 1946 se fundó la principal liga profesional de los Estados Unidos, la <strong>National Basketball Association (NBA). </strong> </p>
                        <p className ="p">Este Blog fue creado para que todo tipo de <strong> Persona </strong> pueda estar enterada de todo lo relacionado con el Basket de la manos de expertos</p>
                 </div>
             </div>
             </div>      
      );
    }
}

export default About;