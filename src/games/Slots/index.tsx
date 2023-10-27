import React from 'react'
import image from './logo.png'

export default {
  name: 'Slots',
  short_name: 'slots',
  description: `
   creator:'ACoPzg7tNqhBXJm4JSQwKrJ7LiocezBTSZRQfLmrxpZz',
  `,
  image,
  theme_color: '#d185ff',
  app: React.lazy(() => import('./App')),
}
