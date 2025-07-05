import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { MeetingRoom } from '../services/roomService';
import { RoomService } from '../services/roomService';

interface RoomContextType {
  rooms: MeetingRoom[];
  loading: boolean;
  refreshRooms: () => void;
}

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rooms, setRooms] = useState<MeetingRoom[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRooms = useCallback(async () => {
    setLoading(true);
    const data = await RoomService.getRooms();
    setRooms(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  const value: RoomContextType = {
    rooms,
    loading,
    refreshRooms: fetchRooms,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export const useRoomContext = (): RoomContextType => {
  const context = useContext(RoomContext);
  if (!context) throw new Error('useRoomContext must be used within RoomProvider');
  return context;
};
