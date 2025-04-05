import React from 'react'

function Services() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 service-header">Why Choose Cey4Hub</h2>
      <div className="row">
        {/* Sustainable Products Section */}
        <div className="col-md-3 text-center">
          <div className="icon-container">
            <img src="assets/img/banner/choose-1.png" alt="Sustainable Products" className="img-fluid" />
          </div>
          <h5 className="services-header mt-2">Sustainable Products</h5>
          <p className="services">
            Explore our carefully curated selection of sustainable products,
            each designed to reduce your carbon footprint.
          </p>
        </div>

        {/* Eco-Friendly Choices Section */}
        <div className="col-md-3 text-center">
          <div className="icon-container">
          <img src="assets/img/banner/choose-2.png" alt="Eco-Friendly Choices" className="img-fluid" />
          </div>
          <h5 className="services-header mt-2">Eco-Friendly Choices</h5>
          <p className="services">
            Make conscious choices with our eco-friendly products, knowing that 
            your purchases promote ethical sourcing and responsible manufacturing practices.
          </p>
        </div>

        {/* High-Quality Selection Section */}
        <div className="col-md-3 text-center">
          <div className="icon-container">
          <img src="assets/img/banner/choose-3.png" alt="High-Quality Selection" className="img-fluid" />
          </div>
          <h5 className="services-header mt-2">High-Quality Selection</h5>
          <p className="services">
            Invest in long-lasting and reliable products that meet our stringent 
            quality standards, ensuring your satisfaction and the longevity of your purchases.
          </p>
        </div>

        {/* Sustainable Packaging Section */}
        <div className="col-md-3 text-center">
          <div className="icon-container">
          <img src="assets/img/banner/choose-4.png" alt="Sustainable Packaging" className="img-fluid" />
          </div>
          <h5 className="mt-2 services-header">Sustainable Packaging</h5>
          <p className="services">
            Our sustainable packaging ensures that your orders arrive safely 
            while minimizing their impact on the planet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services