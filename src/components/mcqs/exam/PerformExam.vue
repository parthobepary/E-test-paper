<template>
  <div>
    <div class="pt-3">
      <div class="flex items-center pt-[18px]">
        <div class="border_left rounded-md"></div>
        <p class=" text-[16px] pl-2 font-[Poppins]">Questions : </p>
      </div>
      <div>
        <div v-if="question && question.length">
          <div v-for="items, i in question" :key="i" class="pt-2">
            <p class="text-[14px] font-[Poppins] py-[10px]">{{ i + 1 + '.' }} <span v-katex="removeP(items.question)" class="latex font-[Poppins]"> </span>
            </p>
            <!-- <div v-katex:auto v-html="item.question"></div> -->
            <div class="">
              <RadioGroup v-model="selected[i]" multiple>
                <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
                <div :class="selected[i]?.length? 'bg-white px-2': ''" class="space-y-2 py-[10px] rounded-[8px]">
                  <RadioGroupOption as="template" v-for="(item, ind) in items.options" :key="i" :value="item"
                    v-slot="{ active, checked }" class="">
                    <div :class="[
                      checked
                        ? 'border-2 border-[#045D97] bg-[#F3FBFF] p-[10px]'
                        : selected[i]?.length ? 'border-none bg-[#FFFFFF] shadow-md px-2' : 'border-[1px] border-[#95bbda] bg-white px-2 ',
                    ]" class="cursor-pointer rounded-[8px] py-[10px]">
                      <div class="w-full">
                        <div class="">
                          <div class="text-[14px] pl-1">
                            <RadioGroupLabel @click="ansUser(items, i, item)" as="p"
                              :class="checked ? 'text-black' : 'text-gray-900'" class="text-[14px]">
                              {{ getDigit(i) }}<span v-katex="item" class="latex font-[Poppins]"></span>
                            </RadioGroupLabel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex justify-center items-center h-screen w-full">
            <p>No exam available</p>
          </div>
        </div>
      </div>
    </div>

    <!-- exam finished modal -->

    <div>
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" class="relative z-50">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
            leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-[20px] text-center">
              <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                  class="w-full  md:w-[30%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="px-[20px] pt-[20px] text-lg font-medium leading-6 text-center">
                    <p class="text-[20px]">
                      Are you sure to finish in the test ?
                    </p>
                    <div class="mt-6 px-5">
                      <ul v-for="(it, i) in fakedata" :key="i">
                        <li class="text-[14px] text-justify">{{ it }}</li>
                      </ul>
                    </div>
                  </DialogTitle>

                  <div class="mt-8 flex justify-center border-t-[1px] border-[#0377CC]">
                    <button type="button" class=" text-black px-6 py-2 w-full bg-[#F5F6FF]" @click="closeModal">
                      Cancel
                    </button>
                    <button class="bg-color text-white px-6 py-2 w-full" @click="confirmModal">
                      Confirm
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>
  
<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  question: {
    type: Array,
    default: []
  },
  exam: {
    type: [Number || String],
    default: ''
  },
  accessToken: {
    type: [Number || String],
    default: ''
  }
});

const fakedata = [
  "Revise whether you have answered all the questions correctly before completing the exam.",
  "If any question is left unanswered will be treated as an incorrect answer.",
  "Once you complete the exam, you will not be able to participate in this exam again."
];

// api data




const selected = ref([])
const emit = defineEmits(['submitAnswer', 'closeModal'])
const userAnswerWithQuestionId = ref([])

const getDigit = (i) => {
  if (i == 0) return 'a . ';
  else if (i == 1) return 'b . ';
  else if (i == 2) return 'c . ';
  else return 'd . '
};

const ansUser = (items, ind, item) => {
  const ans = {
    id: items.id,
    answer: item
  };
  const exists = userAnswerWithQuestionId.value.some(obj => obj.id === ans.id);

  if (!exists) {
    userAnswerWithQuestionId.value.push(ans)
  } else {
    userAnswerWithQuestionId.value.map(obj => {
      if (obj.id === items.id) {
        obj.answer = item;
      }
    });
  }
};

const removeP = (item) => {
  let pera = item.replace("p", "span")
  return pera
};

const closeModal = () => {
  emit('closeModal', false)
}
const confirmModal = () => {
  props.isOpen = false;
  const payLoad = {
    exam_id: props.exam.id,
    endedAt: props.exam.end_time,
    createdAt: props.exam.start_time,
    score: getCorrectAnsNum(),
    response: userAnswerWithQuestionId.value
  }
  emit('submitAnswer', payLoad)
  console.log(payLoad);
}

const getCorrectAnsNum = () => {
  let count = 0;
  selected.value.forEach((element, index) => {
    props.question.forEach((el, ind) => {
      if (index === ind && element == el.answer) {
        count = count + 1;
      }
    });
  });
  return count;
}
</script>

<style scoped>
.bg-color {
  background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
}

.border_left {
  background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
  width: 4px;
  height: 9px;
}

li {
  list-style: disc;
}
</style>
  