import AvailabilityForm from "../components/AvailabilityForm";
import "./StudentPage.css"; // Add this CSS file

export default function StudentPage() {
  return (
    <div className="student-page">
      <h2>Submit Your Availability</h2>
      <AvailabilityForm />
    </div>
  );
}
