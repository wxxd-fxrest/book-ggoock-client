import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [backData, setBackData] = useState([{}]);
  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(
      data => {
        setBackData(data);
      }
    )
  }, []); 

  const getMusic = async() => {
    const response = await fetch(`
      https://www.googleapis.com/books/v1/volumes?q=꽃+&key=${process.env.REACT_APP_BOOK_API}
    `) ;
    const response2 = await fetch(`
      https://www.googleapis.com/books/v1/volumes?q=안녕+&key=${process.env.REACT_APP_BOOK_API}
    `) ;
    const json = await response.json(); 
    const json2 = await response2.json(); 
    console.log(json, json2) ;
  } ; 

  useEffect(() => {
    getMusic(); 
  }, [])

  return (
    <div>
      {(typeof backData.user === 'undefined') ? (
        <p> Loading... </p>
      ) : (
        backData.user.map((user, i) => (
          <p key={i}> {user} </p>
        ))
      )}
    </div>
  );
}

export default App;
