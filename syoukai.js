
console.log('ipアドレスを取得しています')



fetch('https://ipinfo.io?callback')
  .then(res => res.json())
  .then(json => console.log(`あなたのipアドレス:"${json.ip}"`))
  .then(console.log('ipアドレス取得終了'))

  .then(console.log('https://ipinfo.io/?callback      詳細はこちら'))
