const data = [
  {
    name:"Stuttgart Gophers",
    description:"This website is the official hub for the Stuttgart Gophers meetup, offering detailed information about the group's mission, events, and ways to participate. It keeps the community informed about upcoming meetups, networking opportunities, and Go programming-related activities, helping members stay engaged and connected.",
    tool:[
      "HTML",
      "Tailwind",
      "JavaScript",
      "Go"
    ],
    image:"stuttgart-gophers.png",
    site:"https://stuttgart-gophers.de/",
    git:"https://github.com/Stuttgart-Gophers",
    id: 0
  },{
    name:"Swift Play",
    description:"This Swift Play game is built with React functional components using hooks like useState and useEffect for efficient state management. The goal is to roll the dice until all show the same value. Optimized re-rendering ensures smooth performance, providing an interactive and responsive gameplay experience.",
    tool:[
      "HTML",
      "CSS",
      "React"
    ],
    image:"swift-play.png",
    site:"https://tenzies23.netlify.app",
    git:"https://github.com/adidumitrascu/tenzies",
    id: 1
  },{
    name:"Cinema Picks",
    description:"An intuitive movie discovery platform that allows users to curate a personalized watchlist by adding films of interest. The app integrates with external data sources, fetching comprehensive movie details in real-time via RESTful APIs to enhance the user experience.",
    tool:[
      "HTML",
      "CSS",
      "JavaScript", 
      "REST APIs"
    ],
    image:"cinema-picks.png",
    site:"https://movie-watchlist12.netlify.app",
    git: "https://github.com/adidumitrascu/movie-watchlist",
    id: 2
  },{
    name:"Shopping List Manager",
    description:"Developed a dynamic mobile shopping list application using HTML, CSS, and JavaScript, with real-time data synchronization powered by Firebase. Firebase, a cloud-based NoSQL database service,  ensuring that users' shopping lists were consistently in sync across devices.",
    tool:[
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Firebase" 
    ],
    image:"shopping-list.png",
    site:"https://shopping-cart-b854d4.netlify.app/",
    git: "https://github.com/adidumitrascu/shopping-cart-app",
    id: 4
  }]


const icons = [
  {
    name: "JavaScript",
    id: 0,
    color: "#EFD81D"
  },{
    name: "React",
    id: 1,
    color: "#61DBFB"
  },{
    name: "HTML",
    id: 2,
    color: "#F75421"
  },{
    name: "CSS",
    id: 3,
    color: "#2992C9"
  },{
    name: "NextJS",
    id: 4,
    color: "#F1F1F1"
  },{
    name: "TypeScript",
    id: 5,
    color: "#9BB8DC"
  },{
    name: "Tailwind",
    id: 6,
    color: "#34B7F0"
}]
    
  export { data, icons }