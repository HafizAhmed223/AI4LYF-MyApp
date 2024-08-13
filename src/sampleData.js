// src/sampleData.js
const sampleData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  image: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
  name: `Patient ${index + 1}`,
  diseases: ["BP", "Sugar", "Breathing Problem", "Cancer"]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2),
  prevAppointmentDate: new Date(
    2024,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28)
  ).toLocaleDateString(),
  statusState: ["Attend", "Missed", "No Appointment", "Cancelled"][
    Math.floor(Math.random() * 4)
  ],
  nextAppointmentDate: new Date(
    2024,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28)
  ).toLocaleDateString(),
}));

export default sampleData;
