import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.redirect(`/@/${req.query.v}`);
}

export default handler;
