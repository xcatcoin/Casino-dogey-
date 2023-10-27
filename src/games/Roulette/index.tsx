import React from 'react'
import image from './logo.png'

export default {
  name: 'Roulette',
  short_name: 'roulette',
  description: `
    creator :ACoPzg7tNqhBXJm4JSQwKrJ7LiocezBTSZRQfLmrxpZz
  `,
  image,
  theme_color: 'rgb(29 232 126)',
  app: React.lazy(() => import('./App')),
}
