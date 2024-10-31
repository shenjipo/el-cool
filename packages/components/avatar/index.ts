import { withInstall } from '@el-cool/utils'
import Avatar from './src/avatar.vue'

export const ElAvatar = withInstall(Avatar)
export default ElAvatar

export * from './src/avatar'
export type { AvatarInstance } from './src/instance'
