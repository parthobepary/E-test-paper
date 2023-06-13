<template>
    <div class="container mx-auto">
        <div class="">
            <!-- exam header -->
            <!-- timer -->
            <div v-if="!isSubmit" class="flex justify-between items-center px-[20px] py-3">
                <div class="flex items-center pt-6">
                    <div class="border_left"></div>
                    <p class=" text-[13px] pl-2">Remaining Time</p>
                </div>
                <div class="flex justify-between items-center pt-6">
                    <LazyMcqsExamTimer :validUntil="exam.details.valid_till" />
                    <button @click="isSubmitAnswer" class="ml-2 text-[12px] px-2 py-2 rounded-md btn-submit text-white">সাবমিট করুন</button>
                </div>
            </div>
            <!-- exam details -->
            <div class="set_height bg-[#F3F4FA] mt-3 px-[20px]">
                <div>
                    <div v-if="!isSubmit">
                        <LazyMcqsExamPerformExam :question="mcqs" :isOpen="isOpen" @closeModal="closeModal($event)" @submit-answer="submitAnswer($event)" />
                    </div>
                    <div v-else>
                        <ExamAnalysis :exam="data" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ExamAnalysis from '~~/src/components/mcqs/exam/ExamAnalysis.vue';


const data = {
  "title": 23434,
  "description": "<p>556565656</p>",
  "duration": 12,
  "total_marks": 12,
  "pass_marks": 6,
  "positive_marks": 1,
  "negative_marks": 0,
  "start_time": "2023-05-30T07:29:36.000000Z",
  "end_time": "2023-06-T07:30:00.000000Z",
  "result_publish_time": "2023-05-30T07:31:00.000000Z",
  "question": {
    "id": 21,
    "exam_id": 22,
    "body": {
      "max_sections": 1,
      "sections": [
        {
          "title": "default",
          "required": true,
          "questions": [
            {
              "id": 1,
              "question": "saw the baby ___.",
              "question_image": null,
              "a": "is weeping",
              "b": "wept",
              "c": "weeps",
              "d": "weeping",
              "e": null,
              "answer": "d",
              "answer_image": null,
              "explanation": "We're going to look back into that earliest time to see the first galaxies that formed in the history of the universe,explained Space Telescope Science Institute astronomer Dan Coe, who specializes in the early universe."
            },
            {
              "id": 2,
              "question": "I was tired that night. I ___ wood all; morning.",
              "question_image": null,
              "a": "was cutting",
              "b": "cut",
              "c": "had cut",
              "d": "had been cutting",
              "e": null,
              "answer": "a",
              "answer_image": null,
              "explanation": "a"
            },
            {
              "id": 3,
              "question": "Many goats are grazing and few sheep ___ sleeping in the field.",
              "question_image": null,
              "a": "is",
              "b": "are",
              "c": "has been",
              "d": "was",
              "e": null,
              "answer": "b",
              "answer_image": null,
              "explanation": "b"
            },
            {
              "id": 4,
              "question": "Did you use to ___ with dolls ?",
              "question_image": null,
              "a": "play",
              "b": "played",
              "c": "playing",
              "d": "be played",
              "e": null,
              "answer": "a",
              "answer_image": null,
              "explanation": "a"
            },
            {
              "id": 5,
              "question": "Many people ----- the explosion.",
              "question_image": null,
              "a": "died from",
              "b": "were killed",
              "c": "have been dead",
              "d": "were dead",
              "e": null,
              "answer": "a",
              "answer_image": null,
              "explanation": "a"
            },
            {
              "id": 6,
              "question": "Have you finished ___ that book yet?",
              "question_image": null,
              "a": "to read",
              "b": "reading",
              "c": "by reading",
              "d": "with reading",
              "e": null,
              "answer": "b",
              "answer_image": null,
              "explanation": null
            },
            {
              "id": 7,
              "question": "I gave up ___ football when he got married.",
              "question_image": null,
              "a": "to play",
              "b": "playing",
              "c": "play",
              "d": "of playing",
              "e": null,
              "answer": "b",
              "answer_image": null,
              "explanation": "b"
            },
            {
              "id": 8,
              "question": "when I ___ money, I will buy a book.",
              "question_image": null,
              "a": "may get",
              "b": "may be got",
              "c": "will get",
              "d": "get",
              "e": null,
              "answer": "d",
              "answer_image": null,
              "explanation": "d"
            }
          ]
        }
      ]
    },
    "created_at": "2023-05-30T07:31:06.000000Z",
    "updated_at": "2023-05-30T07:31:06.000000Z"
  },
  "result": {
    "marks": 4,
    "positive_marks": 4,
    "negative_marks": 0,
    "duration": 10,
    "submitted": true,
    "answers": [
      {
        "title": "default",
        "answers": [
          {
            "mcq_id": 1,
            "user_answer": "a"
          },
          {
            "mcq_id": 2,
            "user_answer": "a"
          },
          {
            "mcq_id": 3,
            "user_answer": "b"
          },
          {
            "mcq_id": 4,
            "user_answer": "c"
          },
          {
            "mcq_id": 5,
            "user_answer": "d"
          },
          {
            "mcq_id": 6,
            "user_answer": "d"
          },
          {
            "mcq_id": 7,
            "user_answer": "b"
          },
          {
            "mcq_id": 8,
            "user_answer": "d"
          }
        ]
      }
    ]
  }
}






const exam = ref({
    name: 'Exam name',
    details: {
        exam_type: 'General Exam',
        exam_mode: 'Exam',
        exam_duration: '5',
        valid_till: '2023-06-03 12-0100',// its have a valid date time format
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

// mcqs get from api start

const isLoading = ref(false);
const mcqs = ref([]);

const init = async() => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch('https://api.e-testpaper.com/api/boards/5/question/2019/?subject_id=6472f5568fc601e99af005b5&type=mcq&fbclid=IwAR2fK4_9_VbnIxRpIRUDb3c9_aTkj1mjGXlxkeUO6MoFaOqmotx2vgE9YbQ')
    if(error && error._value){
        console.log(error);
    }else{
        // console.log(data.value);
        mcqs.value = data.value.questions
    }
    isLoading.value = false;
}
init();


// mcqs get from api end

const isSubmit = ref(false);
const isOpen = ref(false);
const submitAnswer = (evn) => {
    isSubmit.value = evn
}

const isSubmitAnswer = () => {
  isOpen.value = true
}
const closeModal = (ev) => {
  isOpen.value = false
}
</script>
<style scoped>

.set_height {
    height: calc(100vh - 100px);
}

.border_left {
  background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
    width: 4px;
    height: 10px;
}

.btn-submit{
  background: linear-gradient(102.17deg, #045689 0.04%, #0381E0 100%);
}
</style>