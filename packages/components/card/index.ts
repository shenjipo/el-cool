import { withInstall } from '@el-cool/utils'

import Card from './src/card.vue'

export const ElCard = withInstall(Card)
export default ElCard

export * from './src/card'
export type { CardInstance } from './src/instance'
