import React, {useState} from 'react';
import {Text, View, Button as ButtonNative, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

import {Button} from '../../components';

export const ReactNativeModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      <Modal isVisible={isModalVisible} onBackdropPress={handleCloseModal}>
        <View style={styles.container}>
          <Text>react-native-modal</Text>
          <ButtonNative title="Close Modal" onPress={handleCloseModal} />
        </View>
      </Modal>
      <Button text="react-native-modal" onPress={handleOpenModal} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
});
