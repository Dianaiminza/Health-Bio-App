import React from "react";

import { Link } from "react-router-dom";

import Hero from "../Hero";
import Banner from "../Banner";
import Services from "../Services"

const home = () => {

  return (

    <>

      <Hero>

        <Banner

          title="Smart Health App For You"

          subtitle="
Discover the future of wellness with our mobile application technology"

        >

          <Link to="/details" className="btn-primary">

            Details

          </Link>

        </Banner>

      </Hero>

      <Services />

      

    </>

  );

};



export default home;


