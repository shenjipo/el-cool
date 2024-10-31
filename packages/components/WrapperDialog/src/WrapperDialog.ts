import { buildProps } from '@el-cool/utils'

import type { ExtractPropTypes } from 'vue'
import type WrapperDialog from './WrapperDialog.vue'

export const WrapperDialogProps = buildProps({
    hasConfirm: {
        type: Boolean,
        default: true
    },
    hasCancel: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    }
})

export const WrapperDialogEmits = {
    handleConfirm: () => {
        return true
    },
    handleCancel: () => {
        return true
    },
}




export type WrapperDialogProps = ExtractPropTypes<typeof WrapperDialogProps>
export type WrapperDialogInstance = InstanceType<typeof WrapperDialog>
