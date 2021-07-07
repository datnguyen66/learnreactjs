import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';


AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name : "ten bai nhac 1",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg"
        },
        {
            id: 2,
            name : "ten bai nhac 2",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/c/e/7/dce7d09905fd4a7a281125ca2a34fa3a.jpg"
        },
        {
            id: 3,
            name : "ten bai nhac 3",
            thumbnaiUrl: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/2/7172e5eef050a364accf3109a0f7477a.jpg"
        }
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;