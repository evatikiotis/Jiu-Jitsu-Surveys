import React from 'react';

export default function GlobalStyles() {
  return (
    <style jsx global>
      {`
          @media only screen and (max-width: 900px) {
            .display-none-small-screen {
              display: none;
            }
          }
          .blue-colorr {
            color: blue;
          }

          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
       }
        header {
            background-color: #333;
            color: #fff;
            padding: 1em 0;
            text-align: center;
       }
        .container {
            max-width: 800px;
            margin: 2em auto;
            padding: 2em;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       }
        h1 {
            color: #333;
       }
        p {
            line-height: 1.6;
       }
        pre {
            background-color: #282c34;
            color: #61dafb;
            padding: 1em;
            overflow-x: auto;
       }
        code {
            font-family: 'Courier New', Courier, monospace;
       }
        footer {
            text-align: center;
            padding: 1em 0;
            background-color: #333;
            color: #fff;
       }
        .cta-button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #61dafb;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
       }
        .cta-button:hover {
            background-color: #21a1f1;
       }
       
          
        
      `}
    </style>
  );
}
