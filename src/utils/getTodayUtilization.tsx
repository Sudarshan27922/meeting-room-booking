import type { MeetingRoom } from '../services/roomService';

export interface RoomUtilization {
  name: string;
  utilization: number;
}

export const getTodayUtilization = (rooms: MeetingRoom[]): RoomUtilization[] => {
  const today = new Date().toISOString().split('T')[0];
  const workingMinutes = 9 * 60;

  return rooms.map((room) => {
    const todayBookings = room.bookings.filter((b) => b.date === today);
    const bookedMinutes = todayBookings.reduce((acc, booking) => {
      const [startHour, startMin] = booking.startTime.split(':').map(Number);
      const [endHour, endMin] = booking.endTime.split(':').map(Number);
      const duration = (endHour * 60 + endMin) - (startHour * 60 + startMin);
      return acc + duration;
    }, 0);

    const utilization = Math.min(100, Math.round((bookedMinutes / workingMinutes) * 100));

    return {
      name: room.name,
      utilization,
    };
  });
};
