import { useEffect } from "react";
import "./Home.scss";

function Home () {
            const posts = useEffect(() => {
                fetch("http://localhost:4000/posts",)
                .then(response => response.json())
                .then(data => console.log(data))
            }, [])


            return (
                <>
                    <h2>Posts</h2>
                    {
                        posts.length > 0 && <ul>
                            {
                                posts.map((post) => {
                                    <li>
                                        <img src={post.post_img} />
                                        <h3>{post.post_title}</h3>
                                        <p>{post.post_text}</p>
                                    </li>
                                })
                            
                            }
                        </ul>
                    }
                </>
            )
}

export default Home