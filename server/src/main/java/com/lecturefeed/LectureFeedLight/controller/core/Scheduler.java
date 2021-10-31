package com.lecturefeed.LectureFeedLight.controller.core;

import com.lecturefeed.LectureFeedLight.controller.service.AdminService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Scheduler {
    private final AdminService adminService;

    Scheduler(AdminService greetingService) {
        this.adminService = greetingService;
    }

//    @Scheduled(fixedRateString = "6000", initialDelayString = "0")
//    public void schedulingTask() {
//        //adminService.sendMessages();
//    }
}
