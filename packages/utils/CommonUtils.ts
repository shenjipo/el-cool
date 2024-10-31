import { h, render, Component } from 'vue'


export default class CommonUtils {
    static context: any
    static coms: Array<any> = []
    static InitUtils(context: any) {
        CommonUtils.context = context
    }
    static copy(val: any) {
        return JSON.parse(JSON.stringify(val))
    }

    static TsDialog(component: Component, config: Record<string, any>) {
        const div = document.createElement('div');
        document.body.appendChild(div);
        // @ts-ignore
        component.appContext = CommonUtils.context
        // @ts-ignore
        const container = h(component, {
            ...config,
            hide: () => {
                const destroyDiv = CommonUtils.coms.pop()
                if (destroyDiv) {
                    document.body.removeChild(destroyDiv)
                }
                const doms = Array.from(document.querySelectorAll('.el-overlay'))
                if (Array.isArray(doms) && doms.length > 0) {
                    document.body.removeChild(doms[doms.length - 1])
                }

            }
        })
        container.appContext = CommonUtils.context
        render(container, div)
        CommonUtils.coms.push(div)
    }
  
}