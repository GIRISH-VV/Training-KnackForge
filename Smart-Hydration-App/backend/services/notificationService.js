import admin from "firebase-admin";
import serviceAccount from "../firebaseServiceKey.json" assert { type: "json" };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const sendPushNotification = async (token, title, body) => {
  try {
    await admin.messaging().send({
      token,
      notification: {
        title,
        body,
      },
    });
  } catch (error) {
    console.error("FCM Error:", error.message);
  }
};
