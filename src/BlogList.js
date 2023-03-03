const BlogList = ({blogs,title}) => {

    return (
        <div className="blog-preview">
            <h2>{title}</h2>
                {blogs.map((blog)=>
                    (<div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <h2>written by {blog.author}</h2>
                    </div>))
                }
        </div>
    );
}
 
export default BlogList;