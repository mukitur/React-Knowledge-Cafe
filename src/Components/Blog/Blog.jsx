import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between align-center">
        <div className="flex align-center">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button className="ml-2 text-2xl text-red-500">
            <FaBookmark />
          </button>
        </div>
      </div>

      <h2 className="text-4xl my-4">{title}</h2>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{' '}
          </span>
        ))}
      </p>
      <button>mark as read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
