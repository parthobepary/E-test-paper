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
            <p class=" text-[20px] pl-2">Remaining Time</p>
          </div>
          <div class="flex justify-between items-center pt-6">
            <!-- timer -->
            <div v-show="!isSubmit" class="flex gap-3 items-center">
              <p class="text-[20px] hidden md:block">Remaining time</p>
              <div class="rounded-xl border-2 px-5 py-1" :class="warning()">
                <span id="countdown" style="font-weight: bold; font-size: 14px; color: white;"></span>
              </div>
            </div>
            <button @click="isSubmitAnswer" class="ml-2 text-[12px] px-2 py-2 rounded-md btn-submit text-white">সাবমিট
              করুন</button>
          </div>
        </div>
        <!-- exam details -->
        <div class="set_height bg-[#F3F4FA] mt-3 px-[20px]">
          <div>
            <div v-if="!isSubmit" class="pb-6">
              <LazyMcqsExamPerformExam :access-token="accessToken" :question="exam" :isOpen="isOpen" @closeModal="closeModal($event)"
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
const duration = ref(null);
let timeInSecs = ref(0);
let timeTaken = ref(0);
let ticker = null;
const isSubmit = ref(false);
const isOpen = ref(false);
const route = useRoute();
const accessToken = route.query.token;


const init = async () => {
  isLoading.value = true;
  const { data, pending, error } = await useFetch('https://api.e-testpaper.com/api/exams/1/question?fbclid=IwAR3kZUC4OuSMUItvK2sq-ci74xmOxSUcapgJ3ub7FnDvmuHZ4WREXVOLjUA')
  if (error && error._value) {
    console.log(error);
  } else {
    exam.value = data.value.questions;
    duration.value = parseInt(data.value.exam.duration);
    startTimer(duration.value * 60);
  }
  isLoading.value = false;
}
init();


// timer


function startTimer(secs) {
  timeInSecs.value = parseInt(secs);
  ticker = setInterval(tick, 1000);
}

function tick() {
  let secs = timeInSecs.value;
  if (secs > 0) {
    timeInSecs.value--;
    timeTaken.value++;
  } else {
    clearInterval(ticker);
    // startTimer(5 * 60); // 4 minutes in seconds
  }

  let mins = Math.floor(secs / 60);
  secs %= 60;
  let pretty = `${(mins < 10) ? "0" : ""}${mins}:${(secs < 10) ? "0" : ""}${secs}`;

  document.getElementById("countdown").innerHTML = pretty;
}

onUnmounted(() => {
  clearInterval(ticker);
});

watch(timeInSecs, (newValue) => {
  if (newValue === 0) {
    console.log('tims up');
  }
});

const warning = () => {
  if (timeInSecs.value < 60) {
    return "border-red-500 bg-red-500";
  } else if (timeInSecs.value < 300) {
    return "border-yellow-500 bg-yellow-500";
  } else {
    return "border-green-500 bg-green-500";
  }
};
// mcqs get from api end

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