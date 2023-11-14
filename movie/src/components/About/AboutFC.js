import React from 'react'
import './About.css'
import { Collapsible, CollapsibleItem, Container, Icon } from 'react-materialize'
import { ThemeContext } from '../ThemeContext'
import { useContext } from 'react'
export default function AboutFC() {
     const { theme } = useContext(ThemeContext);
  return (
    <Container
    style={{borderBottom: theme.borderBottom, padding: "100px 0"}}
    >
         <Collapsible
                accordion
                popout
               //  style={{borderBottom: theme.borderBottom}}
            >
                <CollapsibleItem 
                    expanded={false}
                    header="Fun! Watch Movies & TV Shows Online for FREE on B (Bi's film)"
                    style={{ fontWeight: 'bold', color: "black"}}
                    icon={<Icon><i class="fa-solid fa-face-smile"></i></Icon>}
                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Do you love movies and tv series? Do you want to watch them for free online, but don't know how? Well, look no further. B is a website that allows users to watch tv series and movies for free on their computers, laptops, tablets or smartphones.

                        All the tv series and films are available in English which makes it easier for everyone around the world to enjoy. The best part about this site is that there's no sign up required! It doesn't matter if you're a kid or an adult – just go there, start watching tv shows and films without any form of payment whatsoever!
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="What is B?"
                    style={{ fontWeight: 'bold', color: "black"}}
                    icon={<Icon><i class="fa-regular fa-user"></i></Icon>}
                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                    The film you need, designed by cubi for casestudy of FER201m to be
            accessible for Everyone!
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="FREE to Use"
                    icon={<Icon><i class="fa-solid fa-heart"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black"}}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        B is a free movies and tv series streaming website. It doesn't matter if you're looking for comedies, dramas, or even animated films – B has it all! The site offers thousands of titles that are available to watch through your computer, laptop, tablet, or smartphone without having to pay any fee whatsoever.
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Best for Movies and TV Series Lovers"
                    icon={<Icon><i class="fa-solid fa-film"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black"}}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Do you enjoy watching movies and tv series online? If yes, then B is perfect for you! The site has a wide range of titles that are all free to watch. There's no need to sign up or pay money – just go there, pick what you want and start enjoying it as much as possible!
                    </p>
                </CollapsibleItem>
               
                <CollapsibleItem
                    expanded={false}
                    header="No Disturbing Ads"
                    icon={<Icon><i class="fa-solid fa-rectangle-ad"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black"}}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        You don't have to worry about disturbing ads while streaming on B. The site is free of any adverts that could interrupt your film or tv show experience!

                        B has all genres covered romantic comedies, dramas, animated films, horror movies and so much more are available there for you to enjoy as many times as you want! The site is constantly updated with new titles, so you'll never get bored. Thousands of movies and tv series for free? Yes please! Go to B now and start watching!
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Safe and Secure"
                    icon={<Icon><i class="fa-solid fa-regular fa-lock"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black"}}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Do you have any concerns about your privacy online? There's no need to worry when it comes to browsing on B. The site is 100% safe and secure! Everything that happens there couldn't be traced back to your name or email address – everything stays hidden for maximum protection provided by the website itself.
                    </p>
                </CollapsibleItem>

            </Collapsible>
    </Container>
  )
}
