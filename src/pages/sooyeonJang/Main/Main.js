import { useState } from 'react';
import React from 'react';
import './Main.scss';
import Comment from './Comment';

const Main = () => {
  const [newReply, setReply] = useState('');
  const [replies, setReplies] = useState([]);

  const textChange = e => {
    setReply(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newReply.length === 0) return;
    setReplies(replies.concat(newReply));
    setReply('');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-wrapper">
          <span className="logo">Westagram</span>
          <input type="text" placeholder="Search" className="search-box" />
          <div className="nav-icons">
            <img
              src="/images/sooyeonJang/home.png"
              alt="home"
              className="icon"
            />
            <img
              src="/images/sooyeonJang/send.png"
              alt="send"
              className="icon"
            />
            <img
              src="/images/sooyeonJang/plus.png"
              alt="plus"
              className="icon"
            />
            <img
              src="/images/sooyeonJang/compass.png"
              alt="compass"
              className="icon"
            />
            <img
              src="/images/sooyeonJang/heart.png"
              alt="likes"
              className="icon"
            />
            <img
              src="/images/sooyeonJang/user.png"
              alt="user"
              className="icon user-profile"
            />
          </div>
        </div>
      </nav>
      <section className="main">
        <div className="wrapper">
          <div className="left-col">
            <div className="status-wrapper">
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1574517858464-7bfc583d16e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
                  />
                  <p className="status-name">rhcp</p>
                </div>
              </div>
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1604514288114-3851479df2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  />
                  <p className="status-name">tim tomey</p>
                </div>
              </div>
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9jayUyMGJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  />
                  <p className="status-name">sam mog...</p>
                </div>
              </div>
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvY2slMjBiYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <p className="status-name">austin wade</p>
                </div>
              </div>
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1596827391559-de49a8f619e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHJvY2slMjBiYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <p className="status-name">quinton co...</p>
                </div>
              </div>
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1619961601586-0bd6b291164a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHJvY2slMjBiYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                  <p className="status-name">ben collins</p>
                </div>
              </div>
              <div className="status-card">
                <div className="status-pic">
                  <img
                    alt="profile-pic"
                    src="https://images.unsplash.com/photo-1604514288114-3851479df2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  />
                  <p className="status-name">tim tomey</p>
                </div>
              </div>
            </div>
            <article className="post">
              <div className="post-info">
                <div className="user">
                  <div className="profile-pic">
                    <img
                      alt="profile-pic"
                      src="https://images.unsplash.com/photo-1651416019837-a6b8e7ae5d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                    />
                  </div>
                  <p className="username">marcsm</p>
                </div>
                <img
                  className="options"
                  src="/images/sooyeonJang/dots.png"
                  alt="ellipsis"
                />
              </div>
              <img
                className="post-image"
                alt="feed-pic"
                src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              />
              <div className="post-content">
                <div className="reaction-wrapper">
                  <img
                    alt="likes"
                    src="/images/sooyeonJang/heart.png"
                    className="r-icon"
                  />
                  <img
                    alt="comments"
                    src="/images/sooyeonJang/bubble.png"
                    className="r-icon"
                  />
                  <img
                    alt="send"
                    src="/images/sooyeonJang/send.png"
                    className="r-icon"
                  />
                </div>
                <p className="likes-count">381 likes</p>
                <p className="description">
                  <span>marcsm</span>
                  Capturing the shifting aurora in the shape of wings&#129498;
                </p>
                <p className="post-time">11 HOURS AGO</p>
                <div className="comment-place">
                  <ul className="comment-box">
                    {replies.map((comment, i) => {
                      return <Comment replies={replies[i]} i={i} />;
                    })}
                  </ul>
                </div>
              </div>
              <div className="comment-wrapper">
                <img
                  alt="smile"
                  src="/images/sooyeonJang/smile.png"
                  className="smile-icon"
                />
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment..."
                    onChange={textChange}
                    value={newReply}
                  />
                  <button className="comment-btn" type="submit">
                    Post
                  </button>
                </form>
              </div>
            </article>
            <article className="post">
              <div className="post-info">
                <div className="user">
                  <div className="profile-pic">
                    <img
                      alt="profile-pic"
                      src="https://images.unsplash.com/photo-1650896602771-2555bc1e1fb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    />
                  </div>
                  <p className="username">wild_animal</p>
                  <img
                    className="options"
                    src="/images/sooyeonJang/dots.png"
                    alt="ellipsis"
                  />
                </div>
              </div>
              <img
                className="post-image"
                alt="feed-pic"
                src="https://images.unsplash.com/photo-1532986701744-5cee048ef948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
              <div className="post-content">
                <div className="reaction-wrapper">
                  <img
                    alt="likes"
                    src="/images/sooyeonJang/heart.png"
                    className="r-icon"
                  />
                  <img
                    alt="comments"
                    src="/images/sooyeonJang/bubble.png"
                    className="r-icon"
                  />
                  <img
                    alt="send"
                    src="/images/sooyeonJang/send.png"
                    className="r-icon"
                  />
                </div>
                <p className="likes-count">1,022 likes</p>
                <p className="description">
                  <span>animal</span>
                  Lynx kitten at Skærup Zoo
                </p>
                <p className="post-time">16 HOURS AGO</p>
                <div className="comment-place" />
              </div>
              <div className="comment-wrapper">
                <img
                  alt="smile"
                  src="/images/sooyeonJang/smile.png"
                  className="smile-icon"
                />
                <form>
                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment..."
                  />
                  <button className="comment-btn">Post</button>
                </form>
              </div>
            </article>
            <article className="post">
              <div className="post-info">
                <div className="user">
                  <div className="profile-pic">
                    <img
                      alt="profile-pic"
                      src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    />
                  </div>
                  <p className="username">foooody</p>
                  <img
                    className="options"
                    src="/images/sooyeonJang/dots.png"
                    alt="ellipsis"
                  />
                </div>
              </div>
              <img
                className="post-image"
                alt="feed-pic"
                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
              <div className="post-content">
                <div className="reaction-wrapper">
                  <img
                    alt="likes"
                    src="/images/sooyeonJang/heart.png"
                    className="r-icon"
                  />
                  <img
                    alt="comments"
                    src="/images/sooyeonJang/bubble.png"
                    className="r-icon"
                  />
                  <img
                    alt="send"
                    src="/images/sooyeonJang/send.png"
                    className="r-icon"
                  />
                </div>
                <p className="likes-count">687 likes</p>
                <p className="description">
                  <span>foooody</span>
                  Cupcake time!
                </p>
                <p className="post-time">2 DAYS AGO</p>
                <div className="comment-place" />
              </div>
              <div className="comment-wrapper">
                <img
                  alt="smile"
                  src="/images/sooyeonJang/smile.png"
                  className="smile-icon"
                />
                <form>
                  <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment..."
                  />
                  <button className="comment-btn">Post</button>
                </form>
              </div>
            </article>
          </div>
          <div className="right-col">
            <div className="profile-card">
              <div className="card-pic">
                <img alt="profile-pic" src="/images/sooyeonJang/user.png" />
              </div>
              <div>
                <p className="username">sy_970616</p>
                <p className="sub-text">Sooyeon Jang</p>
              </div>
            </div>
            <p className="suggestion">Suggestions for you</p>
            <div className="suggestion-profile">
              <div className="suggestion-pic">
                <img
                  alt="profile-nike"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="suggestion-wrapper">
                <p className="suggestion-name">nike</p>
                <p className="suggestion-text">Popular</p>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="suggestion-profile">
              <div className="suggestion-pic">
                <img
                  alt="profile-natgio"
                  src="https://images.unsplash.com/photo-1586593112548-f455aa4c0118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="suggestion-wrapper">
                <p className="suggestion-name">natgeo</p>
                <p className="suggestion-text">Popular</p>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="suggestion-profile">
              <div className="suggestion-pic">
                <img
                  alt="profile-discovery"
                  src="https://images.unsplash.com/photo-1501707305551-9b2adda5e527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
                />
              </div>
              <div className="suggestion-wrapper">
                <p className="suggestion-name">discovery</p>
                <p className="suggestion-text">Popular</p>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="suggestion-profile">
              <div className="suggestion-pic">
                <img
                  alt="profile-instagram"
                  src="https://images.unsplash.com/photo-1611162618758-2a29a995354b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                />
              </div>
              <div className="suggestion-wrapper">
                <p className="suggestion-name">instagram</p>
                <p className="suggestion-text">Popular</p>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
            <div className="suggestion-profile">
              <div className="suggestion-pic">
                <img
                  alt="profile-nasa"
                  src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80"
                />
              </div>
              <div className="suggestion-wrapper">
                <p className="suggestion-name">nasa</p>
                <p className="suggestion-text">Popular</p>
              </div>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
