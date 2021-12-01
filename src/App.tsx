import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import API from './api'

async function getRep(){
    const resp = await API.get('/posts');
    return resp.data
}
function App() { 
    const [posts, setPosts] = useState({});
    console.log('POST')
    console.log(posts)
    return (
        <>
        <div>Comece aqui!</div>
        <button onClick={() => setPosts({posts: getRep()})}>
            POST
        </button>
        </>
    );

}
export default App;