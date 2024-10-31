import installer from './defaults'
export * from '@el-cool/components'
export * from '@el-cool/constants'
export * from '@el-cool/directives'
export * from '@el-cool/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export const CommonUtils = installer.CommonUtils

export default installer

export { default as dayjs } from 'dayjs'
