import { useState } from "react";


export default function LikeButton(){

    let [isLiked, setIsLiked] = useState(false);

    let toggleLike = () =>{
        setIsLiked(!isLiked);
    }

    let likeStyle = {color:"red"};

    return(
        <div>
            <p onClick={toggleLike}>
                {isLiked ?<><i style={likeStyle} className="fa-solid fa-heart"></i><p>Unlike</p> </> : <><i className="fa-regular fa-heart"></i><p>Like</p></>}
            </p>
        </div>
    )
}