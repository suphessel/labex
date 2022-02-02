import React from "react";

 const ErrorPage = () => {
  return (
    <div>
      <p>Error Page</p>
      <iframe
        src="https://giphy.com/embed/lqFHf5fYMSuKcSOJph"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        title="Gif de Erro"
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/quickpage-404-page-qewy-lqFHf5fYMSuKcSOJph">
          via GIPHY
        </a>
      </p>
    </div>
  );
};
export default ErrorPage;