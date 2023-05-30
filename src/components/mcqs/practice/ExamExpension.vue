<template>
    <div class="container px-3 mt-4">
       <div class="">
        <div v-for="(mcq, i) in items" :key="i">
            <div class="my-2 rounded-2xl w-full bg-white">
                <div @click="openSutter(i)" class="flex justify-between items-center cursor-pointer px-4 pb-3 pt-4">
                    <p class="text-[14px]"> {{ i + 1 }} . {{ mcq.mcq }}</p>
                    <p class="text-[14px]">
                        <Icon color="#0072BB" :name="targetClick == i ? 'ion:ios-arrow-up' : 'ion:chevron-down'"></Icon>
                    </p>
                </div>
                <div v-if="isOpen && targetClick === i" class="px-2 pb-3">
                    <template v-if="mcq.options && mcq.options.length">
                        <div v-for="option, ind in mcq.options">
                            <div :class="getDigit(ind).split(' ')[0] == mcq.ans ? 'bg-[#DDF5FF] border': 'bg-[#F3F4FA]'" class="px-3 text-[16px] rounded-lg mb-2 flex justify-between">
                                <p><small>{{ getDigit(ind) }} <span>{{ option }}</span></small></p>
                                <p v-if="getDigit(ind).split(' ')[0] == mcq.ans"><Icon color="blue" name="heroicons-solid:check-circle"/></p>
                            </div>
                        </div>
                    </template>
                    <template v-if="mcq?.description && mcq.description.length">
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
const isShowExplain = ref(false);
const isOpen = ref(false);
const targetClick = ref(-1);
const openSutter = (i) => {
    if (i === targetClick.value) {
        targetClick.value = -1;
        isOpen.value = !isOpen.value;
    }
    else {
        targetClick.value = i;
        isOpen.value = true;
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