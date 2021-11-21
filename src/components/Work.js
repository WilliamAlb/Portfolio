import React from "react";
import {WorkItem} from './WorkItem';
import { images } from "./utils/images";
import './Work.css'

const testitem=[
    {
        name:'Themer',
        description:"Made with React, Redux and Firebase's platform with authentication and Firestore as a database it is an educational web application made with an aim to offer a solid database of themes for users to access at their leisure, share themes and apply them to their own site to preview or keep on the site for personal preference, once a user is registered and logged in, they may submit a theme to be viewed by others.",
        stack:['react','redux','js','css','html'],
        picture:images.themerproject
    },
    {
        name:'Rythmic Gymnastics',
        description:"A website developed for my mother's rhythmic gymnastics business in Karmi'el, implementing a minimalistic style and a modern feeling all the while attempting to maintain the integrity and personality of both the business itself and the owner, the development process taught me to better implement flex and grid type layouts as well as solidify my knowledge in JavaScript and styling prowess with CSS, all the while utilizing Photoshop and Figma as aids in the construction process, due to this being my first project a substantial amount of independent problem solving was used alongside teaching myself how to design and build a project from the ground up.",
        stack:['css','html','js'],
        picture:images.rythmicproject
    },
    {
        name:'Find your hat',
        description:'A Javascript project assigned during my course, a small terminal game which involves a grid and a random number of "bombs" spread across it with a single win state objective, the player must navigate through using keyboard stroke inputs to achieve his goal, which is the "hat".',
        stack:['js'],
        picture:images.hatproject
    }
]
function Work(){
    return(
        <section className='page-work'>
            <h1 className='title'>My Work</h1>
            {
                testitem.map((item,index) =>{
                    return index%2!==0?<WorkItem right={false} workItem={item}/>:<WorkItem right={true} workItem={item}/>
                })

            }
        </section>
        

    );
}

export default Work;