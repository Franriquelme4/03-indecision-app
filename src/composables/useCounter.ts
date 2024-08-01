import { ref, computed } from 'vue'

export const useCounter = (dataInit: number) => {
    const counter = ref(dataInit)
    const squareCounter = computed(() => counter.value * counter.value)

    return { counter, squareCounter }

}