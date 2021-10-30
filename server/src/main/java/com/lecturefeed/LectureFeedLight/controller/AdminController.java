package com.lecturefeed.LectureFeedLight.controller;


import com.lecturefeed.LectureFeedLight.controller.service.AdminService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

import java.security.Principal;

@AllArgsConstructor
@Controller
public class AdminController {

    @Getter
    private final AdminService adminService;


    @MessageMapping("/admin/msg")
    public void msg(String message, Principal principal) throws Exception {
        Thread.sleep(1000); // simulated delay
        adminService.sendMsgToAll(message);
        //return HtmlUtils.htmlEscape(message);
    }

}
