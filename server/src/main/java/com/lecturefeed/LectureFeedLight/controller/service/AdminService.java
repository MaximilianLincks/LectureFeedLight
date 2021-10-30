package com.lecturefeed.LectureFeedLight.controller.service;

import lombok.Data;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Data
@Service
public class AdminService {
    private final SimpMessagingTemplate simpMessagingTemplate;
    private static final String WS_MESSAGE_TRANSFER_DESTINATION = "/admin/msg";

    private List<Principal> principals = new ArrayList<>();

    AdminService(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    public void sendMsgToAll(String msg) {
        //hier könnte man mit dem pfad des subscriber's arbeiten. z.B /admin/{principalid}/msg
        //akuell schickt es an alle die WS_MESSAGE_TRANSFER_DESTINATION subscribed haben
        simpMessagingTemplate.convertAndSend(WS_MESSAGE_TRANSFER_DESTINATION, msg);
    }

    public void addPrincipal(Principal principal) {
        principals.add(principal);
    }
}
