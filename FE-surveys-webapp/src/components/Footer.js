import React from "react";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <div className="container">Place sticky footer content here.</div>
      <style jsx>
        {`
          .footer {
            background-color: purple;
            font-size: 20px;
            color: white;
            border-top: 1px solid #e7e7e7;
            text-align: center;
            padding: 20px;
            position: fixed;
            left: 0;
            bottom: 0;
            height: 60px;
            width: 100%;
          }
        `}
      </style>
    </footer>
  );
}
