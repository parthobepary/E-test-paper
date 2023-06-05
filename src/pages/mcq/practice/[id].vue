<template>
    <div class="container mx-auto">
            <!-- tab option -->
            <div class="bg-white py-3">
                <div class="flex justify-between tab_bg px-1 rounded-md mx-2 py-1">
                    <div :class="isActive ? 'active' : ''" class="w-[40%] flex flex-col items-center rounded-sm pb-1">
                        <button @click="active" class="text-[16px]">জ্ঞান ও অনুধাবন</button>
                        <div :class="isActive ? 'block' : 'hidden'" class="w-12 h-1 rounded-lg bg-[#2E3192]"></div>
                    </div>
                    <div :class="!isActive ? 'active' : ''" class="w-[60%] flex flex-col items-center rounded-sm pb-1">
                        <button @click="inActive" class="text-[16px]">প্রয়োগ ও উচ্চতর দক্ষতা</button>
                        <div :class="!isActive ? 'block' : 'hidden'" class="w-12 h-1 rounded-lg bg-[#2E3192]"></div>
                    </div>
                </div>
            </div>
            <!-- mcq -->
            <div>
                <div v-if="isLoading" class="flex justify-center items-center h-screen">
                    <p>Loading....</p>
                </div>
                <div v-else class="bg-[#F3F4FA] py-2">
                    <template v-if="mcqs && mcqs.length">
                        <div v-if="isActive">
                            <LazyMcqsPracticeExamExpension :items="mcqs" />
                        </div>
                        <div v-else>
                            <LazyMcqsPracticeOpenExam :items="mcqs" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
</template>
<script setup>

const mcqs = ref([])


const isActive = ref(true);


const route = useRoute();
const topic_id = route?.query.topic;
const fbcl_id = route?.query.fbclid;

// console.log(topic_id, fbcl_id);

// 64798aa4330fd9518a1783df
//IwAR3s43hdmzd3ByT7Y59ZHeQXBICSFlfbtZDKgPIHwP8dKEl_Ek_TM3tkgo4



const isLoading = ref(false);

const init = async () => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch(`https://api.e-testpaper.com/api/mcq?topic=${topic_id}&fbclid=${fbcl_id}`)
    if (error && error._value) {
        console.log(error);
    } else {
        // console.log(data.value);
        mcqs.value = data.value.mcqs
    }
    isLoading.value = false;
}
init();

const inActive = () => {
    isActive.value = false
}
const active = () => {
    isActive.value = true
}
</script>
<style scoped>
.active {
    background-color: white;
    border-radius: 10px;
}

.border_left {
    background-color: blue;
    width: 4px;
    height: 10px;
}

.tab_bg {
    background: rgba(4, 86, 137, 0.2);
}
</style>