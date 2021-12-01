import React, {useState} from 'react';
import API from './api'; 

function App() { 
 
    API.get('/posts')
    .then(resposta => console.log(resposta))  
    return (

        <div>Comece aqui!</div>
    );
}

export default App;