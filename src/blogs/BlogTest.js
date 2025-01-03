import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 
import './Blog.css';

function BlogTest() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/blogs'); 
    };

    return (
        <div className="blogpost">
            <button className="back-button" onClick={handleClick}>
                <FaArrowLeft /> 
                Back
            </button>
            <h2>Placeholder Heading.<br/>You're not supposed to be here yet..👀</h2>
            <p>Placeholder body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices lectus quis cursus interdum. Sed molestie tempor molestie. Fusce ante ligula, tempor ac hendrerit ac, venenatis eu lorem. Quisque posuere tristique metus eu maximus. Morbi vitae dapibus magna, ornare tempus lacus. Nulla facilisi. Sed id maximus massa, sed porttitor neque. Cras sit amet congue ex, sit amet molestie ante. Etiam suscipit non turpis vitae fermentum.

Duis gravida posuere nibh, sed dictum metus aliquet in. Aenean gravida consequat purus. Aliquam erat volutpat. Duis sollicitudin posuere mauris, vel euismod dolor blandit nec. Ut vitae magna eleifend ipsum porta placerat sed ut neque. Vestibulum dignissim neque risus, ut finibus augue facilisis quis. Donec iaculis ultricies mi, non sodales dui euismod ac. Aenean ut erat odio. Pellentesque vel eleifend massa. Mauris pulvinar quam at lobortis rutrum. Vivamus pharetra sit amet est quis convallis. Duis rhoncus, mauris eu imperdiet pharetra, ex sem eleifend purus, non sollicitudin orci mi a risus. Nulla ac tortor in augue pulvinar hendrerit et sit amet leo. Vestibulum pulvinar risus augue, et molestie neque cursus sit amet. Phasellus nec purus in dolor molestie commodo. Vivamus vehicula fermentum tincidunt. Phasellus id ligula dignissim, bibendum nulla vel, tincidunt metus. Donec ornare vitae ipsum et malesuada. Nullam volutpat pharetra lorem, vel ultricies nunc dignissim sed. Phasellus metus augue, finibus vel mi eu, tincidunt cursus risus. Proin lacinia orci quis elementum blandit. Cras sed sem ullamcorper, elementum tellus sit amet, finibus odio. Aliquam venenatis, risus ac consequat lacinia, risus elit vestibulum turpis, vitae cursus massa mi id quam. Sed tempus condimentum maximus. Donec luctus lobortis quam, eu consectetur purus porta id. Duis quis lectus eget nisl porttitor luctus non in diam. Aliquam orci nibh, maximus nec aliquet at, hendrerit et lectus.

Nulla euismod ultricies ex, a pulvinar magna. Donec tincidunt accumsan pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque non eros elit. Cras sodales dapibus eros, id pulvinar lacus tincidunt quis. In ante urna, elementum in faucibus vel, porta id dolor. Sed a lobortis neque, vel elementum orci. Integer tellus mi, blandit vitae lacinia nec, fringilla vitae magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce porttitor interdum nisi, ut fringilla ex accumsan viverra. Ut semper velit ac turpis bibendum, quis consectetur est dictum. Quisque pharetra pharetra erat non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sagittis maximus erat rhoncus rhoncus.</p>
        </div>
    );
}

export default BlogTest;

