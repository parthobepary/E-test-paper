<template>
    <div class="px-2">
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Exam Type</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.exam_type }}</p>
        </div>
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Exam Mode</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.exam_mode }}</p>
        </div>
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Exam Duration</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.exam_duration }} min</p>
        </div>
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Per Question Mark</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.per_question_mark }}</p>
        </div>
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Negative Mark</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.negative_mark }}</p>
        </div>
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Exam Starts At</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.exam_start_time }}</p>
        </div>
        <div class="flex justify-between items-center text-[14px] border-2">
            <p class="w-[50%] border-r-4 pl-1">Exam Ends at</p>
            <p class="text-[#045D97] pl-2 text-left w-[50%]">{{ details.exam_end_time }}</p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    details: {
        type: Object,
        default: {}
    }
})
</script>

<style scoped></style>