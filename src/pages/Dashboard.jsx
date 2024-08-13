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
  slidesToShow: 4, // Number of slides to show at a time
  slidesToScroll: 1, // Number of slides to scroll at a time
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3, // Show 3 slides on medium screens
        slidesToScroll: 1, // Scroll 1 slide at a time
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2, // Show 2 slides on smaller screens
        slidesToScroll: 1, // Scroll 1 slide at a time
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2, // Show 2 slides on mobile screens
        slidesToScroll: 1, // Scroll 1 slide at a time
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1, // Show 1 slide on very small screens
        slidesToScroll: 1, // Scroll 1 slide at a time
      },
    },
  ],
};

function Dashboard() {
  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <header className="flex flex-col mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Mike Jani</h1>
        <p className="text-sm font-medium text-gray-600">
          Hi Doctor, take a look at your patients' activities
        </p>
      </header>

      <section className="mb-6">
        <Slider {...carouselSettings} className="p-3">
          <div className="p-2">
            <Card12
              iconSrc={PatientsIcon}
              title="All Patients"
              value="400"
              graphSrc={PatientsGraph}
              legendItems={legendItems}
            />
          </div>
          <div className="p-2">
            <Card12
              iconSrc={ActivePatientsIcon}
              title="Active Patients"
              value="170"
              graphSrc={ActivePatientsGraph}
              legendItems={legendItems}
            />
          </div>
          <div className="p-2">
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
          <div className="p-2">
            <Card34
              iconSrc={PrevAppIcon}
              title="Previous Appointments"
              value="170"
              graphSrc={PrevAppGraph}
              trendPercentage="5"
              trendDirection="down"
            />
          </div>
          <div className="p-2">
            <Card56
              iconSrc={AppTodayIcon}
              title="Appointments Today"
              value="12"
              legendItems={legendItems}
            />
          </div>
          <div className="p-2">
            <Card56
              iconSrc={UpcomingAppIcon}
              title="Upcoming Appointments"
              value="05"
              legendItems={legendItems}
            />
          </div>
        </Slider>
      </section>

      <section className="mt-4 bg-white shadow rounded-lg p-4">
        <PatientTable />
      </section>
    </div>
  );
}

export default Dashboard;
