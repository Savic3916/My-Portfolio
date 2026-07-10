import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kitchen from "../../Assets/Projects/pbgkitchen.png";
import customer from "../../Assets/Projects/pbgcustomer.png";
import driver from "../../Assets/Projects/pbgdriver.png";
import logistics from "../../Assets/Projects/pbglogistics.png";
import qartt from "../../Assets/Projects/qartt.png";
import qarttbusiness from "../../Assets/Projects/qarttbusiness.png";

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
              imgPath={kitchen}
              isBlog={false}
              title="PBG Kitchen"
              description="Pine Business Grow – Kitchen App is a simple and efficient tool designed to help kitchen staff manage customer orders in real time. Whether you're part of a restaurant, café, or food business, this app makes it easy to track orders from start to finish.With a clean and fast interface, kitchen teams can view incoming orders, approve them, update the order status to “Ready”, and finally mark them as Completed when customers arrive to pick up their meals. No confusion, no delays — everything stays organized."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://play.google.com/store/apps/details?id=com.pinebusinessgrow.kitchen&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
              isBlog={false}
              title="PBG Customer"
              description="Pine Business Grow – Customer App is a mobile app that allows customers to see and buy products and services from businesses in the Pine Business Grow ecosystem. Businesses upload their products and services from their merchant dashboard, and customers can see them instantly in the app. With the app, customers can browse products, place orders, request delivery, make payments, and get discounts in real time. The app is designed to make shopping easy, fast, and convenient."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=com.pinebusinessgrow.pgbcustomer&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driver}
              isBlog={false}
              title="PBG Driver"
              description="PBG Driver (Pine Driver) is a mobile app that helps drivers manage and complete deliveries on the Pine Business Grow platform. Drivers can receive delivery requests, view routes, and update the delivery status in real time. The app also connects with the Pine Logistics system so businesses can track drivers and monitor deliveries easily. Pine Driver is designed to make deliveries simple, fast, and organized for drivers."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.pinedriver.driver&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logistics}
              isBlog={false}
              title="PBG Logistics"
              description="Pine Logistics is a mobile app built for logistics business owners on the Pine Business Grow platform. The app helps businesses manage fleets, drivers, freight, and deliveries in real time. It works together with the Pine Driver app, allowing businesses to track drivers, monitor vehicles, and manage deliveries more easily. Pine Logistics is designed to help logistics businesses run their operations smoothly and stay organized."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://play.google.com/store/apps/details?id=com.pbg.logistic&hl=en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qartt}
              isBlog={false}
              title="Qartt (iOS & Android)"
              description="Qartt is a cross-border marketplace that enables users to discover and purchase a wide range of authentic African products without the high international fees typically associated with cross-border shopping. The app provides a seamless shopping experience with secure authentication, product browsing, order management, and a modern, user-friendly interface." // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=me.qartt.buyer&hl=en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qarttbusiness}
              isBlog={false}
              title="Qartt Business (iOS & Android)"
              description="Qartt Business is a cross-platform mobile application that empowers merchants and small businesses to create, manage, and grow their online storefronts on the Qartt marketplace. Built with React Native for iOS and Android, the app enables sellers to upload products with multiple images and variants, manage pricing and inventory, receive and process customer orders, and monitor their store's activity in real time. With secure authentication, a modern and responsive user interface, and seamless product and order management, Qartt Business provides everything merchants need to efficiently run their businesses and sell authentic African products to customers around the world."
              demoLink="https://apps.apple.com/ng/app/qartt-business/id6759817660"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
