import { useEffect, useState } from "react";
import axios from 'axios';
export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get('https://picsum.photos/v2/list?page=2&limit=5').then((res)=>{
            console.log(res.data);
            setPosts(res.data);
        })

    },[])
    return (
        <div className="conatiner">
            <div className="post-conatiner">
                {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <img src={post.download_url} alt="post" />
                    </div>
                ))}
            </div>

        </div>
    )

    
}