<template>
  <div class="pt-[120px]">
    <div class="container mx-auto px-2 flex justify-center">
      <div v-if="isLoading">
        <CommonShareLoader />
      </div>
      <div v-else class="w-full md:w-[60%]">
        <!-- first 3 -->
        <div v-if="fakeRank && fakeRank.length">
          <!-- rank card -->
          <div class="grid grid-cols-6 gap-4">
            <!-- second -->
            <div v-if="fakeRank && fakeRank[1]"
              class="order-2 md:order-1 rounded-md col-span-3 md:col-span-2 bg-[#F6F8FC] md:bg-white p-4 flex justify-center"
            >
              <CommonCardsRankingCard image="2" :rank="fakeRank[1]" />
            </div>
            <!-- first -->
            <div v-if="fakeRank && fakeRank[0]"
              class="order-1 md:order-2 rounded-md col-span-6 md:col-span-2 bg-[#F6F8FC] md:bg-white p-4 py-6 md:py-1 flex justify-center"
            >
              <!-- <CommonCardsRankinCard position="first" image="1" :rank="fakeRank[0]" /> -->
              <CommonCardsRankingCard image="1" :rank="fakeRank[0]" />
            </div>
            <!-- third -->
            <div v-if="fakeRank && fakeRank[2]"
              class="order-3 md:order-3 rounded-md col-span-3 md:col-span-2 bg-[#F6F8FC] md:bg-white p-4 flex justify-center"
            >
              <!-- <CommonCardsRankinCard image="3" :rank="fakeRank[2]" /> -->
              <CommonCardsRankingCard image="3" :rank="fakeRank[2]" />
            </div>
          </div>
          <!-- all rankin -->
          <div v-if="fakeRank && fakeRank.length >=3" class="bg-[#F6F8FC] my-4 rounded-md p-4">
            <div v-for="(rank, i) in fakeRank.slice(3)" :key="i">
              <div
                :class="user?.id == rank.user_id ? 'bg-sky-200' : 'bg-white'"
                class="rounded-md my-2 p-2 flex justify-between items-center px-2 md:px-8"
              >
                <div
                  class="w-10 h-10 bg-slate-400 text-white text-[14px] flex justify-center items-center rounded-lg"
                >
                  {{ i + 4 }}
                </div>
                <div>
                  <p class="text-[14px]">{{ rank.name }}</p>
                  <p class="text-[14px]">{{ rank.institution }}</p>
                </div>
                <div>
                  <p class="text-center text-[14px]">
                    <Icon
                      color="red"
                      name="streamline:interface-lighting-light-bulb-lighting-light-incandescent-bulb-lights"
                    />
                  </p>
                  <p class="text-[14px]">{{ rank.duration }} sec</p>
                </div>
                <div>
                  <p class="text-center text-[14px]">
                    <Icon
                      color="blue"
                      name="streamline:interface-time-clock-circle-clock-loading-measure-time-circle"
                    />
                  </p>
                  <p class="text-[14px]">{{ rank.marks }}</p>
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
