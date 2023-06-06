<template>
    <div class="bg-gray-200">
        <p class="text-center py-2">Board exam</p>
        <div class="container px-3">
            <div v-for="(mcqs, i) in items" :key="i">
                <div class="mb-2 rounded-md w-full bg-white">
                    <div @click="openSutter(i)"
                        class="flex justify-between items-center cursor-pointer px-4 py-[4px] transition-all">
                        <p class="text-[16px]">{{ i + 1 + '.' }} <span v-katex="removeP(mcqs.question)" class="latex">
                            </span></p>
                        <p class="text-[16px] transition-all">
                            <Icon color="#0462A1" :name="targetClick == i ? 'ion:ios-arrow-up' : 'ion:chevron-down'"></Icon>
                        </p>
                    </div>
                    <div v-if="isOpen && targetClick === i" class="px-2 pb-3">
                        <template v-if="mcqs.options && mcqs.options.length">
                            <div v-if="!showCorrectAns" v-for="option, ind in mcqs.options">
                                <!-- {{ option }} -->
                                <button @click="submitAnswer(option)"
                                    class="bg-[#F3F4FA] w-full px-3 text-[16px] rounded-md mb-2 flex justify-between">
                                    <p><small>{{ getDigit(ind) }} <span v-katex="option"></span></small></p>
                                </button>
                            </div>
                            <div v-if="showCorrectAns" v-for="option, ind in mcqs.options">
                                <button
                                    :class="mcqs.answer == option ? 'bg-[#DDF5FF] border-2 border-[#008FCA]' : userAnswer == option ? 'bg-red-200' : 'bg-[#F3F4FA]'"
                                    class="w-full px-3 text-[16px] rounded-md mb-2 flex justify-between">
                                    <p><small>{{ getDigit(ind) }}<span v-katex="option"></span></small></p>
                                    <p v-if="mcqs.answer == option">
                                        <Icon size="25" color="#31CB18" name="heroicons-solid:check-circle" />
                                    </p>
                                    <p v-if="userAnswer == option && mcqs.answer != option">
                                        <Icon size="25" color="red" name="ic:baseline-cancel" />
                                    </p>
                                </button>
                            </div>
                        </template>
                        <div v-if="mcqs.explain && mcqs.explain.length">
                            <div v-if="!isShowExplain" class="flex justify-center py-3">
                                <button @click="showExplain"
                                    class="text-[15px] px-4 btn_border rounded-xl text-[#045689]">See
                                    Explanation</button>
                            </div>
                            <div v-if="isShowExplain" class="bg-[#FDEAD2] px-3 rounded-md py-3">
                                <p><small class="text-[14px] leading-tight"><span class="text-[#5287A5]">Explanation : <span
                                                v:katex="mcqs.explain"></span></span></small></p>
                            </div>
                            <div v-if="isShowExplain" class="flex justify-center py-3">
                                <button @click="hideExplain"
                                    class="text-[15px] px-4 btn_border rounded-xl text-[#045689]">Hide
                                    Explanation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const items = ref([])


const isActive = ref(true);


const route = useRoute();
const subject_id = route?.query.subject_id;
const type = route?.query.type;
const fbcl_id = route?.query.fbclid;
const year = route?.params.year;
const id = route?.params.id;
const question = route?.params.question;
console.log(route);



const showCorrectAns = ref(false)
const userAnswer = ref('')
const isShowExplain = ref(false);
const isOpen = ref(false);
const showDesBtn = ref(false);
const targetClick = ref(-1);
const openSutter = (i) => {
    if (i === targetClick.value) {
        targetClick.value = -1;
        isOpen.value = !isOpen.value;
        showDesBtn.value = false;
        showCorrectAns.value = false
        userAnswer.value = ''
    }
    else {
        targetClick.value = i;
        isOpen.value = true;
        showCorrectAns.value = false
        showDesBtn.value = false;
        userAnswer.value = ''
    }
};

const removeP = (item) => {
    let pera = item.replace('p', 'span');
    return pera;
}
const hideExplain = () => {
    isShowExplain.value = !isShowExplain.value;
};

const getDigit = (i) => {
    if (i == 0) return 'a . ';
    else if (i == 1) return 'b . ';
    else if (i == 2) return 'c . ';
    else return 'd . '
};
const showExplain = () => {
    isShowExplain.value = !isShowExplain.value;
};
const submitAnswer = (option) => {
    showCorrectAns.value = true
    userAnswer.value = option;
}

//https://api.e-testpaper.com/api/boards/5/question/2019/?subject_id=6472f5568fc601e99af005b5&type=mcq&fbclid=IwAR0-VcH21kfeXRXbPDPCdQiiaquoMoOb2gYymxy-mAEJMyBlwfljzx1-1tM

const isLoading = ref(false);

const init = async () => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch(`https://api.e-testpaper.com/api/boards/${id}/${question}/${year}/?subject_id=${subject_id}&type=${type}&fbclid=${fbcl_id}`)
    if (error && error._value) {
        console.log(error);
    } else {
        // console.log(data.value);
        items.value = data.value.questions
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
}</style>