import React from 'react'
import image from './logo.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: `
    creator: 'ACoPzg7tNqhBXJm4JSQwKrJ7LiocezBTSZRQfLmrxpZz'.
  `,
  image,
  theme_color: 'rgb(255 218 121)',
  app: React.lazy(() => import('./App')),
}
