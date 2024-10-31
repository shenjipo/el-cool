import { ElInfiniteScroll } from '@el-cool/components/infinite-scroll'
import { ElLoading } from '@el-cool/components/loading'
import { ElMessage } from '@el-cool/components/message'
import { ElMessageBox } from '@el-cool/components/message-box'
import { ElNotification } from '@el-cool/components/notification'
import { ElPopoverDirective } from '@el-cool/components/popover'

import type { Plugin } from 'vue'

export default [
    ElInfiniteScroll,
    ElLoading,
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElPopoverDirective,
] as Plugin[]
