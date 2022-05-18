import React, { useEffect } from 'react';
import Nav from '../../../components/Nav/Nav.js';
import './Main.scss';
import { useState, useRef } from 'react';
import Aside from './Aside/Aside.js';
import Feeds from './feed.js';

function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feeds.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <main>
        <section>
          {feeds.map(feeds => (
            <Feeds feeds={feeds} key={feeds.id} />
          ))}
        </section>
        <Aside />
      </main>
    </>
  );
}
export default Main;
