import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody]=useState('');
    const [author, setAuthor]=useState('yoshi');
    const [isPending, setIsPending]=useState(false);
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsPending(true);
        const newBlog={title,body,author};
        //console.log(newBlog);
        fetch('http://localhost:9000/blogs',
        {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBlog),
        })
        .then(()=>{
            console.log("A New Blog Is Added");
            setIsPending(false);
            navigate('/');
        });
    }   
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
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
                {!isPending && <button>Add A New Blog</button>}
                {isPending && <button disabled>Adding blog ...</button>}
            </form>
        </div>
     );
}
 
export default Create;