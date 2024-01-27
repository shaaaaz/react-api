import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [myData, setMyData] = useState([])

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: {
        'Authorization': 'authorization'
      }
    })
      .then(res => {
        const bookData = res.data
        console.log(bookData)
        setMyData(bookData.books)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
    <div className="flex"><h1>Book Shop</h1></div>
      {myData.map((el) => {
        return (
          <div key={el.id} className='flex'>
            <h2>{el.title}</h2>
            <div className='leftArea'>
              <img src={el.imageLinks.smallThumbnail} alt="book Img" />
              <h4>{el.description}</h4>
            </div>
            <h2>{el.authors}</h2>

            <br />
          </div>
        )
      })}
    </>
  )
}

export default App
