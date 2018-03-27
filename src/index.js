//Depnedencias
import React from 'react';
import { render } from 'react-dom';
import {  BrowserRouter as Router } from "react-router-dom";

//Firebase
import firebase from 'firebase';

//Rutas
import AppRoutes from './routes';


import registerServiceWorker from './registerServiceWorker';

//Estilos
import  './Component/Styles/css/clean-blog.css';
import  './Component/Styles/vendor/bootstrap/css/bootstrap.min.css';
import  './Component/Styles/vendor/font-awesome/css/font-awesome.min.css';
import './index.css';


firebase.initializeApp({
    apiKey: "AIzaSyBoPNDBqpSf_l3rEfYdfuVwXia-YyiUI4Y",
    authDomain: "basketblog-c1042.firebaseapp.com",
    databaseURL: "https://basketblog-c1042.firebaseio.com",
    projectId: "basketblog-c1042",
    storageBucket: "basketblog-c1042.appspot.com",
    messagingSenderId: "329197260192"
});


render(
      <Router>  
          <AppRoutes />
      </Router>,
       document.getElementById('root')
);
registerServiceWorker();
