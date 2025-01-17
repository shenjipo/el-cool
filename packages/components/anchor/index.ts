import { withInstall, withNoopInstall } from '@el-cool/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

export const ElAnchor = withInstall(Anchor, {
    AnchorLink,
})
export const ElAnchorLink = withNoopInstall(AnchorLink)
export default ElAnchor

export * from './src/anchor'
