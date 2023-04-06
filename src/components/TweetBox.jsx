import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./Firebase";
import { collection } from "firebase/firestore";
import { addDoc, doc, setDoc } from "firebase/firestore";

export default function TweetBox() {
  const [tweetMessage, setTweetMessage] = React.useState("");

  const sendTweet = (event) => {
    event.preventDefault();
    const postRef = collection(db, "Posts");
    try {
      addDoc(postRef, {
        displayName: "Elon Musk",
        usernames: "elonmusk",
        verified: true,
        text: tweetMessage,
        image: "",
        avatar:
          "https://www.businessinsider.in/photo/77782500/elon-musk-is-now-worth-100-billion-half-of-jeff-bezos.jpg?imgsize=241963",
      });
      setTweetMessage("");
      console.log("Post added!");
    } catch (err) {
      console.error("Error adding post: ", err);
    }
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar
            className="avatar"
            src="https://www.businessinsider.in/photo/77782500/elon-musk-is-now-worth-100-billion-half-of-jeff-bezos.jpg?imgsize=241963"
          />
          <input
            value={tweetMessage}
            onChange={(char) => setTweetMessage(char.target.value)}
            placeholder="What's Happening?"
            type="text"
          ></input>
        </div>
        {/* <input
          className="tweetbox_inputImage"
          type="text"
          placeholder="Enter image URL"
        ></input> */}
        <Button onClick={sendTweet} className="tweet_button">
          Tweet
        </Button>
      </form>
    </div>
  );
}
