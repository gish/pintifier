import express from 'express';
import fetch from 'node-fetch';

import requireAuthentication from './../middleware/authentication';
const router = express.Router();

router.all('*', requireAuthentication);
router.get('/', (req, res) => {
  const {domain, event, timestamp} = req.query;
  fetch(process.env.SLACK_URL, {
    method: 'POST',
    body: JSON.stringify({
      username: 'Pintifier',
      icon_emoji: ':beer:',
      text: `${domain}: ${event} @ ${timestamp}`,
    }),
  });

  res.sendStatus(204);
});

export default router;
