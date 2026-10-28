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
import sales from "../../Assets/Projects/pbgsales.png";
import psa from "../../Assets/Projects/psa.png";

const projects = [
  {
    imgPath: qartt,
    company: "Anora.Dev · Google Play & App Store",
    title: "Qartt (Buyer)",
    description:
      "Cross-border marketplace for US shoppers to buy authentic African products without the high international fees. I built the shopping and ordering flows, authentication and navigation, and ran App Store releases end to end.",
    tags: ["React Native", "TypeScript", "Expo Router", "REST APIs"],
    demoLink: "https://play.google.com/store/apps/details?id=me.qartt.buyer&hl=en",
    demoLabel: "Google Play",
  },
  {
    imgPath: qarttbusiness,
    company: "Anora.Dev · Google Play & App Store",
    title: "Qartt Business (Vendor)",
    description:
      "Vendor app for merchants in Nigeria to upload products, manage inventory and pricing, process orders and track store activity. I built the vendor workflows and order-management features.",
    tags: ["React Native", "TypeScript", "Expo", "REST APIs"],
    demoLink: "https://apps.apple.com/ng/app/qartt-business/id6759817660",
    demoLabel: "App Store",
  },
  {
    imgPath: psa,
    company: "Abia State Government · Google Play",
    title: "PS Attendance",
    description:
      "Attendance management for public service employees in Abia State: morning check-in, evening sign-out and daily records. Location verification means attendance can only be logged from an authorised workplace, and access is restricted to verified staff.",
    tags: ["React Native", "Expo", "Geolocation", "Role-based access"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.savic3916.Attendanceapp&hl=en",
    demoLabel: "Google Play",
  },
  {
    imgPath: customer,
    company: "Pineapp Solutions · grohh suite · Google Play",
    title: "grohh MyMarket (Customer)",
    description:
      "Customer app where shoppers browse products and services from businesses in the grohh ecosystem, place orders, request delivery, pay and get discounts, with live order tracking and push alerts.",
    tags: ["React Native", "Firebase", "FCM", "React Query"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.pinebusinessgrow.pgbcustomer&hl=en",
    demoLabel: "Google Play",
  },
  {
    imgPath: sales,
    company: "Pineapp Solutions · grohh suite · Google Play",
    title: "grohh Sales (POS)",
    description:
      "Point-of-sale app for in-store sales with Nomba POS terminal integration, streamlining payments and reducing manual processing errors. Orders and inventory sync in real time with the rest of the suite.",
    tags: ["React Native", "Nomba POS", "Firebase", "Redux Toolkit"],
    demoLink: "https://play.google.com/store/apps/details?id=com.pbg.sales",
    demoLabel: "Google Play",
  },
  {
    imgPath: kitchen,
    company: "Pineapp Solutions · grohh suite · Google Play",
    title: "grohh Storerunner (Kitchen)",
    description:
      "Real-time kitchen app: staff see incoming orders, approve them, mark them Ready and finally Completed on pickup. Built on Firebase sync to handle 200–800+ orders a day.",
    tags: ["React Native", "Firebase", "Real-time sync"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.pinebusinessgrow.kitchen&hl=en",
    demoLabel: "Google Play",
  },
  {
    imgPath: driver,
    company: "Pineapp Solutions · grohh suite · Google Play",
    title: "grohh Driver",
    description:
      "Delivery app for drivers to receive requests, view routes and update delivery status in real time, connected to the Logistics app so businesses can track every delivery.",
    tags: ["React Native", "Firebase", "FCM"],
    demoLink:
      "https://play.google.com/store/apps/details?id=com.pinedriver.driver&hl=en",
    demoLabel: "Google Play",
  },
  {
    imgPath: logistics,
    company: "Pineapp Solutions · grohh suite · Google Play",
    title: "grohh Logistics",
    description:
      "Fleet management app for logistics business owners to manage drivers, vehicles, freight and deliveries in real time, working together with the Driver app.",
    tags: ["React Native", "Firebase", "Redux Toolkit"],
    demoLink: "https://play.google.com/store/apps/details?id=com.pbg.logistic&hl=en",
    demoLabel: "Google Play",
  },
  {
    company: "Open source",
    title: "Placewise",
    description:
      "React Native real-estate app for buying, selling and renting homes, with property browsing, quick listing creation and direct chat between buyers and sellers.",
    tags: ["React Native", "TypeScript"],
    ghLink: "https://github.com/Savic3916/PLACEWISE",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          10 apps live in the stores. Here's what I've shipped, and what I did
          on each.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard isBlog={false} {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
