import { useRoomContext } from '../context/RoomContext';

export const useRooms = () => {
  const { rooms, loading, refreshRooms } = useRoomContext();

  const total = rooms.length;
  const available = rooms.filter((room) => room.isAvailable).length;
  const occupied = total - available;

  return {
    rooms,
    loading,
    refreshRooms,
    stats: { total, available, occupied },
  };
};
