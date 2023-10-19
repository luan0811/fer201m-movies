import React, { useState } from "react";

export default function useRandomTrailer() {
  const [trailers] = useState([
    {
      id: 1,
      name: "One Day",
      release: "2011",
      trailer: "assets/videos/International One Day.mp4",
      info: "After spending the night together on the night of their college graduation Dexter and Emma are shown each year on the same date to see where they are in their lives. They are sometimes together, sometimes not, on that day.",
    },
    {
      id: 2,
      name: "Normal People",
      release: "2020",
      trailer: "assets/videos/Normal People.mp4",
      info: "Follows Marianne and Connell, from different backgrounds but the same small town in Ireland, as they weave in and out of each other's romantic lives.",
    },
    {
      id: 3,
      name: "P.S.I Love You",
      release: "2007",
      trailer: "assets/videos/PS I LOVE YOU 2007.mp4",
      info: "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
    },
    {
      id: 4,
      name: "Peaky Blinders",
      release: "2013",
      trailer: "assets/videos/Peaky Blinders.mp4",
      info: "Small Heath, Birmingham, 1919. Thomas Shelby (Cillian Murphy, Inception) and his family run the most feared and powerful local gang, the Peaky Blinders. Named for their practice of sewing razor blades into the peaks of their caps, they make money from illegal betting, protection and the black market.",
    },
    {
      id: 5,
      name: "500 Days Of Summer",
      release: "2009",
      trailer: "assets/videos/500 DAYS OF SUMMER.mp4",
      info: "After being dumped by the girl he believes to be his soulmate, hopeless romantic Tom Hansen reflects on their relationship to try and figure out where things went wrong and how he can win her back.",
    },
    {
      id: 6,
      name: "The Notebook",
      release: "2004",
      trailer: "assets/videos/The Notebook 2004.mp4",
      info: "A poor yet passionate young man (Ryan Gosling) falls in love with a rich young woman (Rachel McAdams), giving her a sense of freedom, but they are soon separated because of their social differences.",
    },
    {
      id: 7,
      name: "Cyber Hell: Exposing an Internet Horror",
      release: "2022",
      trailer: "assets/videos/Cyber Hell Exposing an Internet Horror.mp4",
      info: "Anonymous and exploitative, a network of online chat rooms ran rampant with sex crimes. The hunt to take down its operators required guts and tenacity.",
    },
    {
      id: 8,
      name: "Tenet",
      release: "2020",
      trailer: "assets/videos/TENET.mp4",
      info: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    },
    {
      id: 9,
      name: "John Wick",
      release: "2014",
      trailer: "assets/videos/John Wick 2014.mp4",
      info: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
    },
    {
      id: 10,
      name: "The Batman",
      release: "2022",
      trailer: "assets/videos/THE BATMAN.mp4",
      info: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    },
  ]);

  var min = 1;
  var max = 10;

  var randomVideoId = Math.floor(min + Math.random() * (max - min));
  // var randomVideoId = trailers.id;

  // console.log(randomVideoId)

  const intros = trailers.filter((trailer) => trailer.id === randomVideoId);

  // console.log(trailerID)

  return intros;
}
