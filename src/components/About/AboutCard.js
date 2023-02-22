import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shanmai Thota </span>
            from <span className="purple"> Telangana, India.</span>
            <br />I'm currently studying  <span className="purple">Computer Science and Engineering </span> at <span className="purple">Indian Institute of Information Technology, Gwalior.</span>  
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
            <span  style={{fontSize: "2.1em"}}>Experience: </span>
            <br />
            <span className="purple">Full Stack Developer Intern at Auric Touch LLP. </span>
            <br />
            
          <span className="purple">January 2023 – present </span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing secure APIs using Node.js for the Backend Application of
web sites
            </li>
            <li className="about-activity">
              <ImPointRight /> Helped through 2 other projects by solving bugs and finding sustainable
solutions.
            </li>
            <li className="about-activity">
              <ImPointRight /> created Many scalable projects and Backend Applications using NodeJs,
Database(MongoDB),API’S and gained lot of ideas from our Mentor.
            </li>
          </ul>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
