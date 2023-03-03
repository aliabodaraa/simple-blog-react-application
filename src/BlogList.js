const BlogList = ({blogs,title,handleDelete}) => {

    return (
        <div className="blog-preview">
            <h2>{title}</h2>
                {blogs.map((blog)=>
                    (<div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h2>written by {blog.author}</h2>
                        <button onClick={()=>handleDelete(blog.id)}>delete blog</button>
                    </div>))
                }
        </div>
    );
}
 
export default BlogList;