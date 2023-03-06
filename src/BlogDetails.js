import { useParams } from "react-router";//or `react-router-dom` also correct
import useFetch from './useFetch';
const  BlogDetails = () => { //abbreviation stateless functional component
    const {id}=useParams();
    const {data:blog,isPending,error} = useFetch('http://localhost:9000/blogs/'+id);

    return ( 
        <div className="blog-details">
           {error && <div>{error}.</div>}
           {isPending && <div>Loading ...</div>}

           {blog && (
                <article>
                    <h2>Blog Details {id}</h2>
                    <p>written By {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
                )}
        </div>
     );
}
 
export default BlogDetails;