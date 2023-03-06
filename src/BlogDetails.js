import { useParams } from "react-router";//or `react-router-dom` also correct
import useFetch from './useFetch';
import { useNavigate } from "react-router";
const  BlogDetails = () => { //abbreviation stateless functional component
    const {id}=useParams();
    const navigate=useNavigate();
    const {data:blog,isPending,error} = useFetch('http://localhost:9000/blogs/'+id);
    const deleteHandler=()=>{
        fetch('http://localhost:9000/blogs/'+blog.id,
        {
            method:'DELETE',
        })
        .then(()=>{
            console.log("Delete The Blog That have the id = "+blog.id);
            navigate('/');
        });;

    };
    return ( 
        <div className="blog-details">
           {error && <div>{error}.</div>}
           {isPending && <div>Loading ...</div>}

           {blog && (
                <article>
                    <h2>Blog Details {id}</h2>
                    <p>written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={deleteHandler}>Delete</button>
                </article>
                )}
        </div>
     );
}
 
export default BlogDetails;