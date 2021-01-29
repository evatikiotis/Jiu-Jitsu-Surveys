export default function Page({ children }) {
  return (
    <main role="main">
      <div className="col-sm-12 page">
        <div className="container">{children}</div>
      </div>
      <style jsx>
        {`
          .page {
            max-height: 600px;
            overflow: scroll;
            margin-bottom: 70px;
            margin-top: 30px;
          }
        `}
      </style>
    </main>
  );
}
