import admin from 'firebase-admin'

const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
  clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_ADMIN_PRIVATE_KEY || '').replace(
    /\\n/g,
    '\n'
  ),
}

export const firebaseAdmin =
  admin.apps[0] ||
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
