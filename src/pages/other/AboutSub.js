import React from "react";

function AboutSub() {
  const backgroundImagePathback = `${process.env.PUBLIC_URL}/assets/img/banner/aboutnew.jpg`;

  return (
    <section className="cey4-about-section py-5">
      <div
        className="container"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImagePathback})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
            zIndex: 1,
          }}
        ></div>


        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="cey4-welcome-text fw-bold mt-2">About us</h2>
            <p className="cey4-welcome-text">this is all we are cey4hub about section</p>
          </div>
        </div>

        <div className="position-relative mb-5 text-center">
          <div className="cey4-image-wrapper">
            {/* <img 
            src="assets/img/banner/aboutnew.jpg" 
            alt="Team of people in green shirts outdoors" 
            className="img-fluid rounded w-100"
          /> */}
          </div>
          {/* <img src="assets/img/banner/choose-1.png" alt="Sustainable Products" className="img-fluid" /> */}

          <div className="cey4-content-overlay p-4 p-md-5">
            <p className="cey4-welcome-text mb-4" style={{ position: "relative", zIndex: 2}}>
              welcome to cey4hub - your trusted destination for eco-friendly and
              sustainable products. we are driven by a passion to build a
              greener future by offering high-quality goods that not only cater
              to your needs but also contribute positively to the environment.
            </p>

            <h4 className="mt-5 mb-3 cey4-welcome-text" style={{ fontWeight: "bold"}}>
              Mission Statement
            </h4>
            <p className="cey4-welcome-text cey4-welcome-text-new">
              our mission is to empower consumers to make informed choices by
              providing an ethically sourced selection of eco-friendly products
              that prioritize sustainability, ethical sourcing, and minimal
              environmental impact. we are dedicated to fostering a conscious
              consumer culture that values the health of our planet and
              communities
            </p>

            <h4 className="mt-5 mb-3 fw-bold cey4-welcome-text">Vision Statement</h4>
            <p className="cey4-welcome-text cey4-welcome-text-new">
              we envision a future where sustainable consumerism is the
              standard, and every purchase contributes to a healthier planet.
              our retail arm cey4hub aims to be the go-to destination for
              individuals seeking high-quality, eco-friendly goods, fostering a
              community that celebrates responsible living and champions
              innovation in sustainable practices.
            </p>

            <div className="text-center mt-4 cey4-welcome-text">
              <button className=" px-4 py-2 btn btn-success">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSub;
