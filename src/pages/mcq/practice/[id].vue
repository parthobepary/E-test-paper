<template>
    <div class="container mx-auto">
        <div>
            <!-- tab option -->
            <div class="bg-white py-3">
                <div class="flex justify-between tab_bg px-1 rounded-md mx-2 py-1">
                    <div :class="isActive ? 'active' : ''" class="w-[50%] flex flex-col items-center rounded-sm pb-1">
                        <button @click="active" class="text-[14px]">জ্ঞান ও অনুধাবন</button>
                        <div :class="isActive ? 'block' : 'hidden'" class="w-12 h-1 rounded-lg bg-[#2E3192]"></div>
                    </div>
                    <div :class="!isActive ? 'active' : ''" class="w-[50%] flex flex-col items-center rounded-sm pb-1">
                        <button @click="inActive" class="text-[14px]">প্রয়োগ ও উচ্চতর দক্ষতা</button>
                        <div :class="!isActive ? 'block' : 'hidden'" class="w-12 h-1 rounded-lg bg-[#2E3192]"></div>
                    </div>
                </div>
            </div>
            <!-- mcq -->
            <div class="bg-[#F3F4FA] py-2">
                <template v-if="exam && exam.mcqs && exam.mcqs.length">
                    <div v-if="isActive">
                        <LazyMcqsPracticeExamExpension :items="exam.mcqs" />
                    </div>
                    <div v-else>
                        <LazyMcqsPracticeOpenExam :items="exam.mcqs" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script setup>
const exam = ref({
    name: 'MCQ Practice',
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
const isActive = ref(true)

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