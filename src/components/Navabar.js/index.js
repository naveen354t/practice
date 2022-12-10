import React from "react";
import { useState } from "react";
import "./navbar.css";
import "./animations.css";
const Navbar = () => {
  const { mobile, setMobile } = useState(false);

  const handleClick = () => {
    setMobile((prevSt) => ({ mobile: !prevSt.mobile }));
  };

  if (mobile) {
    <div className="mobile-view">
      <ul>
        <li>
          <a href="#Home" target="_self">
            Home
          </a>
          <a href="#About" target="_self">
            About
          </a>
          <a href="#Team" target="_self">
            Team
          </a>
          <a href="#contact" target="_self">
            Contact us
          </a>
        </li>
      </ul>
    </div>;
  }

  return (
    <main>
      <nav>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAh1BMVEX///8AAAAAAAsAAA4AABX6+vqCgoKQkJOlpqguMDkAABGIiIoJDh5AQELb29zV1dbFxcVDREjz9PR2d3lOUFYXGiYTFiMAAAXq6uvLy8yWlpkACBpLTFBaW19WV11vcHK7u7wiIyopKiw/QEgzMzdkZWkaHCMLDho6Oj+vr7AUFh6dnqA2N0CHJz9iAAAD70lEQVRoge2Za3OrKhRA3YCPIDVRg4+gUc9pmqT2//++C6IdO03mZO5Fc26H9UnUuIx7swF1HIvFYrFYLBaLxfJ/YwfoQXJUGHZ7hFP8CJRDYNotOv8xCDLuJpsHz4Tnud2f607S8CZeuby7AHyrc1FMVnD/ernFhuPl3Y57C8endAX3bX6yu9jeIFrFnVDBvkGOq7gj4Bi+Ua3kRsHuG+VKbtjePWV5d3nfDfA0d1BVT3Or2vYs93gHP9gd4+Zp7t80fZ6b/G3uoIqf5j6sUlvuuHH+090sng8pu9diPfcJGE2n1eb2iPJmHbf6w26YEfp2SORmkVKBfvXrueVGgwVc2qR/p+Qc6kdwoAu72XGcGZYxMDgjBqdxR3vJwF3Q7SLMoBkj3Z5zBpft7FbUpHHB+bmfEwFhonf2das3olqaN1dnKXfnDhtFmgv8FrizY0VIBe56fUPJAm7KqnHojk45y+N2OpL0HRLE04FwVdRNu7fdLK12r7JR60Z7AYbrKQH3wNCL6fdMjtuDjHQ6Rjo4UwayvGyPMtCXnd5ZyKjj89W0WZGEIAQcdKTdg2qov/k+yopUVjvolzAPl2/k5d/HcCbSxQjtpxtTHcB37//4PxPJZ4w+2rFx4lOKBR0Vnx1/MdpY5dlYUabk/i3vqL6/WjKGe+1mxU1S1iq5d8ubFcmQZ95Ya+SAimGR5L5jT0EQldOFp5L7sJ5ZEcmUx68eJSKfqvuKqBpGVkju27QXvP/T8mwxkhW6lcVisSxCUvZhX+oxw+1D3/dlUx+6hvpzYKiG0emQwdFFzoNzmsu133Afl5xKENTDAN4AHQC1Do6HRg6xsZlECBkXlPAMfOWOVYsyjmt1MBWc4cm9Z5xRKrix9UELnJAwCJFgauUv3cQLggY47AY3q6+BpFXuMzsFQYgZh8iE2j1zql8j1rUaq6V7kJ6YSAc3CT/P3bNhMebuWbY34d4B38xzZ3L7hDXanSaFZOZ2CsrBxJzCp8Kbt0d3EWfYH9y8e91sujqZueVDgdaA2xP0y1xQurPqdLqcdUylm2dZxuIvbo/lJrItJLOAajfPGMu4nhhLd4YQgpcv7oYZmTZfIYvnyyzlBmCc6j4s4+25icSZuRNDiZ7IzqQfuhe6zhTvSmf57Tx3GpJdDKjVO1pO67bc1ZS+R5O7hPGfpUI021KiWvszDcuyrQiH1ojb2SPOQD3mXJXRMc8bwj7r2vB1cKxrYjgTvD9c81FcjyKWMUSHJVjywoY+lmfQKjfWX0WRCkFF1aZAbwZXSVFffxx7nT1J/dGpMazffKg+7Vf7gWro7EdFEzxnrWKxWCwWi8VisVj+Pf8Aoa1STW3zBOQAAAAASUVORK5CYII="
          alt="logo"
          className="logo-image"
        />
        <h2>CROSS HURDLE</h2>
        <ul className="desktop-view">
          <li>
            <a href="#Home" target="_self">
              Home
            </a>
            <a href="#About" target="_self">
              About
            </a>
            <a href="#Team" target="_self">
              Team
            </a>
            <a href="#Contact" target="_self">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
      <button type="button" className="mobile-button" onClick={handleClick}>
        Mobile View
      </button>
      <section>
        <Home />
        <About />
        <Team />
        <Contact />
      </section>
    </main>
  );
};

