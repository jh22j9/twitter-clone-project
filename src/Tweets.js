import React from 'react'
import Tweet from './Tweet'
import './Tweets.css';

function Tweets() {
  return (
    <>
    <div className="tweet">
      <Tweet />
    </div>
    <div className="tweet">
      <Tweet />
    </div>
    <div className="tweet">
      <Tweet />
    </div>
    </>
  )
}

export default Tweets
