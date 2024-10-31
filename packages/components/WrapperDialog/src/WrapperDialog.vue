<template>
    <el-dialog v-model="dialogVisible" :title="props.title" width="500" :append-to-body="true">
        <slot></slot>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="info" v-if="props.hasCancel" @click="handleCancel">取消</el-button>
                <el-button type="primary" v-if="props.hasConfirm" @click="handleConfirm">
                    确定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import ElDialog from '@el-cool/components/dialog'
import ElButton from '@el-cool/components/button'
import { ref } from 'vue'
import { WrapperDialogProps } from './WrapperDialog'
import { WrapperDialogEmits } from './WrapperDialog'
defineOptions({
    name: 'ElWrapperDialog',
})
let dialogVisible = ref(true)
const props = defineProps(WrapperDialogProps)
const emit = defineEmits(WrapperDialogEmits)

const handleConfirm = () => {
    emit('handleConfirm')
}

const handleCancel = () => {
    emit('handleCancel')
}
</script>
