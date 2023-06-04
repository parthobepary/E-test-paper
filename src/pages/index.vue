<template>
    <div class="container mx-auto text-center my-4">
        <div class="mt-4">
            <h1 class="mb-4">This is Home page</h1>
            <div v-for="ih, i in latex" :key="i">
                <p>This is test</p>
                <div v-katex="ih" class="latex"></div>
            </div>
            <!-- {{ mcqs } -->
        </div>
    </div>
</template>
<script setup>


const latex = [
    "hello anik",
    "akkk",
    "î + ĵ) $ \\hat k $"
]







const isLoading = ref(false);
const mcqs = ref([]);

const init = async () => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch('https://api.e-testpaper.com/api/boards/5/question/2019/?subject_id=6472f5568fc601e99af005b5&type=mcq&fbclid=IwAR2fK4_9_VbnIxRpIRUDb3c9_aTkj1mjGXlxkeUO6MoFaOqmotx2vgE9YbQ')
    if (error && error._value) {
        console.log(error);
    } else {
        // console.log(data.value);
        mcqs.value = data.value.questions
    }
    isLoading.value = false;
}
init()
</script>
