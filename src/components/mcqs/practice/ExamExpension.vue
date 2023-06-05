<template>
  <div class="container px-3 mt-4">
    <div class="">
      <div v-for="(mcqs, i) in items" :key="i">
        <div class="mb-2 rounded-md w-full bg-white">
          <div @click="openSutter(i)"
            class="flex justify-between items-center cursor-pointer px-4 py-[4px] transition-all">
            <p class="text-[14px]">{{ i + 1 + '.' }} <span v-katex="removeP(mcqs.question)" class="latex">
              </span></p>
            <p class="text-[14px] transition-all">
              <Icon color="#0462A1" :name="targetClick == i ? 'ion:ios-arrow-up' : 'ion:chevron-down'"></Icon>
            </p>
          </div>
          <div v-if="isOpen && targetClick === i" class="px-2 pb-3">
            <template v-if="mcqs.options && mcqs.options.length">
              <div :class="showDesBtn ? 'hidden' : 'block'" v-for="option, ind in mcqs.options">
                <!-- {{ option }} -->
                <button
                  :class="mcqs.answer == option ? 'bg-[#DDF5FF] border-2 border-[#008FCA]' : 'bg-[#F3F4FA]'"
                  class="w-full px-3 text-[16px] rounded-md mb-2 flex justify-between">
                  <p><small>{{ getDigit(ind) }} <span v-katex="option"></span></small></p>
                  <p v-if="mcqs.answer == option ">
                    <Icon size="25" color="#31CB18" name="heroicons-solid:check-circle" />
                  </p>
                </button>
              </div>
            </template>
            <div v-if="mcqs.explain && mcqs.explain.length">
              <div v-if="!isShowExplain" class="flex justify-center py-3">
                <button @click="showExplain" class="text-[15px] px-4 btn_border rounded-xl text-[#045689]">See
                  Explanation</button>
              </div>
              <div v-if="isShowExplain" class="bg-[#FDEAD2] px-3 rounded-md py-3">
                <p><small class="text-[14px] leading-tight"><span class="text-[#5287A5]">Explanation : </span>{{
                  mcqs.explain }}</small></p>
              </div>
              <div v-if="isShowExplain" class="flex justify-center py-3">
                <button @click="hideExplain" class="text-[15px] px-4 btn_border rounded-xl text-[#045689]">Hide
                  Explanation</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: []
  }
});
const isCorrect = ref(false)
const isShowExplain = ref(false);
const isOpen = ref(false);
const showDesBtn = ref(false);
const targetClick = ref(-1);
const openSutter = (i) => {
  if (i === targetClick.value) {
    targetClick.value = -1;
    isOpen.value = !isOpen.value;
    showDesBtn.value = false;
  }
  else {
    targetClick.value = i;
    isOpen.value = true;
    showDesBtn.value = false;
  }
};

const removeP = (item) => {
  let pera = item.split('<p>')[1].split('</p>')[0]
  return pera
}
const hideExplain = () => {
  isShowExplain.value = !isShowExplain.value;
};

const getDigit = (i) => {
  if (i == 0) return 'a . ';
  else if (i == 1) return 'b . ';
  else if (i == 2) return 'c . ';
  else return 'd . '
};
const showExplain = () => {
  isShowExplain.value = !isShowExplain.value;
};
const submitAnswer = () => {
  showDesBtn.value = true
}

</script>
<style>
.border {
  border: 1px solid blue;
}

.btn_border {
  border: 1px solid #81AAC4;
}</style>

<!-- https://icones.js.org/ -->