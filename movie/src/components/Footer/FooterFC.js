import React, { useContext } from "react";
import { Container, Footer } from "react-materialize";
import { ThemeContext } from "../ThemeContext";
import "./Footer.css";
export default function FooterFC() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="footer"
      style={{
        backgroundColor: theme.backgroundColor,
        paddingTop: theme.paddingTop,
      }}
    >
      <div
        className="containers footer-container"

      >
        <div className="footer-item">
          <a href="#!" className="footer-logo"
            style={{
              color: theme.color,
            }}
          >
            <img src="assets/images/phephim-logo.png" />
          </a>
        </div>
        <div className="footer-item">
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >

            Sự kiện dành cho trẻ em
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >

            Sự kiện dành cho phụ huynh
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >

            Sự kiện dành cho khách
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Trò chơi & Quà tặng
          </a>
        </div>
        <div className="footer-item">
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >

            Sự kiện
          </a>
          <a href="/about" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Chúng tôi là
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Dịch vụ
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Khuyến mại
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Đánh giá
          </a>
        </div>
        <div className="footer-item">
          <a href="https://www.youtube.com/@PhePhim" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Youtube
          </a>
          <a href="https://www.facebook.com/phephim/?locale=vi_VN" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Facebook
          </a>
          <a href="#!" className="footer-link"
            style={{
              color: theme.color,
            }}
          >
            Help
          </a>
        </div>
      </div>
    </section>
  );
}
