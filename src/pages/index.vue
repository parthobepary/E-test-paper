<template>
    <div class="container mx-auto text-center my-4">
        <div class="mt-4">
            <h1 class="mb-4">This is Home page</h1>
            <div v-for="ih, i in latex" :key="i">
                <p>This is test</p>
                <!-- <div v-katex="ih" class="latex"></div> -->
            </div>
            <div>
                <div v-if="isLoading">
                    <p>Loading .....</p>
                </div>
                <div v-else>
                    <div v-for="mcq,i in mcqs">
                        <!-- {{ mcq.question }} -->
                        <!-- <div v-katex:auto v-html="mcq.question" class="latex"></div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


const isLoading = ref(false);
const mcqs = ref([]);

const init = async () => {
    isLoading.value = true;
    const { data, pending, error } = await useFetch('https://api.e-testpaper.com/api/mcq?topic=64798aa4330fd9518a1783df&fbclid=IwAR3s43hdmzd3ByT7Y59ZHeQXBI')
    if (error && error._value) {
        console.log(error);
    } else {
        // console.log(data.value);
        mcqs.value = data.value.mcqs
    }
    isLoading.value = false;
}
// init()
</script>
