import React, { Component } from "react";
import { Films } from "../shared/ListOfFilm";
import FilmFC from "./Film/FilmFC";

export default class Main extends Component {
     constructor(){
          super();
          this.state = {
               films: Films,
          }; 
     }
  render() {
    return <FilmFC films={this.state.films}/>; 
  }
}
