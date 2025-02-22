package kr.co.user.travelTogether;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FriendService {
    @Autowired
    private FriendRepository friendRepository;

    // 친구요청 보내기
    public void sendFriendRequest(String userID, String email) {
        friendRepository.sendFriendRequestByEmail(userID, email);
    }

    // 이메일 검색
}
