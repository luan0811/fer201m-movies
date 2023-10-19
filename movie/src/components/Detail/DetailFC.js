import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../shared/ListOfFilm";
import { ThemeContext } from "../ThemeContext";
import "./Detail.css";
export default function Detail() {
  const { theme } = useContext(ThemeContext);
  const userName = useParams();
  const film = data.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <section
      className="detail"
      style={{
        backgroundColor: theme.backgroundColor,
      }}
    >
      <div
        className="containers"
        style={{
          backgroundColor: theme.backgroundColor,
          borderBottom: theme.borderBottom,
        }}
      >
        <div className="intro">
          <div className="containers">
            <div className="intro-first">
              <div className="intro-overlay">
                <video
                  className="intro-video"
                  autoPlay
                  muted
                  src={`../${film.trailer}`}
                ></video>
              </div>
              <div className="intro-info">
                <h1>{film.name}</h1>
                <p>{film.info}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="detail-card"
          style={{
            color: theme.color,
          }}
        >
          {/* <div className="film-name">{film.name}</div> */}
          <div className="product-tumb">
            <img src={`../${film.img}`} alt="" />
          </div>
          <div className="detail-info">
            <div
              className="detail-director"
              style={{
                borderBottom: theme.borderSmallBottom,
              }}
            >
              <h1>Director:</h1>
              <p>{film.director}</p>
            </div>
            <div
              className="detail-writer"
              style={{
                borderBottom: theme.borderSmallBottom,
              }}
            >
              <h1>Writer:</h1>
              <p>{film.writer}</p>
            </div>
            <div
              className="detail-stars"
              style={{
                borderBottom: theme.borderSmallBottom,
              }}
            >
              <h1>Stars:</h1>
              <p>{film.stars}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
