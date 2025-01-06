import React from 'react';
import Footer from './Footer'
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
            <h4>
                <a href="blogs/signup.html">
                    Want to sign up for my blog?
                </a>
            </h4>
            <br />
            <h3>Recent Blogs</h3>
            <li><Link to="/blogs/starting-computer-science">What I Wish I Knew When I Got Into Computer Science</Link></li>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
}

export default BlogsHome;
