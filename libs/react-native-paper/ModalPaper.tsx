import React from 'react';
import {StyleSheet, Text, Button as ButtonNative} from 'react-native';
import {Portal, Modal} from 'react-native-paper';

import {Button} from '../../components';

export const ModalPaper = () => {
  const [visible, setVisible] = React.useState(false);

  const handleOpenModal = () => setVisible(true);
  const handleCloseModal = () => setVisible(false);

  return (
    <>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={handleCloseModal}
          contentContainerStyle={styles.container}>
          <Text>react-native-paper-modal</Text>
          <ButtonNative title="Close Modal" onPress={handleCloseModal} />
        </Modal>
      </Portal>
      <Button text="react-native-paper-modal" onPress={handleOpenModal} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
});
