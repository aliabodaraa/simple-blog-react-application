import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:9000/blogs')
    return ( 
        <div className = "home" >
           {error && <div>{error}.</div>}
           {isPending && <div>Loading ...</div>}
           {blogs && <BlogList blogs={blogs} title={"allBlogs"}/>}
        </div>
    );
}

export default Home;
// useState hook use when the reactive variables changes that lead to rerendering the page to updates the value of the variable
// useEffect that will run every time there is a re-render so once initially when the component first load but thereafter the data changes,like when you delete a blog from array then the state is changed and that will trigger a re-render and on that re-render again that trigger the function that pass to useEffect(fun)
//     useEffect(()=>console.log("call when render the page in case we reload or any reactive value change"));

// you can make the useEffect triggers only when the component first load via add an empty array as a second param that represents acual dependencies
//  useEffect(()=>console.log("call when render the page in case we reload or any reactive value change"),[]);
//  note : any reactive variable you added to dependencies array, the useEffect is going to watch this value and if it changes it will run the function
//best usage for fetching data