import { withInstallFunction } from '@el-cool/utils'

import Notify from './src/notify'

export const ElNotification = withInstallFunction(Notify, '$notify')
export default ElNotification

export * from './src/notification'
