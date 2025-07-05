import type { Booking, MeetingRoom } from '../services/roomService';

export interface BookingWithRoom extends Booking {
    roomId: string;
    roomName: string;
}

export const getBookingsByUserId = (
    rooms: MeetingRoom[],
    userId: string
): BookingWithRoom[] => {
    const userBookings: BookingWithRoom[] = [];

    rooms.forEach((room) => {
        room.bookings.forEach((booking) => {
            if (booking.userId === userId) {
                userBookings.push({
                    ...booking,
                    roomId: room.id,
                    roomName: room.name,
                } as Booking & { roomId: string; roomName: string });
            }
        });
    });

    return userBookings;
};
