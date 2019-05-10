import DialogMsg from './msg.js'
import DialogPrompt from './prompt.js'

export default {
    install: function (Vue) {
        Vue.component(DialogMsg.name, DialogMsg)
        Vue.component(DialogPrompt.name, DialogPrompt)

        Vue.prototype.$dialog_msg = DialogMsg.installMsg
        Vue.prototype.$dialog_prompt = DialogPrompt.installPrompt

        Vue.prototype.$page_top_ic = require('@/assets/page_top_ic.png')
        Vue.prototype.$ma_bg = require('@/assets/ma_bg.png')
    }
}
