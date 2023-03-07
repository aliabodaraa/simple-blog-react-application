import {Link} from 'react-router-dom';
const BlogList = ({blogs,title}) => {
    return (
        <div className="blogs">
            <h1>{title}</h1><br /><hr />
                {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>written by {blog.author}</p>
                        </Link>
                        <Link to={`/blogs/edit/${blog.id}`} className="edit-blog">Edit
                        </Link>
                    </div>
                ))}
        </div>
    );
}
 
export default BlogList;