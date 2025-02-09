import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ title, description, imageUrl, linkTo }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {linkTo ? (
          <Link to={linkTo} className="card-link">
            Read More
          </Link>
        ) : (
          <p className="coming-soon">Coming Soon! 👀</p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
