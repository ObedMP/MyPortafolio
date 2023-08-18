//importar React
import React from "react";



const educationData = [
    {
      degree: "Ingeniería en Ciencias de la Computación",
      school: "Universidad Francisco Gavidia",
      year: "Egresado en 2022",
    }, 
];
const educationData2 = [
{
    degree: "Inteligencia de Negocios y Administracion de Bases de Datos",
    school: "Universidad Francisco Gavidia/Microsoft",
    year: "2023",
  },
];


  const Education = () => {
    return (
      <section className="padding" id="education">
        
        <div
          style={{
            backgroundColor: "white",
            width: "50%",
            padding: "4rem",
            margin: "3rem auto",
            textAlign: "center",
          }}
        >
          <h2>Universidad</h2>
          {educationData.map((education, index) => (
            <div key={index}>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <p>{education.year}</p>
            </div> ))}

            <h2>Especializacion</h2>
          {educationData2.map((education, index) => (
            <div key={index}>
              <h3>{education.degree}</h3>
              <p>{education.school}</p>
              <p>{education.year}</p>
            </div> ))} 

        </div>
      </section>
      
    );  
  };

export default Education;




