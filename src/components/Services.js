import React, { Component } from "react";

import { FaFileMedical } from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {

  state = {

    services: [

      {

        icon: <FaFileMedical />,

        title: "Health Monitoring",

        info:

          "Health Tracker puts comprehensive health assessment and monitoring at your fingertips. Generate and maintain a personalized health and fitness profile using simple body measurements taken from home. Whether you’re managing chronic illness or just want to stay in peak condition, Health Tracker can help you monitor all your health goals."

      },

      {

        icon: <FaFileMedical />,

        title: "Fitness",

        info:

          "Fitness Tracker turns your smartphone into a personal fitness coach, guiding you through the process of crafting an exercise routine that meets your goals and fitness level. Whether its professional body building or just improving cardiovascular endurance, Fitness eTrainer uses scientifically determined formulas to assess your fitness and develop a personalized exercise program optimized for your height, weight, age, sex and activity level."

      },

      {

        icon: <FaFileMedical />,

        title: "Nutrition",

        info:

          "Nutrition Tracker turns your smartphone into a personal dietitian, selecting foods for you based on activity level, fitness, and weight modification goal. Whether it’s a heart healthy diet or losing a few extra pounds, Nutrition Tracker uses scientific methods to assess your nutrient needs and develop a diet that’s right for you."

      },
      {

        icon: <FaFileMedical />,

        title: "Illness Risk",

        info:

          "Get the jump on sickness before it strikes with the BioStatus Health proprietary risk prediction system, a feature that calculates your susceptibility to illnesses and health hazards such as heart disease, cancer, mental illness and alcoholism even before symptoms are present."
      },

      {

        icon: <FaFileMedical />,

        title: "Health Records",

        info:

          "BioStatus Health helps you organize your health information, managing all of your health records from one place that's available wherever you go. Enter it once, use it again and again never consigning your sensitive health data to websites or advertisement supported apps. With BioStatus Health, all your wellness information remains locally on your smartphone, traveling wherever you go."

      }

    ]

  };

  render() {

    return (

      <section className="services">

        <Title title="services" />

        <div className="services-center">

          {this.state.services.map(item => {

            return (

              <article key={`item-${item.title}`} className="service">

                <span>{item.icon}</span>

                <h6>{item.title}</h6>

                <p>{item.info}</p>

              </article>

            );

          })}

        </div>

      </section>

    );

  }

}