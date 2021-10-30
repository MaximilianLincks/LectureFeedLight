package com.lecturefeed.LectureFeedLight.controller.listener;

import com.lecturefeed.LectureFeedLight.controller.service.AdminService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionConnectedEvent;

@AllArgsConstructor
@Component
public class StompConnectedEvent implements ApplicationListener<SessionConnectedEvent> {

    @Getter
    private final AdminService adminService;

    @Override
    public void onApplicationEvent(SessionConnectedEvent event) {
        adminService.addUserName(event.getUser().getName());
    }
}