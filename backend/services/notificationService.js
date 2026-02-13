import admin from "firebase-admin";    //Firebase’s backend SDK
import serviceAccount from "../firebaseServiceKey.json" assert { type: "json" };

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const sendPushNotification = async (token, title, body) => {       //dev tok,notifi tit,content gets from reminderCron
  try {
    await admin.messaging().send({            //BE sends to FB and it sends to FE
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
