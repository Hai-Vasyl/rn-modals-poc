import React from 'react';
import {Text, View, Button as ButtonNative, StyleSheet} from 'react-native';
import {useModal} from 'react-native-modalfy';

import {Button} from '../../components';

type ErrorModalProps = {
  modal: {closeModal: () => void};
};

export const ErrorModal: React.FC<ErrorModalProps> = ({
  modal: {closeModal},
}) => {
  return (
    <View style={styles.container}>
      <Text>react-native-modalfy</Text>
      <ButtonNative onPress={closeModal} title="Close Modal" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export const ReactNativeModalfy = () => {
  const {openModal} = useModal();
  const handleOpenModal = () => openModal('ErrorModal');

  return <Button onPress={handleOpenModal} text="react-native-modalfy" />;
};
