import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:"title 1",body:"body 1",author:"author 1",id:1},
        {title:"title 2",body:"body 2",author:"author 2",id:2},
        {title:"title 3",body:"body 3",author:"author 3",id:3},
        {title:"title 4",body:"body 4",author:"author 4",id:4}
    ]);
    const handleDelete=(id) => {
        const newBlogs=blogs.filter(blog => blog.id!=id);
        setBlogs(newBlogs);
    };
    
    return ( 
        <div className = "home" >
            <BlogList blogs={blogs} title={"allBlogs"} handleDelete={handleDelete}/>
            <hr />
            <BlogList blogs={blogs.filter((blog)=> blog.author!=='author 1'&& blog.author!=='author 2')} title={"Filtered Blogs"}/>
        </div>
    );
}

export default Home;