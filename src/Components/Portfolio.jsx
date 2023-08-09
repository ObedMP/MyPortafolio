/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/porta1.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "API RESTful de Pedidos con Spring Boot",
    description: "Proyecto Colaboratico en el Desarrollo de una Api de Pedidos con Spring Boot y JWT como autenticacion a las peticiones de la Api,se utilizo Mysql como base de datos y se desplego en Apache XAMPP, testing con Mockito y Junit5",
    url: "https://github.com/ObedMP/ApiRestPedidos"
  },
  {
    "title": "Control de Clientes",
    "description": "Proyecto Desarrollado con Java Core usando Arquitectura MVC, se utilizo Mysql como base de datos, para la vista se uso Boostrap y JSP, se desplego en Apache XAMPP",
    "url": "https://github.com/ObedMP/ManageCustomer"
  },
  {
    "title": "Api de Logeo con Spring Boot",
    "description": "Api de Login usando la libreria Spring,se implemento patrones de diseño tradicional para el tipo de arquitectura de la APi.",
    "url": "https://github.com/ObedMP/ApiLogin"
  }, 
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
