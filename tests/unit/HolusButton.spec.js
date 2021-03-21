import { shallowMount } from "@vue/test-utils";
import HolusButton from "@/components/HolusButton.vue";

describe("HolusButton.vue", () => {
  it("renders props.msg when passed", () => {
    const label = "Default Button";
    const wrapper = shallowMount(HolusButton, {
      propsData: { label },
    });
    expect(wrapper.text()).toMatch(label);
  });
});
