import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { createRequest, removeVietnamese } from 'pmn-rn-core';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const request = createRequest(BASE_URL, 20000, 'vi_VN');
export default function App() {
  const nameVietNamese = 'Minh Ngọc';
  React.useEffect(() => {
    request()
      .get('todo/1')
      .then((response) => console.log({ response }));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {removeVietnamese(nameVietNamese)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
