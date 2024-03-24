import './box.css'
export default function Post({post}){
    const {userId,id,title} = post;
    return(
        <div className='box'>
            <h3 className='box'>UserId : {userId}</h3>
            <h2>Title : {title}</h2>
            <h3>Id : {id}</h3>
        </div>
    )
}