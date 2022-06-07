import { Image } from "react-bootstrap";
import portrait from "../assets/images/me.JPG";

function About() {
  return (
    <>
      <div className="d-flex align-items-center">
        {/* <Image
          src={portrait}
          className="my-2"
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            filter: "grayscale(100%)",
          }}
        /> */}
        <div className="d-flex flex-column p-2">
          <h2>Conner Shannon</h2>
          <h3>Full Stack Software Developer</h3>
          <hr />
        </div>
        <hr />
      </div>

      <div>
        <p>
          Hi. My name is Conner Shannon. I am a full stack software developer
          living in the Des Moines, IA area.
        </p>
        <p>
          I have 7 years professional experience using numerous languages and
          frameworks, from native mobile development, to front-end experiences
          using the latest popular frameworks such as React or Angular, to
          back-end architecture including REST APIs, database creation and
          management, and more.
        </p>
        <p>
          I have broad experience with both AWS and Azure cloud platforms, have
          created numerous CI/CD workflows for projects using GitHub Actions,
          AWS CodePipeline/CodeDeploy, and (to a lesser extent) Jenkins, and am
          well versed in using multiple source control platforms and performing
          technical code reviews
        </p>
      </div>
      <p className="text-white" style={{ fontSize: 16 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Elementum facilisis
        leo vel fringilla est ullamcorper eget nulla facilisi. Magna etiam
        tempor orci eu lobortis elementum nibh tellus. Feugiat nibh sed pulvinar
        proin gravida hendrerit. Nisl rhoncus mattis rhoncus urna. Feugiat
        scelerisque varius morbi enim. At varius vel pharetra vel turpis. Ipsum
        consequat nisl vel pretium lectus quam id leo in. Elit ullamcorper
        dignissim cras tincidunt. Egestas egestas fringilla phasellus faucibus
        scelerisque eleifend donec. Sed felis eget velit aliquet sagittis id
        consectetur purus ut. Nec dui nunc mattis enim ut tellus elementum
        sagittis vitae. Auctor neque vitae tempus quam pellentesque nec nam.
        Laoreet sit amet cursus sit amet dictum. Leo urna molestie at elementum
        eu facilisis sed odio morbi. A arcu cursus vitae congue mauris rhoncus
        aenean vel elit. Amet volutpat consequat mauris nunc congue. Diam
        maecenas sed enim ut sem viverra. Imperdiet massa tincidunt nunc
        pulvinar sapien et. Eget felis eget nunc lobortis mattis aliquam
        faucibus. Nunc non blandit massa enim nec dui nunc. A erat nam at
        lectus. Duis ut diam quam nulla. Purus faucibus ornare suspendisse sed
        nisi lacus. Suspendisse sed nisi lacus sed viverra tellus. Risus nullam
        eget felis eget nunc. Sit amet facilisis magna etiam tempor orci.
        Egestas diam in arcu cursus. Hendrerit dolor magna eget est. Sit amet
        commodo nulla facilisi. At tempor commodo ullamcorper a lacus vestibulum
        sed. In hendrerit gravida rutrum quisque non tellus orci. Mi in nulla
        posuere sollicitudin. Ante metus dictum at tempor commodo ullamcorper a
        lacus vestibulum. Ac ut consequat semper viverra. Feugiat nisl pretium
        fusce id velit ut. Nec feugiat nisl pretium fusce id velit. Quisque id
        diam vel quam. Nunc mattis enim ut tellus elementum sagittis vitae et.
        Non nisi est sit amet facilisis. Risus quis varius quam quisque id. Orci
        phasellus egestas tellus rutrum. Blandit cursus risus at ultrices mi. Ut
        sem nulla pharetra diam sit amet nisl. Id volutpat lacus laoreet non
        curabitur gravida arcu ac tortor. Metus dictum at tempor commodo
        ullamcorper a lacus vestibulum. Sed viverra ipsum nunc aliquet bibendum
        enim facilisis gravida neque. Habitant morbi tristique senectus et netus
        et malesuada fames ac. Convallis tellus id interdum velit laoreet id.
        Hac habitasse platea dictumst quisque. Ut tristique et egestas quis
        ipsum suspendisse ultrices. Morbi blandit cursus risus at ultrices mi
        tempus. Massa enim nec dui nunc mattis enim ut tellus elementum.
        Elementum curabitur vitae nunc sed velit dignissim sodales ut. Sagittis
        id consectetur purus ut faucibus pulvinar elementum. Aliquet nec
        ullamcorper sit amet. Pulvinar pellentesque habitant morbi tristique
        senectus. Pharetra pharetra massa massa ultricies mi quis. Facilisis
        gravida neque convallis a. Viverra tellus in hac habitasse platea
        dictumst vestibulum. Mauris sit amet massa vitae tortor condimentum
        lacinia. Quisque egestas diam in arcu cursus euismod. Ut lectus arcu
        bibendum at varius. Ipsum consequat nisl vel pretium. Massa sed
        elementum tempus egestas sed sed risus. Sed libero enim sed faucibus.
        Habitant morbi tristique senectus et netus et malesuada fames. Amet
        mattis vulputate enim nulla aliquet porttitor lacus luctus. Velit ut
        tortor pretium viverra.
      </p>
    </>
  );
}

export default About;
