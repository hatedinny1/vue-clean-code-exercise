import Header from '@/components/Header'
import {shallowMount} from '@vue/test-utils'

describe('Header', () => {
    function wrapperInject(date) {
        let wrapper = shallowMount(Header, {
            methods: {
                getDate: () => new Date(date)
            }
        })
        return wrapper;
    }

    it('Hide cake', () => {
        let wrapper = wrapperInject('2018-11-11');
        expect(wrapper.vm.profileCaption).toEqual('Jackson')
    })

    it('show cake', () => {
        let wrapper = wrapperInject('2018-10-18')
        expect(wrapper.vm.profileCaption).toEqual('Jackson🎂')
    })
})