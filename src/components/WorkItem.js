import React, { useRef, useEffect } from "react";
import { icons } from "./utils/icons";

import WorkImage from './WorkImage'
export function WorkItem(props) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("on-screen");
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.7 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div
      className={props.right ? "work-item-right" : "work-item-left"}
      ref={ref}
    >
      <div className="work-img-div">
        <a href={props.workItem.link} target="_blank" rel="noreferrer">
          <WorkImage
            src={props.workItem.picture}
            alt="work example"
            >
            </WorkImage>
        </a>
      </div>
      <div className={props.right ? "content-div-right" : "content-div-left"}>
        <div className={props.right ? "header-div-right" : "header-div-left"}>
          <h4>{props.workItem.name}</h4>
          <div className="header-stack-div">
            {props.workItem.stack.map((item) => {
              return icons[item + "Workstack"];
            })}
          </div>
        </div>
        <p>{props.workItem.description}</p>
      </div>
    </div>
  );
}
