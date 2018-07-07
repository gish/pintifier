import express from 'express';
import fetch from 'node-fetch';

import requireAuthentication from './../middleware/authentication';
const router = express.Router();

const safeParse = stringifiedJson => {
  try {
    return JSON.parse(stringifiedJson);
  } catch (e) {
    return {};
  }
};

router.all('*', requireAuthentication);
router.get('/', (req, res) => {
  const {domain, payload} = req.query;
  const output = Object.entries(safeParse(payload))
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  fetch(process.env.SLACK_URL, {
    method: 'POST',
    body: JSON.stringify({
      username: 'Pintifier',
      icon_emoji: ':beer:',
      text: `${domain}:\n${output}`,
    }),
  });

  res.sendStatus(204);
});

export default router;
