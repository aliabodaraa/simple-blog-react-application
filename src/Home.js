import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    useEffect(()=>console.log("call when render the page in case we reload or any reactive value change"));

    const [blogs,setBlogs]=useState([
        {title:"title 1",body:"body 1",author:"author 1",id:1},
        {title:"title 2",body:"body 2",author:"author 2",id:2},
        {title:"title 3",body:"body 3",author:"author 3",id:3},
        {title:"title 4",body:"body 4",author:"author 4",id:4}
    ]);
    const handleDelete=(id) => {
        const newBlogs=blogs.filter(blog => blog.id!==id);
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
// useState hook use when the reactive variables changes that lead to rerendering the page to updates the value of the variable
// useEffect that will run every time there is a re-render so once initially when the component first load but thereafter the data changes,like when you delete a blog from array then the state is changed and that will trigger a re-render and on that re-render again that trigger the function that pass to useEffect(fun)
//     useEffect(()=>console.log("call when render the page in case we reload or any reactive value change"));

// you can make the useEffect triggers only when the component first load via add an empty array as a second param that represents acual dependencies
//  useEffect(()=>console.log("call when render the page in case we reload or any reactive value change"),[]);
//  note : any reactive value you added to dependencies array, the useEffect is going to watch this value and if it changes it will run the function
//best usage for fetching data