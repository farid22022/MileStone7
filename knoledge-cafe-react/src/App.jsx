import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Header/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'


function App() {

  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

   
  const handleAddToBookmark = (blog) =>{
    const newBookmarks= [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead =(time) =>{
    const newReadingTime = readingTime+time;
    setReadingTime(newReadingTime);
  }


  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}
        readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
