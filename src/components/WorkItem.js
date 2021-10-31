import React from "react";
import { icons } from "./utils/icons";
import './WorkItem.css'

export function WorkItem(props){
    return(
        <div className={props.right?'work-item-right':'work-item-left'}>
            <div><img src={props.workItem.picture} alt='work example'></img></div>
            <div className={props.right?'content-div-right':'content-div-left'}>
                <div className={props.right?'header-div-right':'header-div-left'}>
                    <h4>{props.workItem.name}</h4>
                    <div className='header-stack-div'>
                        {props.workItem.stack.map(item => {
                        return icons[item+'Workstack']
                        })}
                    </div>
                    
                </div>
                <p>{props.workItem.description}</p>
            </div>
            
        </div>
    );
}