package kr.co.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class UserApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

	// 빈으로 등록 - 스프링 컨테이너가 관리할 객체
	@Bean
	public WebMvcConfigurer crosConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				System.out.println("Cros Allow Origin 실행");
				registry.addMapping("/**")
						.allowedOriginPatterns( "http://localhost:3001/", "http://localhost:3001")
						.allowedHeaders("*")
						.allowCredentials(true)
						.allowedMethods("*")
						.maxAge(3600);
			}
		};
	}


}
