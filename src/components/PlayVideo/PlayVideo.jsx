import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { use } from 'react'
import { API_KEY } from '../../data'
import { data } from 'react-router-dom'
import moment from 'moment'

const PlayVideo = ({ videoId }) => {

  const [apiData, setApiDta] = useState(null);
  const fetchVideoData = async () => {
    //fetching videos data
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetail_url).then(res => res.json()).then(data => setApiDta(data.items[0]))

  }

  useEffect(() => {
    fetchVideoData()

  }, [videoId])

  if (!apiData || !apiData.snippet || !apiData.statistics) {
    return <div className="play-video">Loading video...</div>;
  }
  return (
    <div className='play-video'>
      {/*<video src={video1} controls autoPlay muted></video>*/}
      <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData ? apiData.snippet.title : "title here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? apiData.statistics.viewCount : "16k"} &bull; {moment(apiData.snippet.publishedAt).fromNow()}</p>
        <div>
          <span><img src={like} alt='' />125</span>
          <span><img src={dislike} alt='' />125</span>
          <span><img src={share} alt='' />125</span>
          <span><img src={save} alt='' />125</span>
        </div>
      </div>


    </div>
  )
}

export default PlayVideo