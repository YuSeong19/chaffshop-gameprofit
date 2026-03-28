# 💎 Game Profit Analyzer

ระบบคำนวณกำไรแพ็คเกจเกม — รองรับหลายร้านค้า เปรียบเทียบราคา บันทึกข้อมูลออนไลน์

---

## 🚀 Deploy วิธีไหนก็ได้

### วิธีที่ 1: Firebase Hosting (แนะนำ — มี database)

**ขั้นตอน:**

1. ติดตั้ง Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

2. สร้าง Firebase Project ที่ https://console.firebase.google.com
   - Enable **Firestore Database** (Native mode)
   - Enable **Hosting**

3. ใส่ Firebase Config ใน `index.html`
   - ไปที่ Project Settings > General > Your apps > Web
   - คัดลอก `firebaseConfig` object
   - แก้ไขใน index.html บรรทัดที่มี `YOUR_API_KEY`

4. แก้ `.firebaserc`
```json
{ "projects": { "default": "YOUR_PROJECT_ID" } }
```

5. Deploy
```bash
firebase deploy
```
URL จะเป็น: `https://YOUR_PROJECT_ID.web.app`

---

### วิธีที่ 2: Vercel (ง่ายที่สุด — ไม่มี database)

1. ไปที่ https://vercel.com > New Project
2. Import จาก GitHub หรือ Upload folder นี้
3. Deploy เลย — ใช้ localStorage แทน Firebase

หรือผ่าน CLI:
```bash
npm install -g vercel
vercel --prod
```

---

### วิธีที่ 3: GitHub Pages (ฟรี — ไม่มี database)

1. สร้าง Repository บน GitHub
2. Push ไฟล์ทั้งหมด
3. ไปที่ Settings > Pages > Source: main branch
4. URL: `https://USERNAME.github.io/REPO_NAME`

```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

---

## 📦 โครงสร้างไฟล์

```
game-profit-app/
├── index.html          ← แอปหลัก (HTML + CSS + JS ทั้งหมด)
├── firebase.json       ← Firebase Hosting config
├── firestore.rules     ← Firestore security rules
├── firestore.indexes.json
├── vercel.json         ← Vercel config
├── .firebaserc         ← Firebase project ID
├── .gitignore
└── README.md
```

## 🔧 Firestore Database Rules

ไฟล์ `firestore.rules` ตั้งให้ทุกคนอ่าน/เขียนได้ (เหมาะสำหรับใช้ส่วนตัว)
ถ้าต้องการให้มี Authentication เพิ่ม:
```
allow read, write: if request.auth != null;
```

## 💾 Collections ใน Firestore

| Collection | ข้อมูล |
|---|---|
| `saved-profiles` | โปรไฟล์ข้อมูลเกม+ร้านค้า |
| `transactions` | ประวัติการบันทึก (optional) |

---

Made with ❤️ — Game Profit Analyzer
