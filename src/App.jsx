import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)


  const bookmarksHandler = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const readingTimeHandler = (time, id) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
     // Remove the read blog from bookmarks-------
     const remainingBookmark = bookmarks.filter(bookMark => bookMark.id !== id)
     setBookmarks(remainingBookmark)
  }
 

  return (
    <div className=" container mx-auto">

      <Header></Header>
      <div className=" md:flex gap-5">
        <Blogs bookmarksHandler={bookmarksHandler} readingTimeHandler={readingTimeHandler}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
