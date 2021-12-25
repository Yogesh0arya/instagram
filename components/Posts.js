import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post"

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => 
        // use snapshot listner from firebase fetch according to timestamp in descending value
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })

        // we get a listner. So, we want to clean up the useEffect function everytime by passing up the value here
        // const unsubscribed = onSnapshot
        // return unsubscribe

    , [db])

    // console.log(posts)
    

    return (
        <div>
            {posts.map(post => (
               <Post key={post.id} id={post.id} username={post.data().username} userImg={post.data().profileImg} img={post.data().image} caption={post.data().caption} /> 
            ))}
            
        </div>
    )
}

export default Posts
