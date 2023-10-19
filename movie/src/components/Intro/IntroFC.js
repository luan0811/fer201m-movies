import React from "react";
import useRandomTrailer from "../Hooks/useRandomTrailer";
import "./Intro.css";
export default function IntroFC() {
  const intros = useRandomTrailer();
  console.log(intros);
  return (
    <div className="intro">
      <div className="containers">
        {intros.map((intro) => (
          <div className="intro-first" key={intro.id}>
            {/* tai sao khi comment dong video thi may thong tin kia ko hien boi vi la thang map bat buoc phai
                        render ra het cac properties ma thang intros co neu thieu 1 cai thi no ko hoat dong */}
            {/* <iframe width="560" height="315"
                            src={intro.trailer}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe> */}
            <div className="intro-overlay">
              <video
                className="intro-video"
                autoPlay
                muted
                src={intro.trailer}
              ></video>
            </div>
            <div className="intro-info">
              <h1>{intro.name}</h1>
              <p>{intro.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
