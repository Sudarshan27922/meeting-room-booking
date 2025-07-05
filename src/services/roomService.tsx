import roomData from '../data/roomData.json';

export interface Booking {
    title: string;
    userId: string;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    isRecurring: boolean;
    guests: number;
}

export interface MeetingRoom {
    id: string;
    name: string;
    location: string;
    capacity: number;
    isAC: boolean;
    amenities: string[];
    bookings: Booking[];
    isAvailable: boolean;
}

export const RoomService = {
    getRooms: async (): Promise<MeetingRoom[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    roomData.map((room: any) => ({
                        ...room,
                        isAC: room.ac,
                        bookings: room.bookings.map((booking: any) => ({
                            title: booking.title,
                            userId: booking.userId,
                            name: booking.userName,
                            date: booking.date,
                            startTime: booking.startTime,
                            endTime: booking.endTime,
                            isRecurring: booking.isRecurring,
                            guests: booking.guests,
                        })),
                    }))
                );
            }, 500);
        });
    }
};
