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
        
      `}
    </style>
  );
}
