<template>
  <div id="qr-reader" style="width:100%"></div>
  <div id="qr-reader-results" style="width:100%"></div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { Html5QrcodeScanner } from 'html5-qrcode'

  const router = useRouter()

  var lastResult, countResults = 0;
  function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
      ++countResults;
      lastResult = decodedText;
      // Handle on success condition with the decoded message.
          
      console.log(`Scan result ${decodedText}`, decodedResult);

      router.push({ path: '/result', query: { text: decodedText } });

      console.log(decodedText);
    }
  }
  
  onMounted(() => {
    var resultContainer = document.getElementById('qr-reader-results');

    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 300 });
    html5QrcodeScanner.render(onScanSuccess);
  });
</script>