import { spawn } from 'child_process';
import qrcode from 'qrcode-terminal';
import { networkInterfaces } from 'os';

console.log('🚀 Starting dev server...\n');

function getWiFiIP() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    if (name === 'Wi-Fi' || name === 'WiFi') {
      for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          return net.address;
        }
      }
    }
  }
  return 'localhost';
}

// Start Vite dev server with --host flag
const vite = spawn('npm', ['run', 'dev', '--', '--host'], {
  shell: true,
  stdio: ['inherit', 'pipe', 'inherit']
});

let serverReady = false;

vite.stdout.on('data', (data) => {
  const output = data.toString();
  process.stdout.write(output);
  
  if (!serverReady && output.includes('ready in')) {
    serverReady = true;
    const wifiIP = getWiFiIP();
    const url = `http://${wifiIP}:5173`;
    
    console.log('\n' + '='.repeat(60));
    console.log(`✅ Your local URL: ${url}`);
    console.log('='.repeat(60));
    console.log('\n📱 Scan this QR code with your phone:\n');
    
    qrcode.generate(url, { small: true });
    
    console.log('\n✅ Make sure your phone is on the SAME WiFi!');
    console.log('⚠️  If it doesn\'t work, run in CMD as admin:');
    console.log('   netsh advfirewall set allprofiles state off');
    console.log('='.repeat(60) + '\n');
  }
});

vite.on('close', (code) => {
  console.log(`\nServer stopped with code ${code}`);
  process.exit(code);
});

process.on('SIGINT', () => {
  console.log('\n👋 Stopping server...');
  vite.kill();
  process.exit();
});
