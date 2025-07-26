import AvailabilityForm from '../components/AvailabilityForm';

export default function StudentPage() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Submit Your Availability</h2>
      <AvailabilityForm />
    </div>
  );
}
