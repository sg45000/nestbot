import { TextMessage } from '@line/bot-sdk';

export default function (text : string): TextMessage {
    return {
        "type": "text",
        "text": text
    }
}
