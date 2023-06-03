<template>
  <div>
    <div class="pt-3">
      <template v-if="exam.mcq && exam.mcq.length">
        <div v-for="item, i in exam.mcq" :key="i">
          <p class="text-[18px]">{{ i + 1 + ' . ' + item.name }}</p>
          <!-- exam option -->
          <div class="pl-4">
            <RadioGroup v-model="selected">
              <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
              <div class="space-y-2">
                <RadioGroupOption as="template" v-for="(item, i) in item.questions" :key="i" :value="item"
                  v-slot="{ active, checked }">
                  <div :class="[
                    active
                      ? 'border-2 border-[#0072BB]'
                      : 'border-2 border-emerald-200',
                  ]" class="relative cursor-pointer rounded-lg px-8 py-3 shadow-md focus:outline-none">
                    <div class="w-full">
                      <div class="">
                        <div class="text-sm">
                          <RadioGroupLabel as="p" :class="checked ? 'text-black' : 'text-gray-900'" class="text-[14px]"> {{ getDigit(i)}} {{ item }}
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
    <div class="p-10 flex justify-center">
      <button @click="finishPracticeExam"
        class="cursor-pointer bg-[#008FCA] text-white w-full text-center md:w-[50%] rounded-md py-1 text-[16px]">
        Finish Exam
      </button>
    </div>

    <!-- exam finished modal -->

    <div>
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
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
                  class="w-full md:w-[30%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="pt-6 text-lg font-medium leading-6 text-[#0072BB] text-center">
                    <p class="text-[#0072BB]">
                      Are you sure to finish in the exam?
                    </p>
                  </DialogTitle>

                  <div class="mt-8 flex justify-center gap-8 pb-8">
                    <button type="button" class="bg-[#FF0000] text-white rounded-md px-6 py-2" @click="closeModal">
                      Cancel
                    </button>
                    <button class="bg-[#14AE5C] text-white rounded-md px-6 py-2" @click="confirmModal">
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


const selected = ref('')
const emit = defineEmits(['submitAnswer'])
const isOpen = ref(false)

const exam = ref({
  mcq: [
    {
      name: 'What is exam ?',
      questions: [
        "What is your name ?", "what is your father name ?", "What is your mother name ?"
      ]
    }

  ]
});

const getDigit = (i) => {
    if (i == 0) return 'a . ';
    else if (i == 1) return 'b . ';
    else if (i == 2) return 'c . ';
    else return 'd . '
};
const finishPracticeExam = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
}
const confirmModal = () => {
  // here you write the question submit logic
  isOpen.value = false;
  emit ('submitAnswer', true)
}
</script>
  