package kr.co.user.member;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public List<Member> getMembers(){
        return memberRepository.findAll();
    }

    public Member addMember(Member entity){
        return memberRepository.save(entity);
    }
}
