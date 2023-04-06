import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Posts from "./Posts";
import db from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
import { doc, onSnapshot, query } from "firebase/firestore";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const col = collection(db, "Posts");
    const snap = onSnapshot(col, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      {/* {header} */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* {Posts} */}
      <FlipMove>
        {posts.map((post) => (
          <Posts
            key={post.text}
            displayName={post.displayName}
            username={post.usernames}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}
