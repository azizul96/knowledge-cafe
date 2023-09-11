

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="p-4 bg-orange-100 mb-3 rounded-lg">
            <h1 className="text-2xl">{title}</h1>
        </div>
    );
};

export default Bookmark;