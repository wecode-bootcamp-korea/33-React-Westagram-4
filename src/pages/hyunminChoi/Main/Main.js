import React, { useState, useEffect } from 'react';
import Nav from '../../../../src/components/Nav/Nav.js';
import Feed from '../components/Feed.js';
import MainRight from '../components/MainRight';
import './Main.scss';

function Main() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('data/feedData.json', {})
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <section>
        <div className="wrapper">
          <div className="main">
            {/* 피드영역 */}
            {feed.map(feedList => (
              <Feed
                key={feedList.id}
                profileName={feedList.userName}
                userPhoto={feedList.userPhoto}
                feedPhoto={feedList.feedPhoto}
              />
            ))}

            {/* 우측메뉴 */}
            <MainRight />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Main;
