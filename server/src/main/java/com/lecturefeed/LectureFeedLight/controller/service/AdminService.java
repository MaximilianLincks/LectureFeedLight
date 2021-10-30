package com.lecturefeed.LectureFeedLight.controller.service;

import lombok.Data;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Service
public class AdminService {
    private final SimpMessagingTemplate simpMessagingTemplate;
    private static final String WS_MESSAGE_TRANSFER_DESTINATION = "/admin/msg";
    private List<String> userNames = new ArrayList<>();

    AdminService(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    public void sendMessages() {
        simpMessagingTemplate.convertAndSend(WS_MESSAGE_TRANSFER_DESTINATION,
                "Hallo " + " at " + new Date().toString());
    }

    public void addUserName(String username) {
        userNames.add(username);
    }
}
