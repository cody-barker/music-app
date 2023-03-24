import React from 'react';
import './player.scss';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs'

function Player ({audioElem}) {

    function playPause() {
        audioElem.current.play();
    }

    return(
        <div className="player_container">
            <div className="title">
                <p>First Song</p>
            </div>
            <div className="navigation">
                <div className ="navigation_wrapper">
                    <div className="seek_bar" style={{width:'50%'}}></div>
                </div>
            </div>
            <div className="controls">
                <BsFillSkipStartCircleFill className="btn_action"/>
                <BsFillPlayCircleFill className='btn_action pp' onClick={playPause}/>
                <BsFillSkipEndCircleFill className='btn_action'/>
            </div>
        </div>
    )
}

export default Player