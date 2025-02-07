import React from "react";
import PropTypes from "prop-types";
import "./BlogBanner.css";

function BlogBanner({ imgPath, linkText, linkUrl }) {
    return (
        <>
            <div className="blogBannerImgContainer">
                <img className="blogBannerImg" src={imgPath} alt="Blog Banner" />
            </div>
            <p>
                <a className="bannerLinkText" href={linkUrl} target="_blank" rel="noopener noreferrer">
                    {linkText}
                </a>
            </p>
        </>
    );
}

BlogBanner.propTypes = {
    imgPath: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
};

export default BlogBanner;
