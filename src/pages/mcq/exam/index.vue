<template>
    <div class="container mx-auto">
        <div class="relative">
            <!-- exam header -->
            <div class="flex justify-center">
                <h2 class="pt-10 pb-6">{{ exam.name }}</h2>
            </div>
            <!-- exam details -->
            <div class="bg-[#F3F4FA] py-4 set_height">
                <McqsExamDetails :details="exam.details" />
                <div class="absolute bottom-0 pb-10 w-full text-center">
                    <button @click="startExam" class="mb-4 text-[16px] w-[80%] text-center btn-bg text-white px-8 py-1 rounded-lg">Participate Exam</button>
                    <McqsExamConfirmModal @close-modal="closeModal($event)" :is-open="isModal"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const exam = ref({
    name: 'MCQ exam',
    details: {
        exam_type: 'General Exam',
        exam_mode: 'Exam',
        exam_duration: '5',
        per_question_mark: '1.00',
        negative_mark: '0.00',
        exam_start_time: 'Nov 4, 2022 8:22 PM',
        exam_end_time: 'Nov 12, 2022 8:22 PM'
    },
    mcqs: [
        {
            mcq: 'What is the name of our country ?',
            options: ['India', 'Bangladesh', 'Pakistan', 'Uganda'],
            ans: 'a',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'b',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'b',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'c',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: 'https://cdn.entrance360.com/media/uploads/2019/07/23/download-3.png'
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'b',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: 'Pro devs'
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'a',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'b',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'd',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: 'https://cdn.entrance360.com/media/uploads/2019/07/23/download-3.png'
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'b',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'a',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'c',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'b',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        },
        {
            mcq: 'What is your name ?',
            options: ['Anik dash', 'Partho bepary', 'Pro devs'],
            ans: 'd',
            description: 're going to look back into that earliest time to see the first galaxies that formed in the history of the universe, explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe.',
            img: ''
        }
    ]
});
const isModal = ref(false)
const startExam = () => {
    isModal.value = true
};
const closeModal = () => {
    isModal.value = false
};
</script>
<style scoped>
.border_left {
    background-color: blue;
    width: 4px;
    height: 10px;
}

.btn-bg{
    background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
}
.set_height {
    height: calc(100vh - 100px);
}
</style>