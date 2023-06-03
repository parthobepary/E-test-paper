<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-2 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full md:w-[40%] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                            <div class="p-4">
                                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-center">
                                    Are you sure to participate in the exam?
                                </DialogTitle>
                                <div class="mt-6 px-5">
                                    <ul v-for="(it, i) in fakedata" :key="i">
                                        <li>{{ it }}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="flex justify-between">
                                <button type="button" class="text-black px-6 py-2 w-[50%]"
                                    @click="closeModal">
                                    cancel
                                </button>
                                <nuxt-link to="/mcq/exam/12" type="button"
                                    class="w-[50%] bg-color text-white px-6 py-2 text-center"
                                    @click="startExam">
                                    Confirm
                                </nuxt-link>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";

const emit = defineEmits(["closeModal"]);

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false,
    },
    exam: {
        type: Object,
        default: {},
    },
});
const fakedata = [
    "Ensure uninterrupted internet connection before participating in the exam.",
    "After participating in the exam, you cannot return to the previous page.",
    "The exam will be over when the time allotted for the exam is over.",
    "If you cancel before the end of the exam, you will not be able to take the exam again.Switching to another browser tab or minimizing the browser during the test will cancel the test.",
    "The exam must be completed within the stipulated time.",
];

/* method */

const closeModal = () => {
    emit("closeModal", false);
};
</script>
  
<style scoped>
li {
    list-style: disc;
}

.bg-color{
    background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
}
</style>
  