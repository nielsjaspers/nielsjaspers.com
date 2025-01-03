import React from 'react';
import { Link } from 'react-router-dom';

function BlogsHome() {
    return (
        <div>
            <h2>Welcome to My Blog</h2>
            <p>
                As a Computer Science student, I want to document my learning journey.
                <br/>
                Through this blog, I’ll share my discoveries, insights, and maybe some hot takes on the things I’m studying.
                These blog posts are meant to help others who are learning alongside me, and for entertainment for those who just like reading blogposts.
            </p>

            <h3>Recent Blogs</h3>
            <ul>
                <li><Link to="/blogs/test-blog">Placeholder Example 1</Link></li>
                {/* <li><Link to="/blog/2">Placeholder Example 2</Link></li> */}
            </ul>
        </div>
    );
}

export default BlogsHome;
