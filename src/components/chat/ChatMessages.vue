<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <chatBubble v-for="msj in message" :key="msj.id" v-bind="msj" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBubble from './ChatBubble.vue'
import { ChatMessage } from '../../interfaces/chatMessage.interface'
import { ref, watch } from 'vue'

interface Props {
  message: ChatMessage[]
}
const { message } = defineProps<Props>()

const chatRef = ref<HTMLDivElement | null>(null)

watch(message, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    })
  }, 100)
})
</script>
