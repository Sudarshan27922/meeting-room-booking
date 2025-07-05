import { useLocation } from 'react-router-dom';
import BookingPageLayout from '../templates/BookingPageLayout';

const BookingPage = () => {
  const location = useLocation();
  const room = location.state?.room;

  if (!room) {
    return <div>No room data</div>;
  }

  return (
    <div>
      <BookingPageLayout />
    </div>
  );
};
export default BookingPage;