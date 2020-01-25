import React, { FC } from 'react'
import { IconProps } from './index'

const Success: FC<IconProps> = ({ width = 24 }) => {
  return (
    <svg viewBox='0 0 1024 1024' width={width}>
      <path
        d='M512 39.384615C250.092308 39.384615 39.384615 250.092308 39.384615 512s210.707692 472.615385 472.615385 472.615385 472.615385-210.707692 472.615385-472.615385S773.907692 39.384615 512 39.384615z m263.876923 354.461539L474.584615 699.076923c-11.815385 11.815385-31.507692 11.815385-43.323077 0L265.846154 531.692308c-11.815385-11.815385-11.815385-31.507692 0-43.323077l43.323077-43.323077c11.815385-11.815385 31.507692-11.815385 43.323077 0l86.646154 88.615384c7.876923 7.876923 21.661538 7.876923 29.538461 0L689.230769 305.230769c11.815385-11.815385 31.507692-11.815385 43.323077 0l43.323077 43.323077c13.784615 11.815385 13.784615 31.507692 0 45.292308z'
        fill='#52c41a'
      />
    </svg>
  )
}

export default Success