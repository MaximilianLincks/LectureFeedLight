import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import {Frame} from "stompjs";
import {Store} from "@ngrx/store";

export type subscriptionPoint = [string, Function];

export class WebsocketService {

  private readonly IS_DEBUG = true;
  private stompClient: Stomp.Client|null = null;
  protected store: Store|null = null;

  protected getEndpointUrl(): String{
    if(this.IS_DEBUG){
      return location.origin.replace("4200", "8080")+"/";
    }
    return location.origin+"/";
  }

  public getStompClient(): any {
    return this.stompClient;
  }

  public connect(token: string, store: Store): Promise<Frame>
  {
    return new Promise((resolve, reject) => {
      this.stompClient = Stomp.over(new SockJS(this.getEndpointUrl()+'ws'));
      this.stompClient.connect({token: token}, (frame) => {
        if(frame !== undefined){
          this.store = store;
          resolve(frame);
        }else {
          reject(new Error("Can not connect to server"));
        }
      });
    });
  }

  protected mapSubscribesToPoints(table: subscriptionPoint[]){
    for (const e of table) this.getStompClient().subscribe(e[0], (res: Frame) => {
      try{
        if(res.body.trim().length > 2){
          e[1](JSON.parse(res.body), res)
        }
      }catch (e){
        console.warn("failed to parse body of ", res.body)
      }
    });
  }


}

