import React from "react";
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

const Analytics = () => {
  const legendItems = [
    { color: "bg-[#5388D8]", label: "COPD", count: 100 },
    { color: "bg-[#F665A2]", label: "Asthma", count: 100 },
    { color: "bg-[#F4BE37]", label: "TB", count: 200 },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-white to-gray-50 w-full h-full flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Analytics Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg">
        <div className="transition-transform transform hover:scale-105">
          <Card12
            iconSrc={PatientsIcon}
            title="All Patients"
            value="400"
            graphSrc={PatientsGraph}
            legendItems={legendItems}
          />
        </div>
        <div className="transition-transform transform hover:scale-105">
          <Card12
            iconSrc={ActivePatientsIcon}
            title="Active Patients"
            value="170"
            graphSrc={ActivePatientsGraph}
            legendItems={legendItems}
          />
        </div>
        <div className="transition-transform transform hover:scale-105">
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
        <div className="transition-transform transform hover:scale-105">
          <Card34
            iconSrc={PrevAppIcon}
            title="Previous Appointments"
            value="170"
            graphSrc={PrevAppGraph}
            trendPercentage="5"
            trendDirection="down"
          />
        </div>
        <div className="transition-transform transform hover:scale-105">
          <Card56
            iconSrc={AppTodayIcon}
            title="Appointments Today"
            value="12"
            legendItems={legendItems}
          />
        </div>
        <div className="transition-transform transform hover:scale-105">
          <Card56
            iconSrc={UpcomingAppIcon}
            title="Upcoming Appointments"
            value="05"
            legendItems={legendItems}
          />
        </div>
      </div>
      <div className="mt-8 w-full">
        <PatientTable />
      </div>
    </div>
  );
};

export default Analytics;
