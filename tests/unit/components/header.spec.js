import Header from '@/components/Header'
import {shallowMount} from '@vue/test-utils'

describe('Header', () => {
    it('Hide cake', () => {
        let wrapper = shallowMount(Header)
        expect(wrapper.vm.profileCaption).toEqual('Jackson')
    })

    it('show cake', () => {
        let wrapper = shallowMount(Header, {
            methods: {
                getDate: function () {
                    return new Date('2018-10-18');
                }
            }
        })
        expect(wrapper.vm.profileCaption).toEqual('Jackson🎂')
    })
})