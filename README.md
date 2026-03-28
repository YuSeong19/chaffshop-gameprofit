# 💎 Game Profit Analyzer — Real-time Multi-user

ระบบคำนวณกำไรแพ็คเกจเกม รองรับหลายคนพร้อมกัน ผ่าน Firebase Realtime Database

---

## 🚀 Deploy ขึ้น Firebase (3 ขั้นตอน)

### ขั้นที่ 1: ตั้งค่า Firebase Console

1. ไปที่ https://console.firebase.google.com → Project: **chaffshop-gameprofit**
2. เปิด **Realtime Database**:
   - Build → Realtime Database → Create database
   - เลือก Singapore (asia-southeast1) ✅ (ตรงกับ URL ที่ใช้แล้ว)
   - เริ่มด้วย **Test mode** (อ่าน/เขียนได้ทุกคน 30 วัน)
3. เปิด **Hosting**: Build → Hosting → Get started

### ขั้นที่ 2: Deploy

```bash
npm install -g firebase-tools
firebase login
firebase deploy --project chaffshop-gameprofit
```

### ขั้นที่ 3: Deploy Database Rules

```bash
firebase deploy --only database --project chaffshop-gameprofit
```

**URL แอพ:** `https://chaffshop-gameprofit.web.app`

---

## 👥 วิธีใช้งานหลายคนพร้อมกัน

1. คนแรก เปิดแอพ → กด **✨ สร้างห้องใหม่** (หรือพิมพ์รหัสห้อง เช่น `ROV-ร้านA`)
2. **แชร์รหัสห้อง** ให้ทีมงาน
3. ทีมงานเปิดแอพ → พิมพ์รหัสห้อง → กด **🔗 เข้าห้อง**
4. ข้อมูลจะ **sync อัตโนมัติ** เมื่อมีการแก้ไข (real-time)

---

## 📁 โครงสร้างไฟล์

```
game-profit-app/
├── index.html           ← แอพทั้งหมด + Firebase Realtime SDK
├── firebase.json        ← Hosting + Database config
├── database.rules.json  ← Realtime Database security rules
├── vercel.json          ← Vercel deploy config (ถ้าไม่ใช้ Firebase Hosting)
└── README.md
```

## 🗄️ โครงสร้างข้อมูลใน RTDB

```
chaffshop-gameprofit-default-rtdb/
├── rooms/
│   └── {roomId}/
│       ├── id: "ROV-ร้านA"
│       ├── data: "{ JSON ข้อมูลทั้งหมด }"
│       ├── updatedAt: 1234567890
│       └── updatedBy: "u_abc123"
└── profiles/
    └── {name}/
        ├── name: "ชื่อโปรไฟล์"
        ├── data: "{ JSON }"
        └── savedAt: 1234567890
```
