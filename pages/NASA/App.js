
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Image } from '@chakra-ui/react'
import Head from "next/head";


const NASA_API =
  "https://api.nasa.gov/planetary/apod?api_key=HrgvaTyc5brnhHTM6peabL5SWx5JlB4x4g5M1ybR&count=1";



export default function App() {

  const [response, setResponse] = useState("");
  const [isTruncated, setIsTruncated] = useState(true);

  async function fetchNasa() {
    let response = await fetch(NASA_API);
    let data = await response.json();
    setResponse(data[0]);
    setIsTruncated(true);
  }

  useEffect(() => {
    fetchNasa();
  }, []);

  if (!response.url) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }

  return (
    <>
    <Navbar />
    <Head>
            <title>Fourth Page | NASA Astronomy Picture of the Day</title>
            <meta name="description" content="Fourth Page web app using React.js and the NASA.gov APOD API to generate an image and provide accompanying details." />
            <link rel="icon" href="images/favicon.ico" />
        </Head>
    <div className="App">
        <main className="content">
        <h1 className="">Astronomy Picture of the Day</h1>
        
          <h3>{response.title}</h3>
          <Image id="image" alt="space-pic" src={response.url} />
          <h6>{response.date}</h6>

          
            <p className={isTruncated ? "description" : "description2"}>{response.explanation}</p>
          <div className="buttons">
          <button 
            className="btn"
            onClick={() => {
              fetchNasa();
              }}
            >
            New Image
            </button>
            <button id="btn" className={isTruncated ? "btn" : "btn2"} onClick={()=> setIsTruncated(false)} >Learn More</button>
          </div> 

       
        </main>
            
    </div>
    <Footer />
    </>
  );
}
