import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import login from "../../Assets/Projects/login.JPG";
import churn from "../../Assets/Projects/churn.jpg";
import booking from "../../Assets/Projects/booking.JPG";
import movie from "../../Assets/Projects/movie.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Easy Booking"
              description="Easy Booking is online booking platform that allows guests to make
              secure online reservations through hotel website and helps hotels to
              accept bookings. Designed the frontend application using React.js, Developed backend using Node.js, Express.js and implemented a database using MongoDB."
              ghLink="https://github.com/shanmai20/Easy_Booking-Hotel-booking-platform"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Entertainment"
              description="Movie Entertainment is an online database of information related to
              films, television series, and streaming content online – including cast,
              production crew and personal biographies, plot summaries, trivia,
              ratings, and fan and critical reviews.  Used Movie DB API which provides data for various movie and
              TV series. Built interface of the project using React.js"
              ghLink="https://github.com/shanmai20/Movie_Entertainment"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Customer Churn Prediction"
              description="This project is an implementation of various machine learning tools and
              techniques to predict customer churn across various industries. The main motivation of this project is to train a machine learning model on the available data that will predict with a high accuracy which customers are about to churn, which in turn will help the business owner
              in making useful marketing decisions"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Serverless OTP System"
              description="More than 30,000 OTP queries can be completed in a second using the OTP as a service web application that we created. The backend architecture was built using Amazon Web Services, and we used sendgrid to send emails."
              ghLink="https://github.com/shanmai20/serverless-otpstystem"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
