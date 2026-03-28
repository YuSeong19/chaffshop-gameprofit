// ══════════════════════════════════════════
// FIREBASE CONFIG — แก้ค่าด้วยข้อมูลของคุณ
// ══════════════════════════════════════════
// 1. ไปที่ https://console.firebase.google.com
// 2. สร้าง Project ใหม่
// 3. ไปที่ Project Settings > General > Your apps > Add app (Web)
// 4. คัดลอก firebaseConfig มาวางที่นี่

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

export default firebaseConfig;
