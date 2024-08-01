import { sleep } from "@/helpers/sleep"
import type { ChatMessage } from "@/interfaces/chatMessage.interface"
import type { YesNoResponse } from "@/interfaces/yesNoResponse.interface"
import { ref } from "vue"

export const useChat = () => {
    const messages = ref<ChatMessage[]>([])

    const getHerResponse = async () => {
        const response = await fetch("https://yesno.wtf/api")
        const data = await response.json() as YesNoResponse
        return data;
    }


    const onMessage = async (text: string) => {
        if (text.length == 0) return;
        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: text
        })
        //Si el texto termina con un signo de interrogación, el bot responderá
        if (!text.endsWith("?")) return;

        await sleep(1)

        const { answer, image } = await getHerResponse()
        messages.value.push({
            id: new Date().getTime(),
            itsMine: false,
            message: answer,
            imageURL: image
        })

    }

    return {
        messages,
        onMessage
    };
}