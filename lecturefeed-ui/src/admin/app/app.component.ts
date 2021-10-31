import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../lib/service/authentication/authentication.service";
import {WebsocketAdminService} from "../lib/websocket/WebsocketAdminService";
import {Store} from "@ngrx/store";
import {selectQuestions} from "../../lib/state/question/question.selector";
import {AppState} from "../state/AppState";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lecturefeed-ui';

  websocketAdminService = new WebsocketAdminService();

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.connect();
    this.store.select(selectQuestions).subscribe(questions => {
        console.log(questions);
    });
  }

  public connect() {
    this.authenticationService.getAdminToken().subscribe(req => {
      this.websocketAdminService.connect(req.token, this.store).then(() => {
        this.websocketAdminService.sendMsg("test question");
      });
    })
  }


}
