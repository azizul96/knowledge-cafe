import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ">
            <div>
                <h1 className="text-2xl font-bold border-2 text-violet-700 rounded-lg border-violet-700 py-5 mt-5 bg-violet-200 px-5">Spent time on read: {readingTime} min</h1>
            </div>
            <div className=" bg-[#f3f3f3] p-5  ">
                <h1 className=" text-2xl p-4 text-white text-center bg-slate-700 font-semibold mb-5">Bookmarks: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;