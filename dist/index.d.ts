import intent from './intent';
export { intent };
export declare namespace AIUI {
    interface Event {
        session: {
            sessionId: string;
            properties: any;
        };
        request: {
            intent: string;
            slots: any;
            text: string;
        };
        skill: {
            properties: any;
        };
        appid: string;
        uid: string;
    }
    interface Context {
        userData: string;
        persParam: string;
        gpsLng: string;
        gpsLat: string;
        netIp: string;
        deviceId: string;
        language: string;
        accent: string;
        feature: any;
    }
    interface Response {
        speak(word: string, data?: any): any;
        over(data: any): any;
        end(word: any, data: any): any;
        call(functionName: any, event: Event, context: any, response: Response): any;
    }
    interface Handler {
        sessionBegin(event: AIUI.Event, context: AIUI.Context, response: AIUI.Response): any;
        sessionEnd(event: AIUI.Event, context: AIUI.Context, response: AIUI.Response): any;
    }
}
