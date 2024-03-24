import { FcBookmark} from "react-icons/fc";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    console.log(blog);
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of the title ${title}`}/>
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14" src={author_img}/>
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} minutes read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}><FcBookmark></FcBookmark></button>
                </div>
                <p>
                    {
                        hashtags.map((hash,idx) => <span key={idx} className="text-blue-900"><a href=""></a>#{hash}</span>)
                    }
                </p>
                <button
                  onClick={()=>handleMarkAsRead(reading_time)}
                 className="text-purple-600 font-bold underline">
                 Mark As Read
                 </button>
            </div>
            <h4 className="text-4xl">{title}</h4>
            
        </div>
    );
};

export default Blog;