import React from "react";
import post from './Profile.module.css'

const Profile = () => {
    return <div className={post.content}>
        <div>
            <img src='https://funkylife.in/wp-content/uploads/2021/06/good-morning-images-funkylife.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div className={post.content}>
            My posts
            <div className={post.content}>
                New post
            </div>
            <div className={post.content}>
                Post 1
            </div>
            <div className={post.content}>
                Post 2
            </div>
        </div>

    </div>
}

export default Profile;