console.log("Loading in hacks... 10% done..");
console.log("Loading in hacks... 32% done..");
console.log("Loading in hacks... 85% done..");
console.log("Loading in hacks... 100% done..");

const proxy = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

console.log('Starting ddos attack');

function ddos(webiste) {
  webiste = 'riverside.rocks'
  console.log(`Sent 64 Packets from ${proxy} to https://${webiste}`)
  console.log("ddosing the improster!!!!!!!!!")
}

setInterval(ddos);

process.on('SIGINT', function() {
  console.log('Stopping ddos attack.');
});
