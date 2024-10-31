import { withInstall } from '@el-cool/utils'

import Alert from './src/alert.vue'

export const ElAlert = withInstall(Alert)
export default ElAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
