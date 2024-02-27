import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ModalProvider, createModalStack} from 'react-native-modalfy';

import {ModalPaper} from './libs/react-native-paper';
import {ReactNativeModalfy} from './libs/react-native-modalfy';
import {ReactNativeModal} from './libs/react-native-modal';
import {RNModal} from './libs/rn-modal';
import {ErrorModal} from './libs/react-native-modalfy';

const modalConfig = {ErrorModal};
const defaultOptions = {backdropOpacity: 0.6};
const stack = createModalStack(modalConfig, defaultOptions);

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <PaperProvider>
          <ModalProvider stack={stack}>
            <View style={styles.buttons}>
              <ModalPaper />
              <ReactNativeModalfy />
              <ReactNativeModal />
              <RNModal />
            </View>
          </ModalProvider>
        </PaperProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    gap: 10,
    padding: 10,
  },
});

export default App;
