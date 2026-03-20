const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\c903c41c-1122-438a-b336-e3885b234def';
const destDir = path.join(__dirname, 'public', 'images', 'machines', 'flex-printing');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const images = {
    'capping_station_1773989983567.png': 'capping-station.png',
    'carriage_assembly_1773989759324.png': 'carriage-assembly.png',
    'control_panel_1773989920464.png': 'control-panel.png',
    'drying_system_1773989866738.png': 'drying-system.png',
    'frame_body_1773990021066.png': 'frame-body.png',
    'ink_supply_system_1773989776698.png': 'ink-supply-system.png',
    'media_feeding_system_1773989795981.png': 'media-feeding-system.png',
    'motherboard_1773989960313.png': 'motherboard.png',
    'motor_system_1773989903275.png': 'motor-system.png',
    'power_supply_unit_1773990001339.png': 'power-supply-unit.png',
    'print_head_1773989740017.png': 'print-head.png',
    'rail_belt_system_1773989885894.png': 'rail-belt-system.png',
    'rip_software_1773990039227.png': 'rip-software.png'
};

for (const [srcName, destName] of Object.entries(images)) {
    const srcPath = path.join(srcDir, srcName);
    const destPath = path.join(destDir, destName);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${srcName} to ${destName}`);
    } else {
        console.error(`Missing source image: ${srcPath}`);
    }
}
