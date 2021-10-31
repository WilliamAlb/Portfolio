import React from "react";
import {WorkItem} from './WorkItem';
import { images } from "./utils/images";

const testitem=[
    {
        name:'cool project',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec magna nisi. Phasellus blandit dui porttitor sollicitudin ultrices. Sed sagittis mauris metus, rutrum luctus nunc porta eleifend. Integer ut bibendum enim. Praesent ligula lectus, vehicula non lorem at, fermentum varius sem. Maecenas consequat elit vehicula dictum suscipit. Nullam tortor metus, accumsan eu euismod sit amet, blandit vel ante. Ut tristique justo sit amet metus mattis placerat. Donec blandit maximus leo ut vulputate. Etiam id nulla et quam tristique mollis. Nunc id arcu sem.',
        stack:['css','html','react'],
        picture:images.rythmicproject
    },
    {
        name:'cool project',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec magna nisi. Phasellus blandit dui porttitor sollicitudin ultrices. Sed sagittis mauris metus, rutrum luctus nunc porta eleifend. Integer ut bibendum enim. Praesent ligula lectus, vehicula non lorem at, fermentum varius sem. Maecenas consequat elit vehicula dictum suscipit. Nullam tortor metus, accumsan eu euismod sit amet, blandit vel ante. Ut tristique justo sit amet metus mattis placerat. Donec blandit maximus leo ut vulputate. Etiam id nulla et quam tristique mollis. Nunc id arcu sem.',
        stack:['css','html'],
        picture:images.rythmicproject
    },
    {
        name:'cool project',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec magna nisi. Phasellus blandit dui porttitor sollicitudin ultrices. Sed sagittis mauris metus, rutrum luctus nunc porta eleifend. Integer ut bibendum enim. Praesent ligula lectus, vehicula non lorem at, fermentum varius sem. Maecenas consequat elit vehicula dictum suscipit. Nullam tortor metus, accumsan eu euismod sit amet, blandit vel ante. Ut tristique justo sit amet metus mattis placerat. Donec blandit maximus leo ut vulputate. Etiam id nulla et quam tristique mollis. Nunc id arcu sem.',
        stack:['css','html','js'],
        picture:images.rythmicproject
    }
]
function Work(){
    return(
        <section className='page-work'>
            {
                testitem.map((item,index) =>{
                    return index%2!==0?<WorkItem right={false} workItem={item}/>:<WorkItem right={true} workItem={item}/>
                })

            }
        </section>
        

    );
}

export default Work;