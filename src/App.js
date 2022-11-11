import './App.css';
import axios from './Axios';
import { useState, useEffect } from 'react';
import requests from './Requests';

const App = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get(requests.getPosts)
      .then(resp => {
        setPosts(resp.data)
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  return (
    <div>
      <h1>やること一覧</h1>
      {posts.map((value, key) => {
        return (
          <div key={key}>
            <p>{value.id}</p>
            <p>{value.title}</p>
            <p>{value.content}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
