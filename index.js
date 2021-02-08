console.log("Loading in hacks... 10% done..")
console.log("Loading in hacks... 32% done..")
console.log("Loading in hacks... 85% done..")
console.log("Loading in hacks... 100% done..")


console.log('Starting ddos attack')

function ddos(webiste) {
  webiste = 'riverside.rocks'
  console.log(`64 Packets sent to ${webiste} [200]`)
}

setInterval(ddos, 0);

process.on('SIGINT', function() {
  console.log('Stopping ddos attack.');
});
