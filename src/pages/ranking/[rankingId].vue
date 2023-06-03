<template>
  <div class="pt-2">
    <div class="container mx-auto px-2 flex justify-center">
      <div v-if="isLoading">
        <CommonShareLoader />
      </div>
      <div v-else class="w-full md:w-[60%]">
        <!-- first 3 -->
        <div v-if="fakeRank && fakeRank.length">
          <!-- rank card -->
          <div class="flex">
            <div>
              <img src="../../public/images/rank/2r.png" alt="">
            </div>
            <div>
              <img src="../../public/images/rank/1r.png" alt="">
            </div>
            <div>
              <img src="../../public/images/rank/3r.png" alt="">
            </div>
          </div>
          <!-- all rankin -->
          <div v-if="fakeRank && fakeRank.length >= 3" class="bg-[#F6F8FC] my-4 rounded-md">
            <div v-for="(rank, i) in fakeRank.slice(3)" :key="i">
              <div :class="rank?.user?.user_id == 1 ? 'border-2 border-blue-500' : 'bg-white'"
                class="rounded-md my-2 flex justify-between items-center px-2">
                <div class="w-10 h-10 bg-[#E4EFFF] text-[#045C96] text-[14px] flex justify-center items-center rounded-lg">
                  {{ i + 4 }}
                </div>
                <div class="w-[50%] text-left">
                  <p class="text-[14px] leading-none">{{ rank.name }}</p>
                  <p class="text-[14px] first-line:leading-none pt-2">{{ rank.institution }}</p>
                </div>
                <div>
                  <div class="flex gap-2 py-0">
                    <p class="text-center text-[14px]">
                      <Icon color="red"
                        name="streamline:interface-lighting-light-bulb-lighting-light-incandescent-bulb-lights" />
                    </p>
                    <p class="text-[14px]">{{ rank.marks }}</p>
                  </div>
                  <div class="flex gap-2 py-0">
                    <p class="text-center text-[14px] py-0">
                      <Icon color="blue"
                        name="streamline:interface-time-clock-circle-clock-loading-measure-time-circle" />
                    </p>
                    <p class="text-[14px] py-0">{{ rank.duration }} sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div> 
            <button class="bg-[#045C96] text-white rounded-md mt-2 text-[16px] text-center w-full">Go back to chapter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


const route = useRoute();
const examId = route.params.fakeRankId;

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
    user:{
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

</script>

<style lang="scss" scoped></style>
