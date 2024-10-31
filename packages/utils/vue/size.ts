import { componentSizeMap } from '@el-cool/constants'

import type { ComponentSize } from '@el-cool/constants'

export const getComponentSize = (size?: ComponentSize) => {
    return componentSizeMap[size || 'default']
}
