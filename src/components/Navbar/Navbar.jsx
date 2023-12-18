import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const downloadPDF = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1ye18h6I5gIOY4hW4E4QxovyhaaxYsm5h/view?usp=sharing";

    // Create a hidden anchor element
    const anchor = document.createElement("a");

    // Fetch the PDF file as a Blob
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a data URL with the suggested filename
        const dataUrl = URL.createObjectURL(blob);
        anchor.href = dataUrl;
        anchor.download = "Ravitheja-Kopparapu-Resume.pdf";

        // Trigger a click on the anchor element
        document.body.appendChild(anchor);
        anchor.click();

        // Remove the anchor element and revoke the data URL
        document.body.removeChild(anchor);
        URL.revokeObjectURL(dataUrl);
      });
  };

  return (
    <div id="nav-menu">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.raviLogo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`} className={`nav-link ${item}`}>
                {item}
              </a>
            </li>
          ))}
          {/* <li className='app__flex p-text'> */}
          <div />
          <button
            id="resume-button-1"
            className="nav-link resume app__flex"
            onClick={downloadPDF}
          >
            <img src={images.downloadIcon} alt="downloadIcon" />
            <a
              id="resume-link-1"
              download="Ravitheja-Kopparapu-Resume.pdf"
              href="https://drive.google.com/file/d/1ye18h6I5gIOY4hW4E4QxovyhaaxYsm5h/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {"Resume"}
            </a>
          </button>
          {/* </li> */}
        </ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "projects", "skills", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className={`nav-link ${item}`}
                        onClick={() => setToggle(false)}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
                {/* <li className='app__flex p-text'> */}
                <button
                  id="resume-button-1"
                  className="nav-link resume app__flex"
                  onClick={() => {
                    setTimeout(() => {
                      window.open(`${images.resumePdf}`, "_blank");
                    }, 100);
                  }}
                >
                  <img src={images.downloadIcon} alt="downloadIcon" />
                  <a
                    id="resume-link-1"
                    download="Ravitheja-Kopparapu-Resume.pdf"
                    href="https://drive.google.com/file/d/1ye18h6I5gIOY4hW4E4QxovyhaaxYsm5h/view?usp=drive_link"
                    // href="https://1drv.ms/b/s!AhKK9bxRRzY_pzyaZ1aRdagWh87U?e=nICvJC"
                    // href={images.resumePdf}
                    // href="https://rb.gy/k7ekc0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Resume"}
                  </a>
                </button>
                {/* </li> */}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
