// app/api/auth/logout.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Set the token cookie to be expired
    res.setHeader('Set-Cookie', 'token=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict')

    // Return a success response
    return res.status(200).json({ message: 'Logout successful' })
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
