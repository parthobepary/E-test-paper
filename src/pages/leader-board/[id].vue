<template>
  <div class="bg-[#F3F4FA] pt-6">
    <div class="container mx-auto px-2 flex justify-center">
      <div v-if="isLoading">
        <div class="flex justify-center items-center h-screen w-full">
          <p>Loading...</p>
        </div>
      </div>
      <div v-else class="w-full md:w-[60%] px-[20px]">
        <!-- first 3 -->
        <div v-if="fakeRank && fakeRank.length">
          <div class="flex justify-center items-end gap-x-2 h-[190px] w-full">
            <div class="overflow-hidden h-[170px] bg-white w-full rounded-lg shadow-md flex flex-col items-center">
              <img class="h-16 w-16 mt-3" src="/images/rank/3.gif" alt="">
              <div class="py-2 text-center">
                <p class="text-[12px]">{{ rankings[0]?.user.name }}</p>
                <p class="text-[10px]">{{ rankings[0]?.user.institute }}</p>
                <p class="text-[12px]">Score : {{ rankings[0]?.score }}</p>
              </div>
            </div>
            <div class="overflow-hidden h-[190px] bg-white w-full rounded-lg shadow-md flex flex-col items-center">
              <img class="h-16 w-16 mt-3" src="/images/rank/3.gif" alt="">
              <div class="py-2 text-center">
                <p class="text-[12px]">{{ rankings[1]?.user.name }}</p>
                <p class="text-[10px]">{{ rankings[1]?.user.institute }}</p>
                <p class="text-[12px]">Score : {{ rankings[1]?.score }}</p>
              </div>
            </div>
            <div class="overflow-hidden h-[170px] bg-white w-full rounded-lg shadow-md flex flex-col items-center">
              <img class="h-16 w-16 mt-3" src="/images/rank/3.gif" alt="">
              <div class="py-2 text-center">
                <p class="text-[12px]">{{ rankings[2]?.user.name }}</p>
                <p class="text-[10px]">{{ rankings[2]?.user.institute }}</p>
                <p class="text-[12px]">Score : {{ rankings[2]?.score }}</p>
              </div>
            </div>
          </div>
          <!-- all rankin -->
          <div v-if="rankings && rankings.length >= 3" class="bg-[#F6F8FC] rounded-md">
            <div v-for="(rank, i) in rankings.slice(3)" :key="i">
              <div
                :class="rank?.user?.user_id == userScore?.user?._id ? 'border-2 border-blue-500 bg-[#E9F8FF] py-2' : 'bg-white py-2'"
                class="rounded-md my-2 justify-between flex items-center px-2">
                <div class="flex w-[100%] items-center">
                  <div
                    class="w-10 mr-4 h-10 bg-[#E4EFFF] text-[#045C96] text-[14px] flex justify-center items-center rounded-lg">
                    {{ i + 4 }}
                  </div>
                  <div class="w-[50%] text-left">
                    <p class="text-[14px] leading-none">{{ rank?.user?.name }}</p>
                    <p class="text-[12px] text-gray-600 first-line:leading-none pt-2">{{ rank?.user?.institute }}</p>
                  </div>
                </div>
                <div class=" my-[-5px] flex-end">
                  <div class="">
                    <p class="text-[14px]">Score</p>
                    <p class="text-center text-[14px]"> {{ rank.score }} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div v-if="userScore && Object.keys(userScore).length" class="fixed bottom-6 w-[86%]">
              <div class="bg-[#E4EFFF] w-[100%] rounded-md px-3 py-2">
                <div class="flex justify-between items-center">
                  <div>
                    <p class="text-[16px]">{{ userScore?.user.name }}</p>
                    <p class="text-[14px]">{{ userScore?.user.institute }}</p>
                  </div>
                  <div>
                    <div class="text-[14px] flex flex-col items-center">
                      <p>Score</p>
                      <p>{{ userScore?.score }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const fakeRank = [
  {
    name: "Dummy student 1",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
  },
  {
    name: "Dummy student 2",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
  },
  {
    name: "Dummy student 3",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
  },
  {
    name: "Dummy student 4",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
    user: {
      user_id: 1
    }
  },
  {
    name: "Dummy student 5",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
  },
  {
    name: "Dummy student 6",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
  },
  {
    name: "Dummy student 7",
    roll: "A23eerAS",
    institution: "Nextive solution",
    duration: "12:20",
    total_mark: "120",
    marks: "50",
  },
];


onMounted(() => {
  setTimeout(() => {
    init();
  }, 100);
});


const isLoading = ref(false);
const rankings = ref([]);
const userScore = ref({});
const route = useRoute();
const accessToken = route.query.token;
const id = route.params.id;


const init = async () => {
  isLoading.value = true;
  const { data, pending, error } = await useFetch(`https://api.e-testpaper.com/api/exams/leaderboard/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  if (error && error._value) {
    console.log(error);
  } else {
    rankings.value = data.value.rankings;
    userScore.value = data.value.userScore;
  }
  isLoading.value = false;
}

</script>

<style lang="scss" scoped></style>
