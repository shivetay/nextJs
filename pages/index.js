import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY = [
  {
    id: Math.random(),
    title: "Gustaveshire",
    address: "Nader Brooks 0000 Leannon Estates",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
    description: "Iure ab reprehenderit nobis praesentium ut nesciunt est.",
  },
  {
    id: Math.random(),
    title: "Tulare",
    address: "Forest Cliff 99854 Stiedemann Pine",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Perspiciatis eos natus.",
  },
  {
    id: Math.random(),
    title: "Kertzmanntown",
    address: "Carlotta Mall 80546 Macejkovic Springs",
    image:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description: "Enim dolor iste rem dignissimos veritatis in.",
  },
  {
    id: Math.random(),
    title: "Estelberg",
    address: "Paucek Fork 38002 Hardy Burgs",
    image:
      "https://plus.unsplash.com/premium_photo-1673240845371-29f9c5e6fd71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:
      "Ut veritatis ipsum aut omnis similique consequuntur qui reprehenderit magnam.",
  },
];

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   const req = context.req; //get access to req
//   const res = context.res; //get access to res

//   return {
//     props: {
//       meetups: DUMMY,
//     },
//   };
// }

export default HomePage;
