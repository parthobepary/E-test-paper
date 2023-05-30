<template>
    <div class="px-2">
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Exam Type</p>
            <p class="text-[#045D97]">{{ details.exam_type }}</p>
        </div>
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Exam Mode</p>
            <p class="text-[#045D97]">{{ details.exam_mode }}</p>
        </div>
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Exam Duration</p>
            <p class="text-[#045D97]">{{ details.exam_duration }} min</p>
        </div>
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Per Question Mark</p>
            <p class="text-[#045D97]">{{ details.per_question_mark }}</p>
        </div>
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Negative Mark</p>
            <p class="text-[#045D97]">{{ details.negative_mark }}</p>
        </div>
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Exam Starts At</p>
            <p class="text-[#045D97]">{{ details.exam_start_time }}</p>
        </div>
        <div class="flex justify-between items-center text-[18px] border-2 p-2">
            <p>Exam Ends at</p>
            <p class="text-[#045D97]">{{ details.exam_end_time }}</p>
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