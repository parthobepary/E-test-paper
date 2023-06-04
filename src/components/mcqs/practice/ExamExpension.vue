<template>
  <div class="container px-3 mt-4">
    <div v-if="mcqs && mcqs.length" class="">
      <div v-for="(item, i) in mcqs" :key="i">
        <div class="mb-3 rounded-md w-full bg-white">
          <div
            @click="openSutter(i)"
            class="flex justify-between items-center cursor-pointer px-4 py-[4px] 1transition-all"
          >
            <p class="text-[14px]">{{ i + 1 }} . <span v-katex:auto v-html="item.question" class="latex"> </span></p>
            <p class="text-[14px] transition-all">
              <Icon
                color="#0462A1"
                :name="
                  targetClick == i ? 'ion:ios-arrow-up' : 'ion:chevron-down'
                "
              ></Icon>
            </p>
          </div>
          <div v-if="isOpen && targetClick === i" class="px-2 pb-3">
            <template v-if="item.options && item.options.length">
              <div
                :class="showDesBtn ? 'hidden' : 'block'"
                v-for="(item, i) in item.options" :key="i" :value="item"
              >
                <button
                  @click="submitAnswer(getDigit(ind), item.answer)"
                  class="bg-[#F3F4FA] w-full px-3 text-[16px] rounded-md mb-2 flex justify-between"
                >
                  <p>
                    <small
                      > {{ getDigit(i) }} <span v-katex="item" class="latex"></span></small
                    >
                  </p>
                </button>
              </div>
              <div
                :class="!showDesBtn ? 'hidden' : 'block'"
                v-for="(item, i) in item.options" :key="i" :value="item"
              >
                <button
                  @click="submitAnswer()"
                  :class="
                    getDigit(ind).split(' ')[0] == item.answer
                      ? 'bg-[#DDF5FF] border-2 border-[#008FCA]'
                      : 'bg-[#F3F4FA]'
                  "
                  class="w-full px-3 text-[16px] rounded-md mb-2 flex justify-between"
                >
                  <p>
                    <small
                      >{{ getDigit(item) }} <span v-katex="item" class="latex"></span></small
                    >
                  </p>
                  <p v-if="getDigit(ind).split(' ')[0] == item.answer">
                    <Icon
                      color="#31CB18"
                      size="25"
                      name="heroicons-solid:check-circle"
                    />
                  </p>
                </button>
              </div>
            </template>
            <!-- <template
              v-if="mcq?.description && mcq.description.length && showDesBtn"
            >
              <div v-if="!isShowExplain" class="flex justify-center py-3">
                <button
                  @click="showExplain"
                  class="text-[15px] px-4 btn_border rounded-xl text-[#045689]"
                >
                  See Explanation
                </button>
              </div>
              <div
                v-if="isShowExplain"
                class="bg-[#FDEAD2] px-3 rounded-md py-3"
              >
                <p>
                  <small class="text-[14px] leading-tight"
                    ><span class="text-[#5287A5]">Explanation : </span
                    >{{ mcq.description }}</small
                  >
                </p>
              </div>
              <div v-if="isShowExplain" class="flex justify-center py-3">
                <button
                  @click="hideExplain"
                  class="text-[15px] px-4 btn_border rounded-xl text-[#045689]"
                >
                  Hide Explanation
                </button>
              </div>
            </template> -->
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
    default: [],
  },
});
const isShowExplain = ref(false);
const isOpen = ref(false);
const showDesBtn = ref(false);
const targetClick = ref(-1);

const route = useRoute();
console.log(route.query);



const isLoading = ref(false);
const mcqs = ref([]);

const init = async() => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch('https://api.e-testpaper.com/api/boards/5/question/2019/?subject_id=6472f5568fc601e99af005b5&type=mcq&fbclid=IwAR2fK4_9_VbnIxRpIRUDb3c9_aTkj1mjGXlxkeUO6MoFaOqmotx2vgE9YbQ')
    if(error && error._value){
        console.log(error);
    }else{
        // console.log(data.value);
        mcqs.value = data.value.questions
    }
    isLoading.value = false;
}
init();



const openSutter = (i) => {
  if (i === targetClick.value) {
    targetClick.value = -1;
    isOpen.value = !isOpen.value;
    showDesBtn.value = false;
  } else {
    targetClick.value = i;
    isOpen.value = true;
    showDesBtn.value = false;
  }
};
const getDigit = (i) => {
  if (i == 0) return "a . ";
  else if (i == 1) return "b . ";
  else if (i == 2) return "c . ";
  else return "d . ";
};
const showExplain = () => {
  isShowExplain.value = !isShowExplain.value;
};

const hideExplain = () => {
  isShowExplain.value = !isShowExplain.value;
};
const submitAnswer = () => {
  showDesBtn.value = true;
};
</script>
<style>
.btn_border {
  border: 1px solid #045689;
}
</style>

<!-- https://icones.js.org/ -->
