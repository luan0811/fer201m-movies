import React from 'react'
import { Container, Tab, Tabs } from 'react-materialize'
import "./News.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
import { Daily } from '../../shared/ListOfNew';
export default function NewsFC() {
     const { theme } = useContext(ThemeContext);
  return (
     <Container style={{padding: "100px 0", color: theme.color}}>
     <Tabs
     className="tab-demo z-depth-1"
     scope="tabs-22"
   >
     <Tab
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="DAILY NEWS"
     >
      <Container>
        {Daily.map((daily)=>(
      <div className='news-card'>
       <div className='news-card-container'>
          <div className='news-card-img'>
               <img src= {daily.img}></img>
          </div>
          <div className='news-card-content'>
               <h1 className='news-cart-title'>{daily.name}</h1>
               <p className='news-cart-release'>{daily.release}</p>
               <p className='news-cart-info'>{daily.info}</p>
          </div>
       </div>
      </div>
        ))}
      </Container>
     </Tab>
     <Tab
       active
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 2"
     >
       Test 2
     </Tab>
     <Tab
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 3"
     >
       Test 3
     </Tab>
     <Tab
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 4"
     >
       Test 4
     </Tab>
   </Tabs>
     </Container>
  )
}
