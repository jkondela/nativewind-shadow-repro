import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { verifyInstallation } from 'nativewind';
import './global.css';

export default function App() {
  verifyInstallation();

  return (
    <>
      <ScreenContent />
      <StatusBar style="auto" />
    </>
  );
}
