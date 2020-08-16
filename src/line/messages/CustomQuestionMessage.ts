import * as Types from '@line/bot-sdk/dist/types';
import { FlexContainer, FlexMessage, TemplateMessage } from '@line/bot-sdk/dist/types';

export default function (title, imageUrl, choiceTexts, nextQuestionId): FlexMessage {
    return {
        "type": "flex",
        "altText": title,
        "contents": customFunc(title, imageUrl, choiceTexts,createPostbackData(choiceTexts, nextQuestionId))
    }
}

function customFunc(title, imageUrl, choiceTexts, postbackDatas): FlexContainer {
    return {
        "type": "bubble",
        "body": {
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "contents": [{
                "type": "text",
                "wrap": true,
                "text": title,
                "size": "md"
            },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [{
                        "type": "text",
                        "text": "1",
                        "flex": 1
                    },
                        {
                            "type": "text",
                            "text": choiceTexts[0],
                            "weight": "bold",
                            "flex": 6
                        }
                    ]
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [{
                        "type": "text",
                        "text": "2",
                        "flex": 1
                    },
                        {
                            "type": "text",
                            "text": choiceTexts[1],
                            "weight": "bold",
                            "flex": 6
                        }
                    ]
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [{
                        "type": "text",
                        "text": "3",
                        "flex": 1
                    },
                        {
                            "type": "text",
                            "text": choiceTexts[2],
                            "weight": "bold",
                            "flex": 6
                        }
                    ]
                },
                {
                    "type": "box",
                    "layout": "baseline",
                    "contents": [{
                        "type": "text",
                        "text": "4",
                        "flex": 1
                    },
                        {
                            "type": "text",
                            "text": choiceTexts[3],
                            "weight": "bold",
                            "flex": 6
                        }
                    ]
                }
            ]
        },
        "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [{
                "type": "button",
                "style": "primary",
                "color": "#30A9DE",
                "action": {
                    "type": "postback",
                    "data": postbackDatas[0],
                    "label": "1",
                    // "text": choiceTexts[0]
                }
            },
                {
                    "type": "button",
                    "style": "primary",
                    "color": "#EFDC05",
                    "action": {
                        "type": "postback",
                        "data": postbackDatas[1],
                        "label": "2",
                        // "text": choiceTexts[1]
                    }
                },
                {
                    "type": "button",
                    "style": "primary",
                    "color": "#E53A40",
                    "action": {
                        "type": "postback",
                        "data": postbackDatas[2],
                        "label": "3",
                        // "text": choiceTexts[2]
                    }
                },
                {
                    "type": "button",
                    "style": "primary",
                    "color": "#5CAB7D",
                    "action": {
                        "type": "postback",
                        "data": postbackDatas[3],
                        "label": "4",
                        // "text": choiceTexts[3]
                    }
                }
            ]
        }
    }
}

function createPostbackData(choiceTexts : string[], nextQuestionId:number[]) {
    let postbackDatas = [];
    for (let i = 0; i < choiceTexts.length; i++) {
        let data = '';
        if(nextQuestionId[i]) {
            data = `{"answer":"${choiceTexts[i]}","next_id":${nextQuestionId[i]}}`;

        }else{
            data = `{"answer":"${choiceTexts[i]}"}`
        }
        postbackDatas.push(data);
    }
    return postbackDatas;
}
