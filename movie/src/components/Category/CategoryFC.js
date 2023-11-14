import React, { useContext } from "react";
import "./Category.css";
import { ThemeContext } from "../ThemeContext";
// import { Link } from "react-router-dom";
import { data } from "../../shared/ListOfFilm";
import { useParams } from "react-router-dom";
export default function CategoryFC() {
  const { theme } = useContext(ThemeContext);
  const userName = useParams();
  const film = data.find((obj) => {
    return obj.id === userName.id;
  });
  return (
    <div
      className="category"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    >
      <div className="containers">
        <section
          className="banner"
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
          }}
        >
          <h1 className="banner-heading" style={{ color: theme.color }}>
            CATEGORY
          </h1>
          <p className="banner-desc" style={{ color: theme.color }}>
            Choose the category that fit you the best
          </p>
        </section>
        <h1 className="banner-heading" style={{ color: theme.color }}>
          ACTION
        </h1>
        {/* ______________________________ACTION - MOVIE______________________________ */}
        <section className="film-action">
          <div className="containers">
               <div className="film-wrapper">
                    <div className="image">
                    {/* <img src={`../${film.img}`} alt="" /> */}

                    </div>

               </div>
          </div>
        </section>
        {/* <div
          className="container"
          style={{
            borderBottom: theme.borderBottom,
          }}
        >
          <div className="film-column" key={film.id}>
            <div className="film-card">
              <img src={film.img} alt="" className="film-image" />
              <h3 className="film-name">{film.name}</h3>
              <p className="film-release">{film.release}</p>
              <p className="film-detail">
                <Link to={`detail/${film.id}`}>
                  <button>
                    <a href="#popup1" id="openPopUp">
                      Detail <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div> */}
        {/* ________________________________________________________________________________ */}
        <h1 className="banner-heading" style={{ color: theme.color }}>
          ROMANTIC
        </h1>
        {/* ______________________________ROMANTIC - MOVIE______________________________ */}
       
        {/* <div
          className="container"
          style={{
            borderBottom: theme.borderBottom,
          }}
        >
          <div className="film-column" key={film.id}>
            <div className="film-card">
              <img src={film.img} alt="" className="film-image" />
              <h3 className="film-name">{film.name}</h3>
              <p className="film-release">{film.release}</p>
              <p className="film-detail">
                <Link to={`detail/${film.id}`}>
                  <button>
                    <a href="#popup1" id="openPopUp">
                      Detail <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div> */}
        {/* ________________________________________________________________________________ */}
        <h1 className="banner-heading" style={{ color: theme.color }}>
          DOCUMENTARY
        </h1>
        {/* ______________________________DOCUMENTARY - MOVIE______________________________ */}
        {/* <div
          className="container"
          style={{
            borderBottom: theme.borderBottom,
          }}
        >
          <div className="film-column" key={film.id}>
            <div className="film-card">
              <img src={film.img} alt="" className="film-image" />
              <h3 className="film-name">{film.name}</h3>
              <p className="film-release">{film.release}</p>
              <p className="film-detail">
                <Link to={`detail/${film.id}`}>
                  <button>
                    <a href="#popup1" id="openPopUp">
                      Detail <i className="fa-solid fa-angle-right"></i>
                    </a>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div> */}
        {/* ________________________________________________________________________________ */}
      </div>
    </div>
  );
}
