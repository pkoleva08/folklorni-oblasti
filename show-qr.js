import qrcode from "qrcode-terminal";
import { networkInterfaces } from "os";

// Get all local IP addresses
function getAllLocalIPs() {
  const nets = networkInterfaces();
  const ips = [];
  
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip internal and non-IPv4 addresses
      if (net.family === "IPv4" && !net.internal) {
        ips.push({ name, address: net.address });
      }
    }
  }
  return ips;
}

const port = process.env.PORT || 5173;
const ips = getAllLocalIPs();

if (ips.length === 0) {
  console.log("❌ No network interfaces found!");
  console.log("Make sure your computer is connected to a network (WiFi or Ethernet)");
  process.exit(1);
}

console.log("\n🌐 Available Network Interfaces:\n");
ips.forEach((ip, index) => {
  console.log(`${index + 1}. ${ip.name}: ${ip.address}`);
});

// Prefer WiFi adapter over virtual adapters (exact match to avoid vEthernet)
const wifiIP = ips.find(ip => ip.name === 'Wi-Fi' || ip.name === 'WiFi');
const mainIP = wifiIP ? wifiIP.address : ips[0].address;
const url = `http://${mainIP}:${port}`;

console.log("\n" + "=".repeat(60));
console.log(`📱 Main URL: ${url}`);
console.log("=".repeat(60));
console.log("\n📱 Scan this QR code with your phone:\n");
qrcode.generate(url, { small: true });
console.log("\n✅ Make sure your phone is on the SAME WiFi network!");
console.log("=".repeat(60) + "\n");
