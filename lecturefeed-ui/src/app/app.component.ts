import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectQuestions} from "./state/question/question.selector";
import {AppState} from "./state/AppState";
import {WebsocketAdminService} from "./socket/WebsocketAdminService";
import {AuthenticationService} from "./service/authenticationService/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lecturefeed-ui';

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly websocketAdminService: WebsocketAdminService,
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
