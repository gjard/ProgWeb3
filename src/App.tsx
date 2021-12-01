import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import API from './api'

async function getRep(){
    const resp = await API.get('/posts');
    return resp.data
    
}

//fetch('https://jsonplaceholder.typicode.com/posts', {
//  method: 'POST',
//  body: JSON.stringify({
//    userId: 1,    CONDIÇÃO ONDE ESCOLHE QUAL USERID MOSTRAR
//  }),
//  headers: {
//    'Content-type': 'application/json; charset=UTF-8',
//  },
//})
//  .then((response) => response.json())
//  .then((json) => console.log(json));



function App() { 
    const [posts, setPosts] = useState({});
    console.log('POST')
    console.log(posts)
    
    return (
        <>
        <div>Comece aqui!</div>

        <select id="selectOption">
        <option value="A">UserId:1</option>
        <option value="B">UserId:2</option>
        <option value="C">UserId:3</option>
        <option value="D">UserId:4</option>
        <option value="E">UserId:5</option>
        <option value="F">UserId:6</option>
        <option value="G">UserId:7</option>
        <option value="H">UserId:8</option>
        <option value="I">UserId:9</option>
        <option value="J">UserId:10</option>
        </select>
        
        
        <button onClick={() => setPosts({posts: getRep()})}>
            POST
        </button>
        </>
    );
//FALTA A CONDIÇÃO DE QUE SE ESCOLHER UM VALOR IRA MOSTRAR APENAS UM USUÁRIO
}
export default App;