const Home = () => {
  return (
    <div id="Home" className="scale-in-ver-top">
      <div className="home">
        <div className="home-desc">
          <span>Fresh Starts</span>
          <h1>
            Life can only be understood backwards but it must be lived forwards
          </h1>
          <p className="desc-home">
            This is exactly what we at CrossHurdleSystems believe and strive to
            achieve. We are a one-stop destination for all your software
            requirements. We specialize in Web Development, Mobile App
            Development, Product Development and Web Services.
          </p>
        </div>
        <img
          src="https://crosshurdlesystems.netlify.app/assets/img/home.svg"
          className="logo"
          alt="home-logo"
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="About" className="scale-in-ver-top">
      <div className="about">
        <div className="about-desc">
          <h1>About Us</h1>
          <p>
            CrossHurdleSystems web services deftly handle Online Payment Gateway
            configurations (Paypal, Atom, AWS Configuration, Firebase, other VPS
            Servers and so on). Sitemap development, Google SEO, AdSense, Google
            Ad Extension are the value adds that we provide to our clients. Our
            concern for our clients transcends to providing undaunted support
            and maintenance even after development.
          </p>
          <p>
            Also, we will do the online payment gateway like Paypal, Atom Etc
            and AWS configuration, Firebase etc other VPS server also. We will
            do Sitemap, Google SEO, Adsense and Google Ad Extension to improve
            your site views.We provide best support and maintenance after
            development.
          </p>
          <p>
            OnAndGoalso specializes in providing Contract Staffing. Our
            meticulous screening process turns out dedicated and sincere
            resources. Government of Tamilnadu, popular Software Companies and
            product companies are in our esteemed clients list.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dnwkhgrm8/image/upload/v1670658639/undraw_Winter_skating_re_67b3_jo51kb.png"
          alt="about-logo"
          className="logo"
        />
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div id="Team" className="scale-in-ver-top">
      <div className="team">
        <div className="team-desc">
          <h4>Team</h4>
          <h1>Alone we can do so little together we can do so much.</h1>
          <p>
            CrossHurdleSystems prides itself with a team of professionals with
            expertise and experience across diversified technologies and
            multiple business verticals.
          </p>
          <p>
            The strong team comprises of Full Stack Developers and experts in
            Angular, Node, React, React Native, PHP, Laravel, Flutter, MongoDB
            and My SQL technologies.
          </p>
          <p>
            OnAndGo has an updated technologies Technical team, which
            continuously works on updating their skills with emerging
            technologies. The dedicated team works earnestly in honoring its
            time bound and quality deliverables.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dnwkhgrm8/image/upload/v1670658957/undraw_Engineering_team_a7n2_hxc6mg.png"
          alt="team-logo"
          className="logo"
        />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="Contact" className="scale-in-ver-top">
      <div className="contact">
        <div className="contact-desc">
          <h4>Let's talk</h4>
          <h1>Contact us</h1>
          <p>
            All questions & feedback are most welcome. Please drop a note & we
            will attend you quickly, with our 24/7 chat service.
          </p>
        </div>
        <button type="button">Contact us now</button>
      </div>
    </div>
  );
};

export default Navbar;
