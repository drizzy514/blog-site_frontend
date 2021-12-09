import { useEffect, useRef } from "react";



function Admin () {
        const postTitle = useRef()
        const postText = useRef()
        const postImg = useRef()
    const posts = useEffect(()=>{
        fetch("http://localhost:4000/posts")
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])
        return (
            <>
            <h2>Create post</h2>
                <form  method="post">
                    <input type="text" className="post-title" ref={postTitle} placeholder="post title"/>
                    <input type="text" className="post-content" ref={postText} placeholder="post content"/>
                    <input type="file" ref={postImg}/>
                    <button 
                        onClick={async (e) => {
                            e.preventDefault()
                            console.log(postImg.current.files[0].name)
                            e.preventDefault()
                            await fetch("http://localhost:4000/createpost", {
                                method: "POST",
                                body: JSON.stringify({
                                    title: postTitle.current.value,
                                    text: postText.current.value,
                                    poster: postImg.current.files[0].name
                                }),
                                headers: {
                                    "Content-type": "application/json"
                                }
                            })
                        }}
                    type="submit" className="post-btn">Post</button>
                </form>
                <h2>Delete Post</h2>
            
                <form>
                    {
                            posts.length > 0 && <select>
                                {
                                    posts.map((post) => (
                                        <option key={post.post_id}> {post.post_title}</option>
                                    ))
                                }
                            </select>
                        }
                </form>
            </>
        )
}

export default Admin