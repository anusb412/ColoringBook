import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'ColoringPage1' }} />
      {/* Other Stack.Screen components for your routes */}
    </Stack>
  );
}