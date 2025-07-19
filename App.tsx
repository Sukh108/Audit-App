/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { RoleProvider } from './src/utils/roleContext';
import RootNavigation from './src/navigation/root-navigation';
import { Text } from 'react-native';

function App() {

  return (
    <RoleProvider>
      <RootNavigation />
     
   </RoleProvider>

  );
}


export default App;
