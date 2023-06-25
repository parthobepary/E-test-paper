<template>
    <div class="bg-[#F3F4FA]">
        <div class="container mx-auto">
            <div v-if="isLoading">
                <div class="flex justify-center items-center h-screen w-full">
                    <p>Loading...</p>
                </div>
            </div>
            <div v-else>
                <div class="px-[20px] py-[15px]">
                    <div class="flex items-center pb-[24.5px]">
                        <div class="border_left rounded-md"></div>
                        <p class=" text-[16px] pl-2">Questions Review : </p>
                    </div>
                    <div v-if="results && results.length">
                        <div v-for="res, i in results" :key="i">
                            <p class="py-[10px]"><span class="text-[14px] font-[Poppins]">{{ i + 1 + "." }}</span> <span v-katex="res.question" class="text-[14px] font-[Poppins]"></span></p>
                            <div v-for="op, i in res.options" :key="i">
                                <div :class="op == res.answer ? 'bg-[#E0FFE7]' : res.userAnswer == op ? 'bg-[#FFE8E3]' : 'bg-white'"
                                    class="flex justify-between items-center mb-3 py-1 rounded-md px-2">
                                    <p class="text-[14px] font-[Poppins]">{{ getDigit(i) }} <span class="text-[14px] font-[Poppins]" v-katex="op"></span></p>
                                    <p>
                                        <icon size="24"
                                            :color="op == res.answer ? '#31CB18' : res.userAnswer == op ? 'red' : ''"
                                            :name="op == res.answer ? res.userAnswer == op ? 'heroicons-solid:check-circle' : '' : res.userAnswer == op ? 'ic:baseline-cancel' : ''" />
                                    </p>
                                </div>
                                <div v-if="res.explain">
                                    <div>
                                        <div class="explain">
                                            <p><span style="color: #045689;">Explanation : </span><span
                                                    v-katex="removeP(getExplain(id._id).explain)"></span></p>
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
const route = useRoute();
const id = route.params.id;
const accessToken = route.query.token;


const isLoading = ref(false);
const results = ref([]);



const init = async () => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch(`https://api.e-testpaper.com/api/exams/submission/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    if (error && error._value) {
        console.log(error);
    } else {
        results.value = data.value?.questions
    }
    isLoading.value = false;
}
init();


const getDigit = (i) => {
    if (i == 0) return 'a . ';
    else if (i == 1) return 'b . ';
    else if (i == 2) return 'c . ';
    else return 'd . '
};
</script>

<style scoped>
.border_left {
    background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
    width: 4px;
    height: 10px;
}

.explain {
    background: rgba(247, 148, 29, 0.2);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 7px;
}
</style>



<!-- token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYwOTI1NjRhZDZjYzdkM2I2NGUwYjkiLCJncm91cCI6InNjaWVuY2UiLCJpYXQiOjE2ODY4Mzc4NjcsImV4cCI6MTcxODM5NTQ2N30.SNWNotgY4MxnnoCMgXin-uHd-6F5GdIKeGVjevS2rPE -->