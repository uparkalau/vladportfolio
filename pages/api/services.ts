// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ services })
}
