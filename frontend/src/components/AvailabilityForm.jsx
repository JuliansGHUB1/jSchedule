import { useState } from 'react';

export default function AvailabilityForm() {
  const [day, setDay] = useState('Monday');
  const [startTime, setStartTime] = useState('08:00');
  const [endTime, setEndTime] = useState('09:00');
  const [slots, setSlots] = useState([]);
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const times = Array.from({ length: 24 }, (_, i) =>
    `${String(i).padStart(2, '0')}:00`
  );

  const addSlot = () => {
    if (startTime >= endTime) return alert('Start time must be before end time');
    const newSlot = { day, startTime, endTime };
    setSlots([...slots, newSlot]);
  };

  const removeSlot = (index) => {
    setSlots(slots.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const payload = { email, studentId, availability: slots };
    console.log('Submitting:', payload);
    alert('Check console for submitted JSON');
  };

  return (
    <div>
      {/* Email and Student ID */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 mr-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student ID"
          className="border p-2"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </div>

      {/* Day & Time Selectors */}
      <div className="flex items-center gap-2 mb-4">
        <select value={day} onChange={(e) => setDay(e.target.value)} className="border p-2">
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select value={startTime} onChange={(e) => setStartTime(e.target.value)} className="border p-2">
          {times.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className="border p-2">
          {times.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <button onClick={addSlot} className="bg-green-500 text-white px-4 py-2 rounded">
          Add Time Slot
        </button>
      </div>

      {/* Slots Display */}
      <div className="mb-4">
        {slots.map((slot, i) => (
          <div key={i} className="flex justify-between items-center border p-2 mb-2">
            <span>{slot.day}: {slot.startTime} - {slot.endTime}</span>
            <button
              onClick={() => removeSlot(i)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
