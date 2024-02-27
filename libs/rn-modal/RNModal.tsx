import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  View,
  Button as ButtonNative,
} from 'react-native';
import {Text} from 'react-native-paper';

import {Button} from '../../components';

export const RNModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <Pressable onPress={handleCloseModal} style={styles.overlay} />
          <View style={styles.contentContainer}>
            <Text>react-native modal</Text>
            <ButtonNative title="Close Modal" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
      <Button text="react-native modal" onPress={handleOpenModal} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 20,
  },
});
