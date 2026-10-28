import React from "react";

const experience = [
  {
    role: "Mobile Engineer (React Native)",
    company: "Abia State Government House",
    period: "04/2026 – Present",
    location: "Abia, Nigeria",
    summary:
      "Mobile apps for the state government's internal digital systems and public-sector operations.",
    points: [
      "Built and published PS Attendance on Google Play, letting authorised public service employees check in each morning and sign out each evening, with daily attendance records.",
      "Added location verification so attendance can only be logged from an authorised workplace, with access restricted to verified staff.",
      "Turn stakeholder requirements into shippable mobile features, working with technical teams to improve usability and system efficiency.",
    ],
  },
  {
    role: "React Native Developer (Contract)",
    company: "Anora.Dev",
    period: "09/2025 – 09/2026",
    location: "Remote",
    summary:
      "Qartt, a US marketplace for buying products from Africa: the buyer app for US shoppers and Qartt Business for vendors in Nigeria. Both live on Google Play and the App Store.",
    points: [
      "Built shopping and ordering flows, authentication and navigation for the buyer app, and vendor workflows and order management for Qartt Business.",
      "Integrated APIs and handled app state and authentication flows across both apps.",
      "Ran releases end to end: version updates, release notes and iOS App Store build submissions.",
    ],
    stack: ["React Native", "TypeScript", "Expo Router", "REST APIs", "App Store Connect"],
  },
  {
    role: "Mobile Engineer (React Native)",
    company: "Pineapp Solutions",
    period: "09/2024 – 04/2026",
    location: "Remote",
    summary:
      "Led mobile for the grohh business suite, a platform connecting MSMEs, logistics and customers: MyMarket, Sales (POS), Storerunner, Driver and Logistics.",
    points: [
      "Architected and delivered five interconnected Android and iOS apps, all live on Google Play.",
      "Built real-time order and inventory sync on Firebase, supporting 200–800+ orders per day.",
      "Rolled out Firebase Cloud Messaging for live order tracking, cutting missed-order incidents by ~25%.",
      "Integrated Nomba POS terminals into the Sales app, reducing manual processing errors.",
      "Set up CI/CD with GitHub Actions and Expo EAS, shipping OTA updates without waiting on store review.",
    ],
    stack: ["Redux Toolkit", "React Query", "Firebase", "FCM", "EAS", "GitHub Actions"],
  },
  {
    role: "Mobile Engineer (React Native)",
    company: "Techroom",
    period: "01/2023 – Present",
    location: "Uyo, Akwa Ibom",
    summary: "Real-estate app for searching, listing and managing properties.",
    points: [
      "Built the authentication and property-listing flows behind 1,000+ property searches a month.",
      "Built a Redux-powered filtering system that cut property search time by ~40%.",
      "Eliminated scroll jank on large listing feeds with list virtualization and memoization.",
    ],
    stack: ["Redux Toolkit", "React Query", "Firebase"],
  },
  {
    role: "Junior React Native Developer",
    company: "Roothub",
    period: "08/2020 – 12/2022",
    location: "Uyo, Akwa Ibom",
    points: [
      "Built core UI components and REST API integrations for Android and iOS apps serving hundreds of users.",
      "Cut screen load times by ~20% by batching API calls and removing unnecessary re-renders.",
    ],
  },
];

function Experience() {
  return (
    <div className="experience-timeline">
      {experience.map((job) => (
        <div className="experience-item" key={job.company + job.period}>
          <div className="experience-head">
            <h3 className="experience-role">
              {job.role} · <span className="purple">{job.company}</span>
            </h3>
            <span className="experience-period">
              {job.period} · {job.location}
            </span>
          </div>
          {job.summary && <p className="experience-summary">{job.summary}</p>}
          <ul>
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {job.stack && (
            <div className="experience-stack">
              {job.stack.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experience;
