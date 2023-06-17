<template>
  <div class="container mx-auto">
    <div v-if="isLoading" class="flex justify-center items-center h-screen w-full">
      <p class="text-center">Loading...</p>
    </div>
    <div v-else>
      <div class="">
        <!-- exam header -->
        <!-- timer -->
        <div class="fixed w-full top-0">
          <div v-if="!isSubmit" class="flex justify-between items-center px-[20px] py-3 bg-white w-full">
            <div class="flex items-center pt-6">
              <div class="border_left"></div>
              <p class=" text-[14px] pl-2">Remaining Time</p>
            </div>
            <div class="flex justify-between items-center pt-6">
              <!-- timer -->
              <div v-show="!isSubmit" class="flex gap-3 items-center">
                <p class="text-[20px] hidden md:block">Remaining time</p>
                <div class="rounded-xl border-2 px-2 py-1" :class="warning()">
                  <span id="countdown" style="font-weight: bold; font-size: 14px; color: white;"></span>
                </div>
              </div>
              <button @click="isSubmitAnswer" class="ml-2 text-[14px] px-2 py-2 rounded-md btn-submit text-white">সাবমিট
                করুন</button>
            </div>
          </div>
        </div>
        <!-- exam details -->
        <div class="set_height bg-[#F3F4FA] pt-12 px-[20px]">
          <div>
            <div v-if="!isSubmit" class="pb-6">
              <LazyMcqsExamPerformExam :exam="exam" :access-token="accessToken" :question="question" :isOpen="isOpen"
                @closeModal="closeModal($event)" @submit-answer="submitAnswer($event)" />
            </div>
            <div v-else>
              <ExamAnalysis />
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
const question = ref([]);
const duration = ref(null);
let timeInSecs = ref(0);
let timeTaken = ref(0);
let ticker = null;
const isSubmit = ref(false);
const isOpen = ref(false);
const route = useRoute();
const accessToken = route.query.token;
const id = route.params.id;


const init = async () => {
  isLoading.value = true;
  const { data, pending, error } = await useFetch(`https://api.e-testpaper.com/api/exams/${id}/question`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  if (error && error._value) {
    console.log(error);
  } else {
    question.value = data.value.questions;
    exam.value = data.value.exam;
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
  if (!isSubmit.value) {
    document.getElementById("countdown").innerHTML = pretty;
  }
}

onUnmounted(() => {
  clearInterval(ticker);
});

watch(timeInSecs, (newValue) => {
  if (newValue === 0) {
    submitAnswer()
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
// mcqs get from api end https://api.e-testpaper.com/api/exams/submission

const submitAnswer = async (payload) => {
  isSubmit.value = true;
  isLoading.value = true;
  await $fetch(`https://api.e-testpaper.com/api/exams/submission`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    method: "POST",
    body: payload,
  })
    .then((response) => {
      alert('success')
    })
    .catch((error) => {
      throw error;
    });
  isLoading.value = false;

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