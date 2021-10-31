import {subscriptionPoint, WebsocketService} from "../../../lib/websocket/WebsocketService";
import {Frame} from "stompjs";
import {Store} from "@ngrx/store";
import {addQuestion} from "../../../lib/state/question/question.action";
import {Question} from "../../../lib/model/Question";

export class WebsocketAdminService extends WebsocketService{

  private subscriptionPoints: subscriptionPoint[] = [
    ['/admin/question', this.onQuestion.bind(this)]
  ];

  async connect(token: string, store: Store) {
    try {
      const frame = await super.connect(token, store);
      this.mapSubscribesToPoints(this.subscriptionPoints);
      return Promise.resolve(frame);
    }catch (e){
      return Promise.reject(e);
    }
  }

  sendMsg(msg: string){
    this.getStompClient().send("/admin/question/add", {}, msg);
  }

  private onQuestion(question: any){
    this.store?.dispatch(addQuestion({ question }));
  }





}
