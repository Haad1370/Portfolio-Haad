import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'BOOKINGS';

export const saveBooking = async (movie) => {
  const current = await getBookings();
  const updated = [...current, movie];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const getBookings = async () => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : [];
};
