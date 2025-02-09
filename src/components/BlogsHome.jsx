import React from "react";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import './BlogsHome.css';

import StaCSImg from '../images/first.jpg';
import WeaProImg from '../images/second.jpg';

function BlogsHome() {
    return (
        <>
            <h2>Welcome to My Blog</h2>
            <p>
                As a Computer Science student, I want to document my learning journey.
                <br />
                Through this blog, I’ll share my discoveries, insights, and maybe some
                hot takes on the things I’m studying.
                <br />
                These posts are for those learning alongside me, as well as for those
                interested in the field or who simply enjoy reading.
            </p>
            <h4>
                <a href="blogs/signup.html">Want to sign up for my blog?</a>
            </h4>
            <br />
            <h3>Recent Blogs</h3>
            <div className="blog-card-container">
                <BlogCard
                    title="What I Wish I Knew When I Got Into Computer Science"
                    description="Some advice for new computer science students."
                    imageUrl={StaCSImg}
                    linkTo="/blogs/starting-computer-science"
                />
                <BlogCard
                    title="Weaponizing Procrastination."
                    description=""
                    imageUrl={WeaProImg}
                    linkTo=""
                />
            </div>
            <Footer />
        </>
    );
}

export default BlogsHome;
