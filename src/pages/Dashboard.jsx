// src/pages/Dashboard.js
import React from "react";
import Slider from "react-slick";
import Card12 from "../components/Card12";
import Card34 from "../components/Card34";
import Card56 from "../components/Card56";
import PatientTable from "../components/PatientTable";
import PatientsIcon from "../assets/allPatientsIcon.svg";
import PatientsGraph from "../assets/allPatientsGraph.svg";
import ActivePatientsIcon from "../assets/activePatientsIcon.svg";
import ActivePatientsGraph from "../assets/activePatientsGraph.svg";
import NewRegIcon from "../assets/NewRegistrationsIcon.svg";
import NewRegGraph from "../assets/newRegGraph.svg";
import PrevAppIcon from "../assets/prevAppicon.svg";
import PrevAppGraph from "../assets/prevAppGraph.svg";
import AppTodayIcon from "../assets/appointmentTodayIcon.svg";
import UpcomingAppIcon from "../assets/upcomingAppointmentsIcon.svg";

const legendItems = [
  { color: "bg-[#5388D8]", label: "COPD", count: 100 },
  { color: "bg-[#F665A2]", label: "Asthma", count: 100 },
  { color: "bg-[#F4BE37]", label: "TB", count: 200 },
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Dashboard() {
  return (
    <div className="w-full h-screen p-6">
      <div className="p-3 flex flex-col">
        <h1 className="text-[20px] font-[500] text-[#051237]">Mike Jani</h1>
        <p className="text-[14px] font-[400] text-[#181818]">
          Hi Doctor, Take a look at your patients' activities
        </p>
      </div>
      <div className="mt-6 p-6">
        <Slider {...carouselSettings}>
          <div className="">
            <Card12
              iconSrc={PatientsIcon}
              title="All Patients"
              value="400"
              graphSrc={PatientsGraph}
              legendItems={legendItems}
            />
          </div>
          <div className="">
            <Card12
              iconSrc={ActivePatientsIcon}
              title="Active Patients"
              value="170"
              graphSrc={ActivePatientsGraph}
              legendItems={legendItems}
            />
          </div>
          <div className="">
            <Card34
              iconSrc={NewRegIcon}
              title="New Registrations"
              value="62"
              graphSrc={NewRegGraph}
              legendItems={legendItems}
              trendPercentage="10"
              trendDirection="up"
            />
          </div>
          <div className="">
            <Card34
              iconSrc={PrevAppIcon}
              title="Previous Appointments"
              value="170"
              graphSrc={PrevAppGraph}
              trendPercentage="5"
              trendDirection="down"
            />
          </div>
          <div className="">
            <Card56
              iconSrc={AppTodayIcon}
              title="Appoinments Today"
              value="12"
              legendItems={legendItems}
            />
          </div>
          <div className="">
            <Card56
              iconSrc={UpcomingAppIcon}
              title="Upcoming Appointments"
              value="05"
              legendItems={legendItems}
            />
          </div>
        </Slider>
      </div>
      <section className="mt-4">
        <PatientTable />
      </section>
    </div>
  );
}

export default Dashboard;
