
"use client";

import Image from "next/image";
import { relative } from "path";
import { Bevan } from 'next/font/google'

const bevan = Bevan({ weight: '400',subsets: ['latin'] })


export default function Home() {
  return (
      <div className="filmes">

      <h1>FILMES EM CARTAZ</h1>

      <div className="container">

        <div className = "image">
          <img
            src="/Filme1.png"        
            alt="Poster de Sexta-Feira 13"
          />
          </div>
        
        <div className = "image">
          <img
            src="/Filme3.png"        
            alt="Poster de Filme"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme4.png"        
            alt="Poster de Filme"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme5.png"        
            alt="Poster de Filme"
          />
          </div>

         <div className = "image">
          <img
            src="/Filme6.png"        
            alt="Poster de Filme"
          />
          </div>


        <div className = "image">
          <img
            src="/Filme7.png"        
            alt="Poster de Filme"
          />
          </div>


        <div className = "image">
          <img
            src="/Filme8.png"        
            alt="Poster de O Chamado"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme9.png"        
            alt="Poster de Hellraiser"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme10.png"        
            alt="Poster de Filme"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme11.png"        
            alt="Poster de Filme"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme12.png"        
            alt="Poster de Filme"
          />
          </div>

        <div className = "image">
          <img
            src="/Filme13.png"        
            alt="Poster de Filme"
          />
          </div>


        <div className = "image">
          <img
            src="/Filme14.png"        
            alt="Poster de Filme"
          />
          </div>


        <div className = "image">
          <img
            src="/Filme15.png"        
            alt="Poster de Filme"
          />
          </div>


        <div className = "image">
          <img
            src="/Filme16.png"        
            alt="Poster de Filme"
          />
          </div>



        </div>
      

      <style jsx>{`
       h1 {
        position: relative;
        font-family: bevan;
        font-size: 75px;
        font-weight: 400;
        line-height: 55.33px;
        text-align: left;
        width: auto;
        height: 55px;
        gap: 0px;
        left: 100px;
        top: 50px;
        color: white
       }


        h2 {

        font-family: bevan;
        font-size: 25px;
        font-weight: 400;
        line-height: 55.33px;
        text-align: left;
        width: auto;
        height: 55px;
        gap: 0px;
          text-align: center;
       }
      
       .container
          {
          position: relative;
          justify-content: center;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 100px;
          width: 90%;
          top: 150px;
          margin: 0 auto;
          }
        
        .image{
          width: 120%;
          height: auto;
          display: block;
          text-align: center;
        }
        
        .filmes {
          background-image: url("/background.png");
          background-attachment: scroll;
          background-repeat: repeat-y;
          }

        
          
        .image img:hover {
          transform: scale(1.2);
          transition:transform 0.3s ease-in-out;

      }

        

      `}
      
      </style>

        </div>





          );
    
}
