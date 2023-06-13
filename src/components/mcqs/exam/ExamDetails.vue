<template>
    <div class="px-[20px]">
        <table class="GeneratedTable">
            <tbody>
                <tr>
                    <td>Exam Type</td>
                    <td>{{ details.exam_type }}</td>
                </tr>
                <tr>
                    <td>Exam Mode</td>
                    <td>{{ details.exam_mode }}</td>
                </tr>
                <tr>
                    <td>Exam Duration</td>
                    <td>{{ details.exam_duration }}</td>
                </tr>
                <tr>
                    <td>Per Question Mark</td>
                    <td>{{ details.per_question_mark }}</td>
                </tr>
                <tr>
                    <td>Negative Mark</td>
                    <td>{{ details.negative_mark }}</td>
                </tr>
                <tr>
                    <td>Exam Starts At</td>
                    <td>{{ details.exam_start_time }}</td>
                </tr>
                <tr>
                    <td>Exam Ends At</td>
                    <td>{{ details.exam_end_time }}</td>
                </tr>
            </tbody>
        </table>
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

<style scoped>
table.GeneratedTable {
    width: 100%;
}

table.GeneratedTable td,
table.GeneratedTable th {
    border-width: 2px;
    border:1px solid #4b4b4b7a;
    padding: 10px;
}

table.GeneratedTable thead {
    background-color: #F3F4FA;
}
tr:nth-child(even) {
  background-color: white;
}
</style>