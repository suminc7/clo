import Vue from 'vue'
import ec from 'element-class'

const elements = {}

Vue.directive('loading', {
    inserted(el, binding, vnode) {
        // vnode.context.loadError = (response) => {
        //     console.log('loadError', response)
        //     const element = ec(el)
        //     element.remove('loading')
        //     throw new Error(response)
        // }

        elements[binding.value] = el

        vnode.context.removeLoading = (key) => {
            if (key) {
                const element = ec(elements[key])
                element.remove('loading')
                //delete elements[key]
                console.log('elements', elements)
            } else {
                throw new Error('removeLoading require key')
            }
        }

        //let timer = null

        el.addEventListener('click', (e) => {
            const element = ec(el)
            if (element.has('loading')) return
            element.add('loading')

           /* clearInterval(timer)

            timer = setTimeout(() => {
                element.remove('loading')
            }, 2000)
*/
            // setTimeout(() => {
            //     vnode.context[binding.value].then(response => {
            //         console.log('then', response)
            //         // element.remove('loading')
            //         clearInterval(timer)
            //     })
            // }, 10)
        })
    }
})
