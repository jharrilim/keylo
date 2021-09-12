import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  res.redirect(`/@/${req.query.search}`);
};

export default handler;
