import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ">
      <div>
        <h3 className="text-2xl p-4 m-3 border rounded-md text-blue-400 font-bold text-center ">
          Spend Time on read: {readingTime} min
        </h3>
      </div>
      <h2 className="text-3xl ml-4">Bookmark Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
