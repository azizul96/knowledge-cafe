import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({bookmarksHandler, readingTimeHandler}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    }, [])

    console.log(blogs);
    return (
        <div className=" md:w-2/3 mt-5">
            {/* <h1 className="text-4xl text-center py-5 mt-5">Blogs</h1> */}
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    bookmarksHandler={bookmarksHandler}
                    readingTimeHandler={readingTimeHandler}></Blog>)
            }
        </div>
    );
};

export default Blogs;