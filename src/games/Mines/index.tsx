import React from 'react'
import image from './logo.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  description:
    creator:'ACoPzg7tNqhBXJm4JSQwKrJ7LiocezBTSZRQfLmrxpZz',
  `,
  theme_color: 'rgb(138 102 255)',
  image,
  app: React.lazy(() => import('./Mines')),
}
