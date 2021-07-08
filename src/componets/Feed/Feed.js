import React, {useEffect, useState} from 'react';
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css"
import MessageSender from "../MessageSender/MessageSender";
import {db} from "../../firebase/firebase";
import {Post} from "../Post/Post";

export const Feed = (props) => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot => {
            setPosts(snapshot.docs.map( doc => ({ id: doc.id, data: doc.data() }) ))
        }))
    },[])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {
                !!posts?.length && posts?.map(({id, data: { profilePic, timestamp, username, message, image }}) => (
                    <Post
                        key={id}
                        profilePic={profilePic}
                        timestamp={timestamp}
                        username={username}
                        message={message}
                        image={image}
                    />
                ) )
            }
        </div>
    );
}

