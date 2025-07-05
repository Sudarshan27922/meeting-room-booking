import React, { useEffect, useState, useMemo } from 'react';
import DashboardTemplate from '../templates/DashboardTemplate';
import { RoomService } from '../../services/roomService';
import type { MeetingRoom } from '../../services/roomService';
import { useAuth } from '../../context/AuthContext';

const DashboardPage = () => {
  const [rooms, setRooms] = useState<MeetingRoom[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    RoomService.getRooms().then(setRooms);
  }, []);

  const roomStats = useMemo(() => {
    const total = rooms.length;
    const available = rooms.filter((room) => room.isAvailable).length;
    const occupied = total - available;

    return { total, available, occupied };
  }, [rooms]);

  if (!user) return null;

  return <DashboardTemplate rooms={rooms} user={user} stats={roomStats} />;
};

export default DashboardPage;
