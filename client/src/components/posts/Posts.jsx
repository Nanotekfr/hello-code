import Post from '../post/Post'
import './posts.css'
import PropTypes from 'prop-types'

Posts.propTypes = {
  posts: PropTypes.string
}

export default function Posts ({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} key='post' />
      ))}
    </div>
  )
}
