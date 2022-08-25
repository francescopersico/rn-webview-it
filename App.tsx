import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const JAVASCRIPT = `
function findParent(tagname, el) {
  while (el) {
    if ((el.nodeName || el.tagName).toLowerCase() === tagname.toLowerCase()) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

document.body.onclick = function(e) {
  e = e || event;
  const from = findParent("a", e.target || e.srcElement);
  if (from) {
    alert("Link clicked");
  }
};

window.onload = function(){
  alert('Onload!');
}
`;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://www.pagopa.gov.it/'}}
        injectedJavaScript={JAVASCRIPT}
      />
    </SafeAreaView>
  );
};

export default App;
