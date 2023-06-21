<script lang="ts" setup>
import type { TimeResponse } from '../../../../types/response.types'

import { defineProps } from 'vue';
import { ref } from "vue";

import { createRequire } from 'module';
import * as dateFns from 'date-fns';
const props:any = defineProps(["attendance"]);

const workHours = ref(props.hoursWorkedAm);

const formatDate = (date) => {
  if (!date) {
    return "No Time"
  }
  return dateFns.format(new Date(date), 'p')
}
</script>
<template>
  <tr>
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
      {{ props.attendance.user.lastName }}
      {{ props.attendance.user.firstName }}
      {{ props.attendance.user.middleName || 'null' }}.
    </th>
    <td class="px-6 py-4">
      {{ props.attendance.user.workDepartment || 'null' }} |
    </td>
    <td class="px-0 py-4">
      {{  dateFns.format(new Date(props.attendance.date), 'PP') || 'null' }}
    </td>
    <td class="px-3 py-4">
      {{ formatDate(props.attendance.timeInAm) || 'null' }}
    </td>
    <td class="px-3 py-4">
      {{ formatDate(props.attendance.timeOutAm) || 'null' }}
    </td>
    <td class="px-3 py-4">
      {{ formatDate(props.attendance.timeInPm) || 'null' }}
    </td>
    <td class="px-3 py-4">
      {{ formatDate(props.attendance.timeOutPm) || 'null' }}
    </td>
    <td class="px-6 py-4">
      <span v-if="false">{{ props.attendance.hoursWorkedAm || 'null' }}</span>
      <span v-else>No Data</span>
    </td>
    <td class="px-6 py-4">
      <span v-if="false">{{ props.attendance.hoursWorkedPm || 'null' }}</span>
      <span v-else>No Data</span>
    </td>
    <!-- <td class="px-6 py-4">
      <p
        v-if=""
        class="mx-0.5 font-bold inline bg-blue-500 w-10 text-white p-2 rounded-lg text-center"
      >
        ⌛ No Out
      </p>
      <p
        v-if="props.attendance.remark === 'OnTime'"
        class="mx-0.5 font-bold inline bg-emerald-600 w-10 text-white p-2 rounded-lg text-center"
      >
        🕒 On Time
      </p>
      <p
        v-if="props.attendance.remark === 'Late'"
        class="mx-0.5 font-bold inline bg-orange-500 w-10 text-white p-2 rounded-lg text-center"
      >
        ⏰ Late
      </p>
      <p
        v-if="props.attendance.remark === 'Absent'"
        class="mx-0.5 font-bold inline bg-red-500 w-10 text-white p-2 rounded-lg text-center"
      >
        😔 Absent
      </p> -->
      <!-- <p
        v-if="false"
        class="mx-0.5 inline bg-slate-500 w-10 text-white p-1.5 rounded-lg text-center"
      >
        Early Out
      </p>
    </td> -->
  </tr>
</template>
