import intent from './intent';

export {
  intent
}

export declare namespace AIUI {
  interface Event {
    session: {
      sessionId: string,
      properties: any
    },
    request: {
      intent: string,
      slots: any,
      text: string
    },
    skill: {
      properties: any
    },
    appid: string,
    uid: string
  }

  interface Context {
    userData: string,
    persParam: string,
    gpsLng: string,
    gpsLat: string,
    netIp: string,
    deviceId: string,
    language: string,
    accent: string,
    feature: any,
  }

  interface Response {
    speak(word: string, data?: any);
    over(data);
    end(word, data);
    call(functionName: any, event: Event, context, response: Response);
  }

  interface Handler {
    sessionBegin(event: AIUI.Event, context: AIUI.Context, response: AIUI.Response);
    sessionEnd(event: AIUI.Event, context: AIUI.Context, response: AIUI.Response);
  }
}