import React, { useEffect, useState } from 'react';
import { getBlogPosts } from '../services/blogPostService';

const BlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        getBlogPosts()
            .then(response => setBlogPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            {blogPosts.map(post => (
                <div key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>{new Date(post.date).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPosts;
