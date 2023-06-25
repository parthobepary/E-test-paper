
<template>
    <div :class="position == 'first' ? 'flex justify-between items-center gap-4 md:block' : 'block'">
      <div :class="position == 'first' ? '': 'md:mt-6'" class="w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#2a5bbc]">
      </div>
      <div :class="position == 'first' ? 'md:mt-[50px]': 'md:mt-8 mt-4'" class="py-4">
        <p class="text-center text-[14px] font-[Poppins]">{{ rank?.name }}</p>
        <p class="text-center text-[14px] font-[Poppins]">{{ rank?.institution }}</p>
        <div class="flex justify-center gap-4">
          <div class="flex items-center">
            <p class="text-[14px]">
              <Icon
                color="blue"
                name="streamline:interface-time-clock-circle-clock-loading-measure-time-circle"
              />
            </p>
            <p class="pl-2 text-[14px] font-[Poppins]">{{ rank?.duration }}sec</p>
          </div>
          <div class="flex items-center">
            <p class="text-[14px]">
              <Icon
                color="red"
                name="streamline:interface-lighting-light-bulb-lighting-light-incandescent-bulb-lights"
              />
            </p>
            <p class="pl-2 text-[14px] font-[Poppins]">
              {{ rank?.marks }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    rank: {
      type: Object,
      default: {},
    },
    position: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  });
  </script>
  
  <style lang="scss" scoped></style>
  