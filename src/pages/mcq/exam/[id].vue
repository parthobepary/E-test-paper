<template>
  <div class="container mx-auto">
    <div v-if="isLoading" class="flex justify-center items-center h-screen w-full">
      <p class="text-center">Loading...</p>
    </div>
    <div v-else>
      <div class="">
        <!-- exam header -->
        <!-- timer -->
        <div v-if="!isSubmit" class="flex justify-between items-center px-[20px] py-3">
          <div class="flex items-center pt-6">
            <div class="border_left"></div>
            <p class=" text-[18px] pl-2">Remaining Time</p>
          </div>
          <div class="flex justify-between items-center pt-6">
            <!-- <LazyMcqsExamTimer :validUntil="exam.details.valid_till" /> -->
            <button @click="isSubmitAnswer" class="ml-2 text-[12px] px-2 py-2 rounded-md btn-submit text-white">সাবমিট
              করুন</button>
          </div>
        </div>
        <!-- exam details -->
        <div class="set_height bg-[#F3F4FA] mt-3 px-[20px]">
          <div>
            <div v-if="!isSubmit" class="pb-6">
              <LazyMcqsExamPerformExam :question="exam" :isOpen="isOpen" @closeModal="closeModal($event)"
                @submit-answer="submitAnswer($event)" />
            </div>
            <div v-else>
              <ExamAnalysis :question="exam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ExamAnalysis from '~~/src/components/mcqs/exam/ExamAnalysis.vue';


// mcqs get from api start

const isLoading = ref(false);
const exam = ref([]);

const init = async () => {
  isLoading.value = true;
  const { data, pending, error } = await useFetch('https://api.e-testpaper.com/api/exams/1/question?fbclid=IwAR3kZUC4OuSMUItvK2sq-ci74xmOxSUcapgJ3ub7FnDvmuHZ4WREXVOLjUA')
  if (error && error._value) {
    console.log(error);
  } else {
    console.log(data.value);
    exam.value = data.value.questions
  }
  isLoading.value = false;
}
init();


// mcqs get from api end

const isSubmit = ref(false);
const isOpen = ref(false);
const submitAnswer = (evn) => {
  isSubmit.value = evn
}

const isSubmitAnswer = () => {
  isOpen.value = true
}
const closeModal = (ev) => {
  isOpen.value = false
}
</script>
<style scoped>
.set_height {
  height: 100%;
}

.border_left {
  background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
  width: 4px;
  height: 10px;
}

.btn-submit {
  background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
}
</style>