import React, { Component, useState } from 'react';
import API from './api'

function App() { 
    const [posts, setPosts] = useState([]);
    function show(){API.get('/posts').then(add => setPosts(add.data));}
    const arr = posts.map((e) => {return String(Object.values(e)[0]);})
    var userId = arr.filter((j, i) => arr.indexOf(j) === i);
    function UserId(){
        let userIds: { label: string; value: string; }[]= []

        userId.forEach(function(element) {
            userIds.push({ label:element, value: element })
        });
        return userIds;
    }
    const [selectedOption, setSelectedOption] = useState(userId[0]);
    return (
    <>
        <div>UserId:</div>
        <select onClick={show} onChange={e => setSelectedOption(e.target.value)}>
            <option>Selecione Aqui !</option>

        {UserId().map(item => {return (<option key={item.label} value={item.value}>{item.value}</option>)})}      

        </select> 
        {posts.map((e) => {
            if (String(Object.values(e)[0]) === selectedOption){
                return(
                    <><p>UserId:{String(Object.values(e)[0])}</p>
                       <p>Id:{String(Object.values(e)[1])}</p>
                       <p>Titulo:{String(Object.values(e)[2])}</p>
                       <p>Corpo:{String(Object.values(e)[3])}</p>
                    <br></br></>
                );
            }
        })}
 </>
    ); 
}
//vamos la!!! falta pouco!!!
export default App;
