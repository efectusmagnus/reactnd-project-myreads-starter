import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/owl-page-not-found';

const PageNotFound = () => (
  <div>
    <h1 className="not-found-title">
      The page you were looking for was moved or does not exist.
    </h1>
    <figure className="not-found-img">
      <img src={PageNotFound} alt="Page not found" />
      <figcaption>
        Illustration by July Habermann - Efectusmagnus
      </figcaption>
    </figure>
    <div className="home-link">
      <Link to="/">Return to the home page or try again later. </Link>
    </div>
  </div>
)
