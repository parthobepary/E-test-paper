<template>
    <div class="container px-3 mt-4">
       <div class="">
        <div v-for="(mcq, i) in items" :key="i">
            <div class="my-2 rounded-2xl w-full bg-white">
                <div @click="openSutter(i)" class="flex justify-between items-center cursor-pointer px-4 pb-3 pt-4 transition-all">
                    <p class="text-[14px]"> {{ i + 1 }} . {{ mcq.mcq }}</p>
                    <p class="text-[14px] transition-all">
                        <Icon color="#0072BB" :name="targetClick == i ? 'ion:ios-arrow-up' : 'ion:chevron-down'"></Icon>
                    </p>
                </div>
                <div v-if="isOpen && targetClick === i" class="px-2 pb-3">
                    <template v-if="mcq.options && mcq.options.length">
                        <div :class="showDesBtn ? 'hidden' : 'block'" v-for="option, ind in mcq.options">
                            <button @click="submitAnswer(getDigit(ind), mcq.ans)" class="bg-[#F3F4FA] w-full px-3 text-[16px] rounded-lg mb-2 flex justify-between">
                                <p><small>{{ getDigit(ind) }} <span>{{ option }}</span></small></p>
                                <p v-if="option == mcq.ans"><Icon color="blue" name="heroicons-solid:check-circle"/></p>
                            </button>
                        </div>
                        <div :class="!showDesBtn ? 'hidden' : 'block'" v-for="option, ind in mcq.options">
                            <button @click="submitAnswer()" :class="getDigit(ind).split(' ')[0] == mcq.ans ? 'bg-[#DDF5FF] border': 'bg-[#F3F4FA]'" class="bg-[#F3F4FA] w-full px-3 text-[16px] rounded-lg mb-2 flex justify-between">
                                <p><small>{{ getDigit(ind) }} <span>{{ option }}</span></small></p>
                                <p v-if="getDigit(ind).split(' ')[0] == mcq.ans"><Icon color="blue" name="heroicons-solid:check-circle"/></p>
                            </button>
                        </div>
                    </template>
                    <template v-if="mcq?.description && mcq.description.length && showDesBtn">
                        <div class="flex justify-center py-3">
                            <button @click="showExplain" class="text-[15px] px-4 btn_border rounded-2xl text-[#81AAC4]">See Explanation</button>
                        </div>
                        <div v-if="isShowExplain"  class="bg-[#FDEAD2] px-3 rounded-md py-3">
                            <p><small class="text-[14px] leading-tight"><span class="text-[#5287A5]">Explanation : </span>{{ mcq.description }}</small></p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
       </div>
    </div>              
</template>
  
<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: []
    }
});
const isCorrect = ref(false)
const isShowExplain = ref(false);
const isOpen = ref(false);
const showDesBtn = ref(false);
const targetClick = ref(-1);
const openSutter = (i) => {
    if (i === targetClick.value) {
        targetClick.value = -1;
        isOpen.value = !isOpen.value;
        showDesBtn.value = false;
    }
    else {
        targetClick.value = i;
        isOpen.value = true;
        showDesBtn.value = false;
    }
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
const submitAnswer = () => {
    showDesBtn.value = true
}

</script>
<style>
.border{
    border: 1px solid blue;
}
.btn_border{
    border: 1px solid #81AAC4;
}
</style>
  
  <!-- https://icones.js.org/ -->