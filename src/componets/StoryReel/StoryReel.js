import React, {useContext} from 'react';
import {StoriesContext} from "../../context";
import Story from "../Story/Story";
import "./StoryReel.css"

const StoryReel = () => {
    const context = useContext(StoriesContext)
    return (
        <div className='storyReel'>
            {
                !!context.length && context.map( ({ id, image, profileSrc, title }) => (
                    <Story className='storyReel__story' image={image} title={title} profileSrc={profileSrc} key={id} />
                ) )
            }
        </div>
    );
};

export default StoryReel;
