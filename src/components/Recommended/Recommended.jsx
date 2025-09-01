import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY } from '../../data'
import { data } from 'react-router-dom'

const Recommended = ({ categoryId }) => {

    const [setData1, setApiDta1] = useState([]);
    const fetchData = async () => {
        const relatedVideos_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideos_url).then(resp => resp.json()).then(data => setApiDta1(data.items))
    }

useEffect(() => {
    fetchData();

}, [categoryId])

return (
    <div className='recommended'>
        {setData1.map((items, index) => {
            return (
                <div key={index} className='side-video-list'>
                    <img src={items.snippet.thumbnails.medium.url} alt='' />
                    <div className="vid-info">
                        <h4>{items.snippet.title}</h4>
                        <p>{items.snippet.channelTitle}</p>
                        <p>{items.snippet.viewCount}</p>

                    </div>

                </div>

            )

        })}

    </div>


)
}

export default Recommended;