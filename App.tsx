/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ThemeProvider } from '@shared/styles/themeProvider';
import MainNavigator from '@/navigation/MainNavigator';
function App() {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
}

export default App;
