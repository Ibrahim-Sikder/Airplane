// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(req);
}


// For larger projects handle this need Node Js/ Express Js so  I'm using Node Js instead of the Next Js API for form submisison.