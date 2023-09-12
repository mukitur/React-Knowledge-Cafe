import { useState } from 'react';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    // console.log(blog);
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  const handleMarkAsRead = (id, time) => {
    // console.log('mark as read', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // Remove bookmark
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto my-12 gap-8">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
