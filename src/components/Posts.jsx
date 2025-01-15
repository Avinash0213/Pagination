import { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "./Pagination";
export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
        axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`).then((res)=>{
            setPosts(res.data);
        })

    },[currentPage])
    return (
        <div className="conatiner">
            <div className="post-conatiner">
                {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <img src={post.download_url} alt="post" />
                    </div>
                ))}
            </div>
        <Pagination pageNo={currentPage} setPageNo={setCurrentPage}/>

        </div>
    )

    
}