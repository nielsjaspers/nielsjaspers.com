import React from 'react';
import BrevoForm from './BrevoForm';
import { Link } from 'react-router-dom';

function BlogsHome() {
    return (
        <div>
            <h2>Welcome to My Blog</h2>
            <p>
                As a Computer Science student, I want to document my learning journey.
                <br />
                Through this blog, I’ll share my discoveries, insights, and maybe some hot takes on the things I’m studying.
                <br />
                These posts are for those learning alongside me, as well as for those interested in the field or who simply enjoy reading.
            </p>
            <h3>Recent Blogs</h3>
            <ul>
                <li><Link to="/blogs/test-blog">Placeholder Example 1</Link></li>
                {/* <li><Link to="/blog/2">Placeholder Example 2</Link></li> */}
            </ul>
            <BrevoForm />
        </div>
    );
}

export default BlogsHome;
