import Header from '@/components/Header'
import {shallowMount} from '@vue/test-utils'

describe('Header', () => {
  it('hide cake', () => {
    //Arrange
    let wrapper = shallowMount(Header)

    //Act
    let profileCaption = wrapper.vm.profileCaption;

    //Assert
    expect(profileCaption).toEqual('Jackson')
  })
})
