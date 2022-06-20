import type { NextApiRequest as Req, NextApiResponse as Res } from 'next'

import { setCookie } from 'nookies'
import { firebaseAdmin } from '@/lib/firebaseAdmin'

export default async function sessionApi(req: Req, res: Res) {
  // "POST"以外は、"404 Not Found"を返す
  if (req.method !== 'POST') return res.status(404).send('Not Found')

  const auth = firebaseAdmin.auth()

  // Tokenの有効期限
  const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5日

  // セッションCookieを作成するためのIDを取得
  const id = (JSON.parse(req.body).id || '').toString()

  // Cookieに保存するセッションIDを作成する
  const sessionCookie = await auth.createSessionCookie(id, { expiresIn })

  // Cookieのオプション
  const options = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    path: '/',
  }

  // セッションIDをCookieに設定する
  setCookie({ res }, 'session', sessionCookie, options)

  res.send(JSON.stringify({ status: 'success' }))
}
