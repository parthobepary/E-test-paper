<template>
  <div>
    <div class="pt-3">
      <div class="flex items-center">
        <div class="border_left"></div>
        <p class=" text-[16px] pl-2">Questions : </p>
        {{ selected }}
      </div>
      <template v-if="question && question.length">
        <div v-for="items, i in question" :key="i" class="pt-2">
          <p class="text-[18px] py-4">{{ i + 1 + '.' }} <span v-katex="removeP(items.question)" class="latex"> </span></p>


          <!-- <div v-katex:auto v-html="item.question"></div> -->


          <div class="pl-1">
            <RadioGroup v-model="selected[i]" multiple>
              <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
              <div class="space-y-2">
                <RadioGroupOption as="template" v-for="(item, ind) in items.options" :key="i" :value="item"
                  v-slot="{ active, checked }">
                  <div :class="[
                    checked
                      ? 'border-2 border-[#045D97] bg-[#F3FBFF]'
                      : 'border-2 border-gray-200',
                  ]" class="relative cursor-pointer rounded-md py-2 shadow-sm focus:outline-none">
                    <div class="w-full">
                      <div class="">
                        <div class="text-sm pl-2">
                          <RadioGroupLabel @click="ansUser(items, i, item)" as="p"
                            :class="checked ? 'text-black' : 'text-gray-900'" class="text-[14px]">
                            {{ getDigit(i) }}<span v-katex="item" class="latex"></span>
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
      </template>

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
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <DialogPanel
                  class="w-full pt-3 md:w-[30%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="pt-6 px-6 text-lg font-medium leading-6 text-center">
                    <p class="">
                      Are you sure to finish in the exam?
                    </p>
                    <div class="mt-6 px-5">
                      <ul v-for="(it, i) in fakedata" :key="i">
                        <li class="text-[14px]">{{ it }}</li>
                      </ul>
                    </div>
                  </DialogTitle>

                  <div class="mt-8 flex justify-center">
                    <button type="button" class=" text-black px-6 py-2 w-full" @click="closeModal">
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
  "Ensure uninterrupted internet .",
  "After participating in the exam",
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
  console.log(exists);

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
  height: 10px;
}

li {
  list-style: disc;
}
</style>
  