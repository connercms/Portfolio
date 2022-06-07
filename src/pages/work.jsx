import { faFilePdf, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const resume = require("../assets/files/Resume.pdf");

function Section(props) {
  return (
    <>
      <span>
        <h6 className="d-inline-block">{props.company}</h6> / {props.position}
      </span>
      <span className="d-block small">
        {props.duration}, {props.location}
      </span>
      <p>{props.description}</p>
    </>
  );
}

function Work() {
  return (
    <>
      {/* <div className="d-flex justify-content-end align-items-center">
        <a href={resume} target="_">
          <FontAwesomeIcon icon={faFilePdf} size="lg" color="white" />
        </a>
      </div> */}
      <Section
        company="Polk County Goverment"
        position="Full Stack Software Developer"
        duration="AUGUST 2021 - PRESENT"
        location="DES MOINES, IA"
        description="Service various offices of county government by
        identifying user requirements and objectives in order to define problems
        and develop solutions. Plan and develop applications and related
        documentation in an Agile project management environment. Manage
        applications and application resources using Azure cloud management
        tools."
      />

      <Section
        company="We Write Code"
        position="Full Stack Software Developer"
        duration="DECEMBER 2019 - AUGUST 2021"
        location="DES MOINES, IA"
        description="Design and develop full stack web
        applications on AWS for a variety of clients representing multiple
        industries. Integrate core AWS services for storage, automated build and
        deployments, database management, container hosting and more."
      />

      <Section
        company="National Carwash Solutions"
        position="Mobile Software Developer"
        duration="DECEMBER 2016 - DECEMBER 2019"
        location="GRIMES, IA"
        description="Develop a cross platform mobile application with a single
        code-base using React Native. Deliver frequently changing feature
        requests such as billing generation, inventory management and ordering,
        network resiliency, etc., in a timely fashion. Use device management
        software to deliver software and application updates to organization
        devices, set up new devices, troubleshoot devices, etc."
      />

      <Section
        company="Wells Fargo"
        position="Software Developer"
        duration="2015 - 2016"
        location="DES MOINES, IA"
        description="Create new
        solutions and maintain existing applications and websites. Collaborate
        with project owners to develop requirements and formulate solutions to
        support internal clients and teams."
      />
    </>
  );
}

export default Work;
