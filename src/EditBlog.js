import {useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import{useEffect} from 'react'
import useFetch from './useFetch';
const EditBlog = () => {
    const {id:id_param}=useParams();
    const {data:blog,isPending:isPendingGettingData,} = useFetch('http://localhost:9000/blogs/'+id_param);
    //debugger;
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('');
    const [isPending, setIsPending]=useState(false);
    useEffect(() => {
        if(blog){
            console.log("when the blog is ready it will initialize the following variables the title,body,author with blog api data at first");
            setTitle(blog.title);
            setBody(blog.body);
            setAuthor(blog.author);
        }
    },[blog]);
    
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsPending(true);
            let [a,b,c]=[title,body,author];
            let editedBlog={title:a,body:b,author:c};
    
        fetch('http://localhost:9000/blogs/'+id_param,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
            method: "PATCH",
            body: JSON.stringify(editedBlog)
        })
        .then((res)=>{
            if(res.status === 400)
                console.log("Bad Request",res);
            else if(res.status === 404)
                console.log("Not Found",res);
            else{
            console.log("The Blog Is Edited",res);
            setIsPending(false);
            navigate('/');}
        }).catch((err)=>console.log(err));
    }
    return ( 
        <div className="edit-blog">
            {isPendingGettingData && <h1>Geeting Data ...</h1>}
            {!isPendingGettingData && 
            <div className="ss">
                <h2>Edit Blog {blog.title}</h2>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="title">Blog Title :</label>
                    <input type="text" 
                    value={title}
                    onChange={((e)=>setTitle(e.target.value))}
                    required/>
                    <label htmlFor="body">Blog Body :</label>
                    <textarea type="text"
                    value={body}
                    onChange={((e)=>setBody(e.target.value))}
                    required>
                    </textarea>
                    <label htmlFor="author">Blog Author :</label>
                    <select
                    value={author}
                    onChange={((e)=>setAuthor(e.target.value))}
                    required>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    {!isPending && <button>Edit Blog</button>}
                    {isPending && <button disabled>Editting blog ...</button>}
                </form>
            </div>
            }
        </div>
     );
}
 
export default EditBlog;