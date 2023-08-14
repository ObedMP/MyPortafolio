/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Soy Estudiante Egresado de la carrera de ingenieria en sistemas computacionales, con experiencia academica en el Desarrollo en Lenguaje Java Backend y Frontend, ademas con conocimientos en Python,c# y php, tambien en el uso de Frameworks como Angular, Boostrap, entre otros. Añadiendo tengo conimientos en Servicios Oracle BD, Oracle Apex y OCI ";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Diseño web",
  "Base de Datos",
  "Consultor Oracle",
  "Testing",
  "Analisis de requerimientos",
  "Desarrollo de Software",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Me apasiona resolver problemas de nuevas formas creativas para impulsar la innovación. Al aprovechar mi experiencia en el desarrollo de aplicaciones, busco continuamente nuevas y mejores formas de hacer que la tecnología sea accesible para todos.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Acerca de Mí</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
