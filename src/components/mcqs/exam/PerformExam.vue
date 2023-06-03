<template>
  <div>
    <div class="pt-3">
      <div class="flex items-center">
        <div class="border_left"></div>
        <p class=" text-[16px] pl-2">Questions : </p>
      </div>
      <template v-if="exam.mcq && exam.mcq.length">
        <div v-for="item, i in exam.mcq" :key="i">
          <p class="text-[18px]">{{ i + 1 + ' . ' + item.name }}</p>
          <!-- exam option -->
          <div class="pl-1">
            <RadioGroup v-model="selected">
              <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
              <div class="space-y-2">
                <RadioGroupOption as="template" v-for="(item, i) in item.questions" :key="i" :value="item"
                  v-slot="{ active, checked }">
                  <div :class="[
                    active
                      ? 'border-2 border-[#045D97] bg-[#F3FBFF]'
                      : 'border-2 border-gray-200',
                  ]" class="relative cursor-pointer rounded-md py-2 shadow-sm focus:outline-none">
                    <div class="w-full">
                      <div class="">
                        <div class="text-sm pl-2">
                          <RadioGroupLabel as="p" :class="checked ? 'text-black' : 'text-gray-900'" class="text-[14px]">
                            {{ getDigit(i) }} {{ item }}
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
                  class="w-full pt-3 md:w-[30%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="pt-6 text-lg font-medium leading-6 text-center">
                    <p class="">
                      Are you sure to finish in the exam?
                    </p>
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
  }
})

const selected = ref('')
const emit = defineEmits(['submitAnswer'])

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

const closeModal = () => {
  props.isOpen = false;
}
const confirmModal = () => {
  // here you write the question submit logic
  props.isOpen = false;
  emit('submitAnswer', true)
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
</style>
  