

const Blog = ({blog, bookmarksHandler, readingTimeHandler}) => {
    const {id,title, cover, author, author_img, reading_time, posted_date, hashtags } = blog
    return (
        <div className=" mb-10">
            <img className="w-full mb-5" src={cover} alt="" />
            <div className="flex justify-between mb-5">
                <div className=" flex">
                    <img className="w-12" src={author_img} alt="" />
                    <div className=" ml-2">
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>

                </div>
                    
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> bookmarksHandler(blog)} className="ml-2"><i className="fa-solid fa-bookmark text-red-500"></i></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-5">{title}</h1>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}><a href="">#{hash} </a></span>)
                }
            </p>
            <button onClick={()=> readingTimeHandler(reading_time, id)} className=" underline mb-5 text-sky-500">Mark As Read</button>
            <hr />
        </div>
    );
};

export default Blog;