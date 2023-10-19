import React, { useContext, useState } from "react";
import "./Film.css";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import { data } from "../../shared/ListOfFilm";
import IntroFC from "../Intro/IntroFC";
export default function FilmFC() {
  const { theme } = useContext(ThemeContext);
  const [film, setFilm] = useState([]);
  return (
    <section
    className="film"
    style={{
      backgroundColor: theme.backgroundColor,
    }}
    >
      <IntroFC></IntroFC>
      <h3 className="film-heading" style={{ color: theme.color }}>
        Phim đang thịnh hành
      </h3>
      <div
        className="containers"
        style={{
          borderBottom: theme.borderBottom,
        }}
      >
        {data.map((film) => (
          <div className="film-column" key={film.id} style={{ color: theme.color }}>
            <div className="film-card">
              <img src={film.img} alt="" className="film-image" />
              <h3 className="film-name"  style={{ color: "black" }}>{film.name}</h3>
              <p className="film-release"  style={{ color: "black" }}>{film.release}</p>
              <p className="film-detail">
                <Link to={`detail/${film.id}`}>
                  <button>
                    <a href="#popup1" id="openPopUp">
                      Chi tiết <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </button>
                </Link>
              {/* <button
                  onClick={() => {
                    setFilm(film);
                  }}
                  >
                  <a href="#popup1" id="openPopUp">
                  Detail <i class="fa-solid fa-angle-right"></i>
                  </a>
                </button> */}
                </p>
            </div>
          </div>
        ))}
        {/* <div id="popup1" className="overlay">
          <div className="popup">
            <a className="popup-close" href="#!">
              &times;
            </a>
            <div className="popup-img">
            <video
                className="popup-video"
                autoPlay
                muted
                src={film.trailer}
              ></video>
            </div>
            <div className="pop-up detail">
              <h2 className="film-name">{film.name}</h2>
              <h3 className="film-release">{film.release}</h3>
              <div className="popup-content">{film.info}</div>
              <button className="popup-watch">Play</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
