<template>
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
                            class="w-full md:w-[40%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-[#0072BB] text-center">
                                Are you sure to participate in the exam?
                            </DialogTitle>
                            <div class="mt-6 px-5">
                                <ul v-for="(it, i) in fakedata" :key="i">
                                    <li>{{ it }}</li>
                                </ul>
                            </div>

                            <div class="mt-8 flex justify-between gap-8">
                                <button type="button" class="bg-[#FF0000] text-white rounded-md px-6 py-2 w-[50%]"
                                    @click="closeModal">
                                    cancel
                                </button>
                                <nuxt-link to="/mcq/exam/12" type="button"
                                    class="w-[50%] bg-[#14AE5C] text-white rounded-md px-6 py-2 text-center" @click="startExam">
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
</style>
  