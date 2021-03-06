//Dependencies
import React, { Component } from 'react';

//Data
import Items from '../MainBlog/data';

//firebase
import firebase from 'firebase';


class Details extends Component{
  
  constructor ( props ){
    super(props);
      
    this.state = {
      posts: []
    }

  }

   
  componentWillMount(){
    let res = [];
    var that = this;

    const  {match}  = this.props;//Para capturar el parametro
    const numero = match.params.postId ;

    // console.info(numero);

                    var query = firebase.database().ref('posts1/'+numero);
                    query.once("value")
                            .then(function(childSnapshot) {
                             
                                var childData = childSnapshot.val();
                                    res.push(childData);

                                   console.log(childData);
                                   //debugger;
                              
                                }).then( function() {
                                        that.setState({
                                            posts : res
                                        })
                                })//Fin del then sin function

 }


    render(){
   

         const data = this.state.posts.map((data, key ) => { //Constante para renderizar los datos en la vista 
          return(
         <article>  
            <div className="row">
                      
                   
                    <div className="col-lg-8 col-md-10 mx-auto">
                        
                        <h1 className="section-heading">{ data.tituloPrincipal }</h1>
                         
                         <hr/>
                        <h3>{data.subTitulo}</h3>
                       
                        <p>{data.detalle}</p>

                        <blockquote className="blockquote">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>

                        <p>Placeholder text by <a href="#"> {data.nombreCompleto}</a>.</p>
                        
                    </div>
                    </div>
        
            <hr />
            
      </article>
       )

      })//Fin de la constante
      


        return ( 
        
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-inverse  fixed-top" id="mainNav" >
                      <div className="container">
                        <a className="navbar-brand" href="index.html">Basket's Blog</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          Menu
                          <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive" >
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href='/About'>About</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/Login">Login</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/SignIn">Sign Up</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                </nav>

                        {data}
                </div>          
                
      );
    }
}

export default Details;