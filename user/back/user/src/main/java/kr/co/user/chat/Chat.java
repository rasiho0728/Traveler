package kr.co.user.chat;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Embeddable
@Table(name = "CHATLOG")
public class Chat {
    
}
