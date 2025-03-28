import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { JobProvider } from './context/JobContext';
import JobFinderScreen from './screens/JobFinderScreen'
export default function App() {
  return (
    <JobProvider>
      <JobFinderScreen />
    </JobProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
